"use client";

import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import { sendApplicationForm } from "../app/actions/application";

export default function PlayerApplicationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);

        const formData = new FormData(e.currentTarget);
        const result = await sendApplicationForm(formData);

        setFormStatus(result);
        setIsSubmitting(false);

        if (result.success) {
            formRef.current?.reset();
        }
    };

    return (
        <div className="bg-zinc-900/30 p-8 border border-zinc-800 rounded-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Nome</label>
                        <input type="text" id="name" name="name" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm rounded-sm" placeholder="Il tuo nome" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Email</label>
                        <input type="email" id="email" name="email" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm rounded-sm" placeholder="latua@email.com" />
                    </div>
                </div>

                {/* Gaming Identity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="discord" className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Discord ID</label>
                        <input type="text" id="discord" name="discord" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm rounded-sm" placeholder="username#0000 o username" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="rank" className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Rank Attuale</label>
                        <select id="rank" name="rank" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm rounded-sm appearance-none cursor-pointer">
                            <option value="">Seleziona Rank</option>
                            <option value="Iron">Iron</option>
                            <option value="Bronze">Bronze</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Diamond">Diamond</option>
                            <option value="Ascendant">Ascendant</option>
                            <option value="Immortal">Immortal</option>
                            <option value="Radiant">Radiant</option>
                        </select>
                    </div>
                </div>

                {/* Performance & Availability */}
                <div className="space-y-2">
                    <label htmlFor="tracker" className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Link Tracker.gg</label>
                    <input type="url" id="tracker" name="tracker" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm rounded-sm" placeholder="https://tracker.gg/valorant/profile/..." />
                </div>

                <div className="space-y-2">
                    <label htmlFor="availability" className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Disponibilità (Giorni/Orari)</label>
                    <input type="text" id="availability" name="availability" required className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm rounded-sm" placeholder="Es. Lun-Ven dopo le 21:00" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Perché vuoi unirti a GDG?</label>
                    <textarea id="message" name="message" rows={4} className="w-full bg-black border border-zinc-800 p-3 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm rounded-sm resize-none" placeholder="Raccontaci brevemente i tuoi obiettivi..."></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-black font-heading font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed clip-valorant"
                >
                    {isSubmitting ? (
                        <>Invio in corso...</>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            INVIA CANDIDATURA
                        </>
                    )}
                </button>

                {formStatus && (
                    <div className={`p-4 rounded-sm flex items-center gap-3 ${formStatus.success ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                        {formStatus.success ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                        <p className="text-sm font-bold">{formStatus.message}</p>
                    </div>
                )}
            </form>
        </div>
    );
}
