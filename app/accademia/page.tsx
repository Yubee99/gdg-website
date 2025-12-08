import Link from "next/link";
import { Target, Video, TrendingUp, ArrowRight, User } from "lucide-react";

export default function AccademiaPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            {/* 1. HERO SECTION */}
            <section className="relative py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-80 z-0"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[100px] rounded-full z-0"></div>

                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="valorant-glitch text-6xl md:text-8xl font-heading font-bold uppercase tracking-tight mb-4">
                        GDG <span className="text-primary glitch-text-color">Academy</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-body font-light max-w-2xl mx-auto">
                        Dalla teoria alla pratica. Impara dai migliori player della community.
                    </p>
                </div>
            </section>

            {/* 2. SERVICES SECTION (Grid) */}
            <section className="py-16 container mx-auto px-4 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card A: Coaching 1on1 */}
                    <div className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] flex flex-col gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 text-primary">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-white group-hover:text-primary transition-colors">
                            Coaching 1 on 1
                        </h3>
                        <p className="text-gray-400 font-body leading-relaxed">
                            Sessioni private per analizzare i tuoi errori e migliorare la mira. Focus specifico sulle tue debolezze.
                        </p>
                    </div>

                    {/* Card B: VOD Review */}
                    <div className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] flex flex-col gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 text-primary">
                            <Video className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-white group-hover:text-primary transition-colors">
                            VOD Review
                        </h3>
                        <p className="text-gray-400 font-body leading-relaxed">
                            Analisi tattica delle tue partite registrate. Scopri il macro-game e migliora il decision making.
                        </p>
                    </div>

                    {/* Card C: Percorso Rank Up */}
                    <div className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] flex flex-col gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300 text-primary">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-white group-hover:text-primary transition-colors">
                            Percorso Rank Up
                        </h3>
                        <p className="text-gray-400 font-body leading-relaxed">
                            Guide specifiche per uscire dall'Elo Hell. Strategie mirate per ogni rank, da Ferro a Radiante.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. COACH TEAM SECTION */}
            <section className="py-20 bg-zinc-900/30 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 uppercase tracking-tight">
                        I Nostri <span className="text-primary">Coach</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {/* Coach Placeholder 1 */}
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                                <User className="w-12 h-12 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-heading font-bold text-white">Coach Viper</h4>
                                <p className="text-primary font-bold text-sm tracking-wider uppercase mb-1">Controller Specialist</p>
                                <span className="inline-block bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-white/10">
                                    Immortale 3
                                </span>
                            </div>
                        </div>

                        {/* Coach Placeholder 2 */}
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                                <User className="w-12 h-12 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-heading font-bold text-white">Coach Jett</h4>
                                <p className="text-primary font-bold text-sm tracking-wider uppercase mb-1">Duelist / Entry</p>
                                <span className="inline-block bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-white/10">
                                    Radiante
                                </span>
                            </div>
                        </div>

                        {/* Coach Placeholder 3 */}
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-32 h-32 bg-zinc-800 rounded-full border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                                <User className="w-12 h-12 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-heading font-bold text-white">Coach Sova</h4>
                                <p className="text-primary font-bold text-sm tracking-wider uppercase mb-1">Initiator / IGL</p>
                                <span className="inline-block bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-white/10">
                                    Immortale 2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="py-24 container mx-auto px-4 flex justify-center">
                <div className="w-full max-w-4xl bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 p-12 rounded-lg text-center relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-all duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-none">
                            Pronto a salire di <span className="text-primary">grado?</span>
                        </h2>
                        <Link
                            href="https://discord.com/invite/JnBWf9Ngy9"
                            className="px-10 py-4 bg-primary text-black font-heading font-bold text-xl uppercase tracking-wide hover:bg-yellow-500 transition-all transform hover:scale-105 rounded-sm flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        >
                            Prenota una Sessione
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
