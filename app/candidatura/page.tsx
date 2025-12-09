import Link from "next/link";
import { Check, Target, Users, Trophy, ChevronRight, Monitor, Wifi, Shield, Brain, Swords } from "lucide-react";

export default function CandidaturaPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/recruitment-2026.jpg"
                        alt="GDG Recruitment"
                        className="w-full h-full object-cover opacity-40 blur-sm scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter relative drop-shadow-2xl">
                        SEI PRONTO A FARE <br /> <span className="text-primary glitch-text-color">IL SALTO?</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 font-body max-w-3xl mx-auto leading-relaxed border-l-4 border-primary pl-6 md:border-none md:pl-0 drop-shadow-md">
                        Il tuo talento merita la giusta disciplina. Entra nel circuito competitivo del GDG Network e porta le tue skill al livello successivo.
                    </p>

                    <div className="pt-8">
                        <Link href="#candidati" className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-black font-heading font-bold text-xl uppercase tracking-widest hover:bg-white transition-all clip-valorant shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                            Candidati Ora
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. BENEFITS SECTION */}
            <section className="py-24 container mx-auto px-4 relative">
                <div className="text-left mb-16 border-b border-zinc-800 pb-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-black uppercase text-white mb-2">Perché <span className="text-primary">GDG?</span></h2>
                    <p className="text-zinc-500 font-body uppercase tracking-widest">Il vantaggio competitivo che cercavi</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-zinc-900/40 border border-white/10 p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <Brain className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold uppercase mb-3">Coaching & Analisi</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Accesso prioritario a sessioni private con i coach GDG, VOD review e percorsi personalizzati.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-900/40 border border-white/10 p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <Shield className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold uppercase mb-3">Team Strutturati</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Inserimento in un roster interno bilanciato, con obiettivi di team e allenamenti costanti.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-900/40 border border-white/10 p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <Trophy className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold uppercase mb-3">Tornei Esclusivi</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Partecipazione a tornei interni con montepremi e opportunità di rappresentare GDG all'esterno.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-zinc-900/40 border border-white/10 p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <Users className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold uppercase mb-3">Community</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Un ambiente non tossico, maturo e stimolante dove l'obiettivo è la crescita collettiva.</p>
                    </div>
                </div>
            </section>

            {/* 3. REQUIREMENTS SECTION */}
            <section className="py-24 bg-zinc-900 relative clip-valorant-y overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Swords className="w-96 h-96 text-white" />
                </div>

                <div className="container mx-auto px-4 relative z-10 masonry-grid flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-heading font-black uppercase text-white mb-6">IL FILTRO <span className="text-secondary-red">D'INGRESSO</span></h2>
                        <p className="text-zinc-400 text-lg mb-8">Non cerchiamo la perfezione, cerchiamo la dedizione. Ecco cosa serve per entrare.</p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                    <Trophy className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Rank Minimo</h4>
                                    <p className="text-zinc-400 text-sm">Attualmente Iron o superiore su Valorant. Tutti possono giocare.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                    <Brain className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Attitudine Mental</h4>
                                    <p className="text-zinc-400 text-sm">Disciplina, voglia di imparare e capacità di ricevere critiche costruttive senza tiltare.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                    <Check className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Impegno Costante</h4>
                                    <p className="text-zinc-400 text-sm">Disponibilità per allenamenti di squadra.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                    <Monitor className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Setup</h4>
                                    <p className="text-zinc-400 text-sm">Connessione internet stabile, microfono di qualità e hardware adeguato.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Image Requirement decorative side */}
                    <div className="md:w-1/2 relative h-full min-h-[400px] border-2 border-dashed border-zinc-700 rounded-sm flex items-center justify-center bg-zinc-950/50">
                        <div className="text-center p-8">
                            <p className="font-heading text-6xl text-zinc-800 font-black">NO<br />TOXICITY</p>
                            <p className="text-zinc-500 mt-4 uppercase tracking-widest text-xs">Zero Tolerance Policy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROCESS SECTION */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-black uppercase text-white mb-4">IL PERCORSO DI <span className="text-primary">SELEZIONE</span></h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {/* Step 1 */}
                        <div className="bg-black border border-zinc-800 p-6 text-center group hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-primary text-black font-bold text-xl flex items-center justify-center rounded-sm mx-auto mb-4 relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]">1</div>
                            <h4 className="font-heading font-bold uppercase text-lg mb-2">Entra in Discord</h4>
                            <p className="text-zinc-400 text-sm">Unisciti al nostro server ufficiale.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-black border border-zinc-800 p-6 text-center group hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-black font-bold text-xl flex items-center justify-center rounded-sm mx-auto mb-4 transition-colors">2</div>
                            <h4 className="font-heading font-bold uppercase text-lg mb-2">Candidatura</h4>
                            <p className="text-zinc-400 text-sm">Vai nel canale candidature e compila il modulo.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-black border border-zinc-800 p-6 text-center group hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-black font-bold text-xl flex items-center justify-center rounded-sm mx-auto mb-4 transition-colors">3</div>
                            <h4 className="font-heading font-bold uppercase text-lg mb-2">Tryout</h4>
                            <p className="text-zinc-400 text-sm">Invito a una sessione di prova nel team.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="bg-black border border-zinc-800 p-6 text-center group hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-black font-bold text-xl flex items-center justify-center rounded-sm mx-auto mb-4 transition-colors">4</div>
                            <h4 className="font-heading font-bold uppercase text-lg mb-2">Welcome</h4>
                            <p className="text-zinc-400 text-sm">Inserimento nel team più adatto al tuo livello.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION DISCORD (REPLACED FORM) */}
            <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-black md:px-4 border-t border-zinc-800" id="candidati">
                <div className="container mx-auto max-w-4xl relative text-center">

                    <div className="mb-12">
                        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-6">CANDIDATI SU <span className="text-[#5865F2]">DISCORD</span></h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Per garantire la migliore esperienza e una valutazione diretta, gestiamo tutte le candidature attraverso il nostro server Discord ufficiale.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <Link
                            href="https://discord.com/invite/JnBWf9Ngy9"
                            className="clip-valorant inline-flex items-center gap-3 px-12 py-6 bg-[#5865F2] text-white font-heading font-bold text-2xl uppercase tracking-widest hover:bg-[#4752C4] transition-all shadow-[0_0_30px_rgba(88,101,242,0.4)]"
                        >
                            <span className="flex items-center gap-3">
                                {/* Discord Icon SVG */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1023.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                                </svg>
                                COMPILA IL MODULO
                            </span>
                        </Link>

                        <p className="text-zinc-500 text-sm mt-4">
                            Una volta entrato, vai nel canale <span className="text-zinc-300 font-bold">#candidature</span> e segui le istruzioni per aprire un ticket o compilare il form.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
