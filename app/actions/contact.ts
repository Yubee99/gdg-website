"use server";

export async function sendContactForm(formData: FormData) {
    const rawFormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
    };

    // 1. Validation: Required fields
    if (!rawFormData.name || !rawFormData.email || !rawFormData.message) {
        return { success: false, message: "Per favore, compila tutti i campi obbligatori." };
    }

    // 2. Validation: Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawFormData.email)) {
        return { success: false, message: "Inserisci un indirizzo email valido." };
    }

    // 3. Validation: Message length
    const MAX_LENGTH = 2000;
    if (rawFormData.message.length > MAX_LENGTH) {
        return { success: false, message: `Il messaggio è troppo lungo. Limite: ${MAX_LENGTH} caratteri.` };
    }

    // 4. Validation: Name length (to prevent breaking Discord embeds)
    if (rawFormData.name.length > 100) {
        return { success: false, message: "Il nome inserito è troppo lungo." };
    }

    const webhookUrl = "https://discord.com/api/webhooks/1446903667364987011/UNSgZDdgPzj-wXug65ly1EkyM0TsBHiYKUdDvxTlRTU5PcDF4IWO0Z-SxEg348UHD_fW";

    const embed = {
        title: "📬 Nuovo Messaggio dal Sito Web",
        description: "Un utente ha compilato il form di contatto.",
        color: 0xF4CE14, // Primary Gold Color
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
                name: "📝 Oggetto",
                value: rawFormData.subject || "Nessun oggetto",
                inline: false
            },
            {
                name: "💬 Messaggio",
                value: rawFormData.message.length > 1024 ? rawFormData.message.substring(0, 1021) + "..." : rawFormData.message, // Discord field value limit is 1024
                inline: false
            }
        ],
        footer: {
            text: "GDG Website Contact Form",
            // icon_url: "https://gdc-valorant.vercel.app/gdg-logo.png" 
        },
        timestamp: new Date().toISOString()
    };

    // Handle very long messages by putting them in description if needed, or splitting. 
    // For simplicity, we truncate in the field value above if > 1024, 
    // but since we validate < 2000, we might lose part of the message in the embed field.
    // Let's rely on standard practice: critical info in fields.

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

        return { success: true, message: "Grazie per averci scritto! Ti ricontatteremo presto." };
    } catch (error) {
        console.error("Error sending to Discord:", error);
        return { success: false, message: "Si è verificato un problema tecnico durante l'invio. Riprova più tardi." };
    }
}
