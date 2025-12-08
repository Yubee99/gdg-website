import Link from "next/link";
import { User, Twitch, Shield, ArrowRight, Crown, Star } from "lucide-react";
import { getTwitchBroadcasters, StreamerInfo } from "../../lib/twitch";
import { StreamerGrid } from "../../components/StreamerGrid";

const foundersList = ["its_xmanux", "ema_colcane"];
const coFoundersStreamersList = ["snakerv_tv"];
const partnerList: string[] = ["andrixx___"];
const creatorList = [
    "fullkro",
    "reemlick",
    "zenvll",
    "fratellop",
    "mikyruggy",
    "thelampo89",
    "0scarega"
];

// Combine all for fetching
const twitchChannels = [...foundersList, ...coFoundersStreamersList, ...partnerList, ...creatorList];

const founders = [
    { name: "Its_XManuX", role: "Founder" },
    { name: "Ema_ColCane", role: "Founder" },
];

const coFounders = [
    { name: "Cice", role: "Co-Founder" },
    { name: "LastSamurai", role: "Co-Founder" },
    { name: "SnakerV_Tv", role: "Co-Founder" },
];

const staffList = [
    { name: "mario89anubis", role: "Staff" },
];

export default async function CommunityPage() {
    // Fetch real data
    const streamersData = await getTwitchBroadcasters(twitchChannels);

    // Sort function reused for consistency
    const sortStreamers = (list: StreamerInfo[]) => {
        return [...list].sort((a, b) => {
            if (a.live && !b.live) return -1;
            if (!a.live && b.live) return 1;
            return a.name.localeCompare(b.name);
        });
    };

    const streamers = sortStreamers(streamersData);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            {/* 1. HERO SECTION */}
            <section className="relative py-20 md:py-28 flex flex-col items-center text-center overflow-hidden border-b border-white/5">
                {/* Background Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/40 to-black z-0"></div>

                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="valorant-glitch text-6xl md:text-8xl font-heading font-bold uppercase tracking-tight mb-4">
                        GDG <span className="text-primary glitch-text-color">FAMILY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-body font-light max-w-2xl mx-auto tracking-wide">
                        Streamer, Player, Staff. Unisciti al governo.
                    </p>
                </div>
            </section>

            {/* 2. STREAMERS SECTION */}
            <section className="py-20 container mx-auto px-4">

                {/* CATEGORY: FOUNDERS & CO-FOUNDERS */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-left mb-8 uppercase flex items-center gap-3">
                        <Shield className="w-8 h-8 text-primary" />
                        Founder & <span className="text-primary">Co-Founder</span>
                    </h2>
                    <StreamerGrid
                        streamers={streamers.filter(s => foundersList.includes(s.login.toLowerCase()) || coFoundersStreamersList.includes(s.login.toLowerCase()))}
                        defaultVariant="founder"
                        onGetVariant={(s) => {
                            if (foundersList.includes(s.login.toLowerCase())) return 'founder';
                            if (coFoundersStreamersList.includes(s.login.toLowerCase())) return 'co-founder';
                            return undefined;
                        }}
                    />
                </div>

                {/* CATEGORY: PARTNERS */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-left mb-8 uppercase flex items-center gap-3">
                        <User className="w-8 h-8 text-primary" />
                        Partner <span className="text-primary">Ufficiali</span>
                    </h2>
                    {partnerList.length > 0 ? (
                        <StreamerGrid streamers={streamers.filter(s => partnerList.includes(s.login.toLowerCase()))} defaultVariant="partner" />
                    ) : (
                        <div className="text-zinc-500 text-sm italic border border-dashed border-zinc-800 p-6 rounded-sm">
                            Nessun partner attivo al momento.
                        </div>
                    )}
                </div>

                {/* CATEGORY: CREATORS */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-left mb-8 uppercase flex items-center gap-3">
                        <Twitch className="w-8 h-8 text-primary" />
                        Content <span className="text-primary">Creator</span>
                    </h2>
                    <StreamerGrid streamers={streamers.filter(s => creatorList.includes(s.login.toLowerCase()))} defaultVariant="creator" />
                </div>

            </section>

            {/* 3. STAFF SECTION */}
            <section className="py-16 bg-zinc-900/20 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-heading font-bold text-center mb-10 uppercase tracking-widest text-zinc-500">
                        Staff & Founders
                    </h2>

                    {/* FOUNDERS */}
                    <div className="mb-12">
                        <h3 className="text-xl font-heading font-bold text-center mb-6 uppercase tracking-wider text-primary">Founders</h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
                            {founders.map((member, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 p-4 pr-8 rounded-sm hover:border-yellow-500/50 transition-all duration-300 group min-w-[280px]">
                                    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 group-hover:border-yellow-500/40 transition-colors">
                                        <Crown className="w-5 h-5 text-zinc-400 group-hover:text-yellow-500 transition-colors" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-heading font-bold text-white tracking-wide group-hover:text-yellow-500 transition-colors">{member.name}</h4>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CO-FOUNDERS */}
                    <div className="mb-12">
                        <h3 className="text-xl font-heading font-bold text-center mb-6 uppercase tracking-wider text-white">Co-Founders</h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
                            {coFounders.map((member, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 p-4 pr-8 rounded-sm hover:border-zinc-400/50 transition-all duration-300 group min-w-[280px]">
                                    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 group-hover:border-zinc-400/40 transition-colors">
                                        <Star className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-heading font-bold text-white tracking-wide group-hover:text-zinc-300 transition-colors">{member.name}</h4>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* STAFF */}
                    <div>
                        <h3 className="text-xl font-heading font-bold text-center mb-6 uppercase tracking-wider text-zinc-500">Staff</h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
                            {staffList.map((member, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 p-4 pr-8 rounded-sm hover:border-primary/50 transition-all duration-300 group min-w-[280px]">
                                    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 group-hover:border-primary/40 transition-colors">
                                        <Shield className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-heading font-bold text-white tracking-wide group-hover:text-primary transition-colors">{member.name}</h4>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. JOIN US CTA */}
            <section className="py-24 container mx-auto px-4 flex justify-center">
                <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 p-10 md:p-14 rounded-sm text-center relative overflow-hidden flex flex-col items-center gap-6 group hover:border-indigo-500/30 transition-all duration-500">
                    {/* Decorative Discord Blur */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#5865F2]/5 blur-[80px] rounded-full"></div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight relative z-10">
                        Vuoi entrare nel team o diventare un nostro <span className="text-[#5865F2]">streamer?</span>
                    </h2>
                    <p className="text-zinc-400 max-w-lg font-body relative z-10">
                        Cerchiamo sempre nuovi talenti, moderator e content creator. Unisciti al server Discord e apri un ticket per candidarti.
                    </p>

                    <Link
                        href="https://discord.com/invite/JnBWf9Ngy9"
                        className="mt-4 px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-heading font-bold text-lg uppercase tracking-wide transition-all transform hover:scale-105 rounded-sm flex items-center gap-2 shadow-lg shadow-[#5865F2]/20 relative z-10"
                    >
                        Candidati su Discord
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
