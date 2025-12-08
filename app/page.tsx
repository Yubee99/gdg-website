import Link from "next/link";
import { ArrowRight, Target, Users, Trophy } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Pattern a griglia sottile (opacity 10%) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                {/* Gradiente radiale centrale */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)]"></div>

                <div className="relative z-10 px-4">
                    {/* TITOLO PRINCIPALE con Effetto Glitch CSS */}
                    <div className="mb-6">
                        <h1 className="valorant-glitch text-6xl md:text-9xl font-heading font-black uppercase tracking-tighter leading-none">
                            GOVERNO DEI <br /> <span className="text-primary glitch-text-color">GAMERS</span>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-400 font-body tracking-wide max-w-2xl mx-auto mb-10 border-l-2 border-primary pl-4 md:pl-0 md:border-none">
                        La community italiana di valorant dove il talento incontra la disciplina.
                    </p>

                    {/* CTA BUTTONS con angoli tagliati */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        {/* Bottone 1: Accademia (Oro) */}
                        <Link
                            href="/accademia"
                            className="clip-valorant relative px-10 py-5 bg-primary text-black font-heading font-bold text-2xl uppercase tracking-widest hover:bg-white transition-colors group"
                        >
                            <span className="flex items-center gap-2">
                                ENTRA IN ACCADEMIA
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        {/* Bottone 2: Discord (Trasparente/Bordo) */}
                        <Link
                            href="https://discord.com/invite/JnBWf9Ngy9"
                            className="clip-valorant relative px-10 py-5 bg-transparent border-2 border-white/50 text-white font-heading font-bold text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-all group glitch-red-overlay"
                        >
                            <span className="flex items-center gap-2">
                                UNISCITI SU DISCORD
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. STATISTICHE LIVE (Ticker Marquee) */}
            <div className="bg-primary/90 overflow-hidden py-3 border-y-2 border-black">
                <div className="flex w-max animate-marquee">
                    <div className="flex gap-12 px-6 text-black font-heading font-bold text-xl uppercase tracking-widest whitespace-nowrap">
                        <span>/// 500+ MEMBRI ATTIVI</span>
                        <span>/// 15+ IMMORTAL</span>
                        <span>/// ISCRIZIONI APERTE</span>
                        <span>/// NEXT TOURNAMENT: 22 DICEMBRE</span>
                        <span>/// GDG COMMUNITY</span>
                    </div>
                    {/* DUPLICATE SET */}
                    <div className="flex gap-12 px-6 text-black font-heading font-bold text-xl uppercase tracking-widest whitespace-nowrap">
                        <span>/// 500+ MEMBRI ATTIVI</span>
                        <span>/// 15+ IMMORTAL</span>
                        <span>/// ISCRIZIONI APERTE</span>
                        <span>/// NEXT TOURNAMENT: 22 DICEMBRE</span>
                        <span>/// GDG COMMUNITY</span>
                    </div>
                    {/* TRIPLICATE SET */}
                    <div className="flex gap-12 px-6 text-black font-heading font-bold text-xl uppercase tracking-widest whitespace-nowrap">
                        <span>/// 500+ MEMBRI ATTIVI</span>
                        <span>/// 15+ IMMORTAL</span>
                        <span>/// ISCRIZIONI APERTE</span>
                        <span>/// NEXT TOURNAMENT: 22 DICEMBRE</span>
                        <span>/// GDG COMMUNITY</span>
                    </div>
                </div>
            </div>

            {/* 2.5. COMMUNITY SECTION */}
            <section className="py-24 container mx-auto px-4 text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

                <h2 className="valorant-glitch text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                    LA COMMUNITY CHE <span className="text-primary glitch-text-color text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/80">CRESCE INSIEME</span>
                </h2>
                <p className="text-lg md:text-xl text-zinc-300 font-body max-w-4xl mx-auto leading-relaxed">
                    Siamo molto più di un gruppo: siamo un vero <span className="text-primary font-bold">network</span> di player e streamer che collaborano per crescere insieme.
                    Non siamo nati ieri; la nostra stabilità è frutto di anni di passione condivisa.
                    Qui ti aspettano <span className="text-white font-bold">tornei competitivi</span>, live streaming condivise, maratone epiche e sessioni di gaming quotidiano.
                    La nostra forza è l'unione e la porta è sempre aperta per te.
                    <br /><br />
                    <span className="text-primary font-bold uppercase tracking-widest">Chiunque può entrare, senza restrizioni.</span>
                </p>
            </section>

            {/* 3. PERCHÉ GDC (Bento Grid) */}
            <section className="py-32 container mx-auto px-4 relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

                    {/* Box 1 (Grande Sinistra - Accademia) */}
                    <div className="md:col-span-1 md:row-span-2 relative bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-end group overflow-hidden hover:border-primary/50 transition-colors">
                        {/* Dettagli decorativi angoli */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-primary"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary"></div>

                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            <Target className="w-40 h-40 text-primary" />
                        </div>

                        <h3 className="text-4xl font-heading font-bold uppercase mb-2 relative z-10 text-white">IMPARA DAI MIGLIORI</h3>
                        <p className="text-zinc-400 font-body text-sm mb-6 relative z-10">
                            Coaching session private, VOD review e guide strategiche per scalare i rank.
                        </p>
                        <Link href="/accademia" className="text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors flex items-center gap-2">
                            SCOPRI L'ACCADEMIA <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Box 2 (Destra Alto - Competizione) */}
                    <div className="md:col-span-2 md:row-span-1 relative bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-center group overflow-hidden hover:border-secondary-green/50 transition-colors">
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary-green"></div>
                        <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            <Trophy className="w-24 h-24 text-white" />
                        </div>

                        <h3 className="text-3xl font-heading font-bold uppercase mb-2 text-primary">COMPETIZIONE PURA</h3>
                        <p className="text-zinc-400 font-body max-w-lg">
                            Tornei settimanali con montepremi, custom 5v5 bilanciate e leghe interne.
                        </p>
                    </div>

                    {/* Box 3 (Destra Basso - Community) */}
                    <div className="md:col-span-2 md:row-span-1 relative bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex items-center justify-between group overflow-hidden hover:border-white/30 transition-colors">
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20"></div>
                        <div>
                            <h3 className="text-3xl font-heading font-bold uppercase mb-2">COMMUNITY & VIBES</h3>
                            <p className="text-zinc-400 font-body text-sm max-w-md">
                                Non solo tryhard. Serate chill, watch party e un ambiente non tossico.
                            </p>
                        </div>
                        <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <Users className="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <h2 className="text-6xl md:text-9xl font-heading font-black uppercase tracking-tighter mb-8">
                        NON GIOCARE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">IN SOLO QUEUE.</span>
                    </h2>
                    <Link
                        href="https://discord.com/invite/JnBWf9Ngy9"
                        className="clip-valorant inline-flex px-12 py-6 bg-secondary-red text-white font-heading font-bold text-2xl uppercase tracking-widest hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(206,43,55,0.4)]"
                    >
                        UNISCITI AL SERVER
                    </Link>
                </div>
            </section>

        </div>
    );
}
