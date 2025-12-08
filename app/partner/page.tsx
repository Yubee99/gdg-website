import Link from "next/link";
import { Download, Users, TrendingUp } from "lucide-react";

export default function PartnerPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            {/* Header */}
            <section className="py-20 md:py-32 container mx-auto px-4 text-center">
                <h1 className="valorant-glitch text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-6">
                    Collaborazioni
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 font-body font-light max-w-3xl mx-auto tracking-wide mb-12">
                    Cresciamo insieme. Diventa partner della GDG e raggiungi migliaia di appassionati di Valorant.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button className="px-8 py-4 bg-primary text-black font-heading font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        <Download className="w-5 h-5" />
                        Scarica Media Kit
                    </button>
                    <Link href="/contatti" className="px-8 py-4 border border-zinc-700 text-white font-heading font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-3">
                        Diventa Partner
                    </Link>
                </div>
            </section>

            {/* Why Partner With Us (Brief) */}
            <section className="py-16 bg-zinc-900/30 border-y border-white/5">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="p-6">
                        <Users className="w-10 h-10 text-primary mb-4 mx-auto md:mx-0" />
                        <h3 className="text-xl font-heading font-bold uppercase mb-2">Community Attiva</h3>
                        <p className="text-zinc-500 text-sm">500+ player attivi.</p>
                    </div>
                    <div className="p-6">
                        <TrendingUp className="w-10 h-10 text-primary mb-4 mx-auto md:mx-0" />
                        <h3 className="text-xl font-heading font-bold uppercase mb-2">Visibilità Costante</h3>
                        <p className="text-zinc-500 text-sm">Tornei settimanali trasmessi in live streaming su Twitch.</p>
                    </div>
                    <div className="p-6">
                        <Users className="w-10 h-10 text-primary mb-4 mx-auto md:mx-0" />
                        <h3 className="text-xl font-heading font-bold uppercase mb-2">Target Mirato</h3>
                        <p className="text-zinc-500 text-sm">Chat attiva per trovare i compagni di squadra.</p>
                    </div>
                </div>
            </section>

            {/* Sponsor Grid */}
            <section className="py-24 container mx-auto px-4 text-center">
                <h2 className="text-3xl font-heading font-bold uppercase tracking-widest text-zinc-600 mb-16">
                    I Nostri Partner
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="h-48 bg-zinc-900/50 border border-zinc-800 rounded-sm flex items-center justify-center group hover:border-primary/30 transition-all">
                            <span className="text-zinc-700 font-heading font-bold uppercase text-xl group-hover:text-zinc-500 transition-colors">
                                Il Tuo Logo Qui
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-zinc-500 font-body text-sm">
                    Cerchiamo brand e organizzazioni che condividano la nostra passione per l'eSport.
                </div>
            </section>
        </div>
    );
}
