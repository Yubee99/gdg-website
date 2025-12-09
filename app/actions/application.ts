"use server";

export async function sendApplicationForm(formData: FormData) {
    const rawFormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        discord: formData.get("discord") as string,
        rank: formData.get("rank") as string,
        tracker: formData.get("tracker") as string,
        availability: formData.get("availability") as string,
        message: formData.get("message") as string,
    };

    // 1. Validation: Required fields
    if (!rawFormData.name || !rawFormData.email || !rawFormData.discord || !rawFormData.rank || !rawFormData.tracker) {
        return { success: false, message: "Per favore, compila tutti i campi obbligatori." };
    }

    // 2. Validation: Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawFormData.email)) {
        return { success: false, message: "Inserisci un indirizzo email valido." };
    }

    // 3. Validation: Message length
    const MAX_LENGTH = 2000;
    if ((rawFormData.message?.length || 0) > MAX_LENGTH) {
        return { success: false, message: `Il messaggio è troppo lungo. Limite: ${MAX_LENGTH} caratteri.` };
    }

    const webhookUrl = "https://discord.com/api/webhooks/1446903667364987011/UNSgZDdgPzj-wXug65ly1EkyM0TsBHiYKUdDvxTlRTU5PcDF4IWO0Z-SxEg348UHD_fW";

    const embed = {
        title: "🎮 Nuova Candidatura Player",
        description: "Un utente ha inviato una candidatura per diventare player.",
        color: 0x009246, // Secondary Green for success/entry
        fields: [
            {
                name: "👤 Nome",
                value: rawFormData.name,
                inline: true
            },
            {
                name: "📧 Email",
                value: rawFormData.email,
                inline: true
            },
            {
                name: "💬 Discord ID",
                value: rawFormData.discord,
                inline: true
            },
            {
                name: "🏆 Rank",
                value: rawFormData.rank,
                inline: true
            },
            {
                name: "📊 Tracker",
                value: rawFormData.tracker,
                inline: false
            },
            {
                name: "📅 Disponibilità",
                value: rawFormData.availability || "Non specificata",
                inline: false
            },
            {
                name: "📝 Messaggio/Motivazione",
                value: rawFormData.message ? (rawFormData.message.length > 1024 ? rawFormData.message.substring(0, 1021) + "..." : rawFormData.message) : "Nessun messaggio extra",
                inline: false
            }
        ],
        footer: {
            text: "GDG Player Application",
        },
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ embeds: [embed] }),
        });

        if (!response.ok) {
            console.error(`Discord Webhook Status: ${response.status}`);
            throw new Error("Errore comunicazione con Discord");
        }

        return { success: true, message: "Candidatura inviata con successo! Ti contatteremo presto." };
    } catch (error) {
        console.error("Error sending to Discord:", error);
        return { success: false, message: "Si è verificato un problema tecnico. Riprova più tardi." };
    }
}
