import Link from "next/link";
import { Check, Target, Users, Trophy, ChevronRight, Video, Share2, Palette, PartyPopper, Zap, BarChart3, Mic2, Tv } from "lucide-react";

export default function CandidaturaCreatorPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/gdc-logo.png')] bg-center bg-no-repeat opacity-5 blur-sm scale-150"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/50"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full mb-4 animate-fade-in-up">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Creator Program</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter relative drop-shadow-2xl">
                        FAI CRESCERE LA TUA <br /> <span className="text-primary glitch-text-color">COMMUNITY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 font-body max-w-3xl mx-auto leading-relaxed border-l-4 border-primary pl-6 md:border-none md:pl-0 drop-shadow-md">
                        Non sei solo uno streamer. Sei parte di una rete di creator, pronta a supportare il tuo progetto e a espandere la tua visibilità.
                    </p>

                    <div className="pt-8">
                        <Link href="#candidati" className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-black font-heading font-bold text-xl uppercase tracking-widest hover:bg-white transition-all clip-valorant shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                            Candidati Come Creator
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. BENEFITS SECTION */}
            <section className="py-24 container mx-auto px-4 relative">
                <div className="text-left mb-16 border-b border-zinc-800 pb-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-black uppercase text-white mb-2">Perché <span className="text-primary">GDG?</span></h2>
                    <p className="text-zinc-500 font-body uppercase tracking-widest">Boost Your Content</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-zinc-900/40 border border-white/10 p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <Share2 className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold uppercase mb-3">Cross-Promotion</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Visibilità sui canali social e sul sito GDG, con possibilità di essere messo in evidenza nella nostra home.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-900/40 border border-white/10 p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold uppercase mb-3">Collaborazioni</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Accesso a un network di streamer per organizzare live condivise, maratone e watch party.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-900/40 border border-white/10 p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <Palette className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold uppercase mb-3">Supporto Branding</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Assistenza nella creazione di overlay personalizzati, consigli su marketing e engagement.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-zinc-900/40 border border-white/10 p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-6 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                            <PartyPopper className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold uppercase mb-3">Partner & Sponsor</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Opportunità di partecipare a iniziative esclusive con gli sponsor del GDG Network.</p>
                    </div>
                </div>
            </section>

            {/* 3. REQUIREMENTS SECTION */}
            <section className="py-24 bg-zinc-900 relative clip-valorant-y overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 masonry-grid flex flex-col md:flex-row gap-12 items-center">

                    {/* Visual Side Left */}
                    <div className="md:w-1/2 relative h-full min-h-[400px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
                        <div className="text-center p-8 border-2 border-zinc-800 bg-black/50 backdrop-blur-sm max-w-sm rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex justify-center mb-4 text-primary">
                                <Tv className="w-16 h-16" />
                            </div>
                            <p className="font-heading text-4xl text-white font-black uppercase">Good<br />Vibes<br />Only</p>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-heading font-black uppercase text-white mb-6">COSA <span className="text-primary">CERCHIAMO</span></h2>
                        <p className="text-zinc-400 text-lg mb-8">La qualità prima della quantità. Ecco i nostri standard.</p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                    <Video className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Qualità Tecnica</h4>
                                    <p className="text-zinc-400 text-sm">Buona qualità audio/video e costanza nelle trasmissioni.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                    <BarChart3 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Frequenza</h4>
                                    <p className="text-zinc-400 text-sm">Un piano di pubblicazione coerente (es. min 3 live a settimana).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                    <Target className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Brand Alignment</h4>
                                    <p className="text-zinc-400 text-sm">Zero tossicità, professionalità e passione.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                    <Users className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Numeri Attuali</h4>
                                    <p className="text-zinc-400 text-sm">Non cerchiamo solo grandi numeri, ma un engagement genuino.</p>
                                </div>
                            </div>
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
                            <p className="text-zinc-400 text-sm">Unisciti al server ufficiale del Network.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-black border border-zinc-800 p-6 text-center group hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-black font-bold text-xl flex items-center justify-center rounded-sm mx-auto mb-4 transition-colors">2</div>
                            <h4 className="font-heading font-bold uppercase text-lg mb-2">Ticket</h4>
                            <p className="text-zinc-400 text-sm">Apri un ticket "Candidatura Streamer".</p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-black border border-zinc-800 p-6 text-center group hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-black font-bold text-xl flex items-center justify-center rounded-sm mx-auto mb-4 transition-colors">3</div>
                            <h4 className="font-heading font-bold uppercase text-lg mb-2">Video Call</h4>
                            <p className="text-zinc-400 text-sm">Ci conosciamo per discutere la visione.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="bg-black border border-zinc-800 p-6 text-center group hover:border-primary transition-colors">
                            <div className="w-12 h-12 bg-zinc-800 text-zinc-400 group-hover:bg-primary group-hover:text-black font-bold text-xl flex items-center justify-center rounded-sm mx-auto mb-4 transition-colors">4</div>
                            <h4 className="font-heading font-bold uppercase text-lg mb-2">Lancio</h4>
                            <p className="text-zinc-400 text-sm">Pianifichiamo la tua prima live come GDG Creator.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DISCORD CTA SECTION (Replaced Form) */}
            <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-black md:px-4 border-t border-zinc-800" id="candidati">
                <div className="container mx-auto max-w-4xl relative text-center">

                    <div className="mb-12">
                        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-6">CANDIDATI SU <span className="text-[#5865F2]">DISCORD</span></h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Gestiamo le selezioni dei Creator direttamente sulla nostra piattaforma per valutare al meglio il tuo profilo e i tuoi contenuti.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <Link
                            href="https://discord.com/invite/JnBWf9Ngy9"
                            className="clip-valorant inline-flex items-center gap-3 px-12 py-6 bg-[#5865F2] text-white font-heading font-bold text-2xl uppercase tracking-widest hover:bg-[#4752C4] transition-all shadow-[0_0_30px_rgba(88,101,242,0.4)]"
                        >
                            <span className="flex items-center gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1023.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                                </svg>
                                APRI UN TICKET
                            </span>
                        </Link>

                        <p className="text-zinc-500 text-sm mt-4">
                            Una volta nel server, cerca la sezione <span className="text-zinc-300 font-bold">#supporto-ticket</span> e seleziona "Candidatura Creator".
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
