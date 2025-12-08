
const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

// Type definitions
export type StreamerInfo = {
    name: string;
    login: string;
    main?: string; // We might not get "main" agent/role from Twitch, this is custom data we might mix in or just omit
    live: boolean;
    profileImageUrl: string;
    viewerCount?: number;
    gameName?: string;
    title?: string;
};

// 1. Get Access Token (App Access Token)
async function getAccessToken(): Promise<string | null> {
    if (!CLIENT_ID || !CLIENT_SECRET) {
        console.error("Missing Twitch Client ID or Secret");
        return null;
    }

    try {
        const res = await fetch("https://id.twitch.tv/oauth2/token", {
            method: "POST",
            body: new URLSearchParams({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: "client_credentials",
            }),
            cache: "no-store", // Don't cache the token exchange for now, or simple
        });

        if (!res.ok) {
            console.error("Failed to fetch Twitch token", await res.text());
            return null;
        }

        const data = await res.json();
        return data.access_token;
    } catch (error) {
        console.error("Error fetching Twitch token", error);
        return null;
    }
}

// 2. Fetch Users and Streams
export async function getTwitchBroadcasters(usernames: string[]): Promise<StreamerInfo[]> {
    const token = await getAccessToken();
    if (!token || !CLIENT_ID) {
        // Return mock/empty or handle error
        return [];
    }

    // Helper to chunk array if too many users (Twitch limit is usually 100, we have ~11 so it's fine)
    const queryParams = usernames.map(u => `login=${u}`).join("&");

    try {
        // A. Get User Info (for profile pic)
        const usersRes = await fetch(`https://api.twitch.tv/helix/users?${queryParams}`, {
            headers: {
                "Client-ID": CLIENT_ID,
                "Authorization": `Bearer ${token}`,
            },
            next: { revalidate: 3600 } // Cache user info (avatar) for 1 hour
        });

        if (!usersRes.ok) return [];
        const usersData = await usersRes.json();
        const usersMap = new Map();
        usersData.data.forEach((u: any) => usersMap.set(u.login.toLowerCase(), u));

        // B. Get Stream Info (user_login)
        const streamsQueryParams = usernames.map(u => `user_login=${u}`).join("&");
        const streamsRes = await fetch(`https://api.twitch.tv/helix/streams?${streamsQueryParams}`, {
            headers: {
                "Client-ID": CLIENT_ID,
                "Authorization": `Bearer ${token}`,
            },
            next: { revalidate: 60 } // Cache stream status for 60 seconds
        });

        if (!streamsRes.ok) return [];
        const streamsData = await streamsRes.json();
        const streamsMap = new Map();
        streamsData.data.forEach((s: any) => streamsMap.set(s.user_login.toLowerCase(), s));

        // C. Combine Data
        const results: StreamerInfo[] = usernames.map(username => {
            const lower = username.toLowerCase();
            const user = usersMap.get(lower);
            const stream = streamsMap.get(lower);

            // Default avatar if user not found (deleted/banned?)
            const profileImageUrl = user?.profile_image_url || "";

            return {
                name: user?.display_name || username,
                login: username,
                live: !!stream, // true if stream object exists
                profileImageUrl,
                viewerCount: stream?.viewer_count,
                gameName: stream?.game_name,
                title: stream?.title,
                main: stream?.game_name || "Valorant", // Fallback to Game Name as "Main" or just generic
            };
        });

        return results;
    } catch (error) {
        console.error("Error fetching Twitch data", error);
        return [];
    }
}
