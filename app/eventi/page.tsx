import Link from "next/link";
import { Calendar, Trophy, Zap, Crown, Play } from "lucide-react";

// Mock Data for Upcoming Events
const upcomingEvents = [
    {
        title: "GDG Christmas Cup",
        date: "22 Dicembre, ore 15:00",
        type: "Torneo",
        status: "Iscrizioni Aperte",
        statusColor: "text-green-500",
        linkLabel: "Registra il Team",
        linkUrl: "https://discord.com/invite/JnBWf9Ngy9",
        hot: true
    },
    {
        title: "Custom Night 5v5",
        date: "Ogni Martedì",
        type: "Ricorrente",
        status: "Settimanale",
        statusColor: "text-primary",
        linkLabel: "Info su Discord",
        linkUrl: "https://discord.com/invite/JnBWf9Ngy9", // Standard link for now or generic discord
        hot: false
    },
    {
        title: "Valorant Champions Watch Party",
        date: "11 Gen - 9 Feb",
        type: "Community",
        status: "In Arrivo",
        statusColor: "text-zinc-500",
        linkLabel: "Entra in Voice",
        linkUrl: "https://discord.com/invite/JnBWf9Ngy9",
        hot: false
    }
];

// Mock Data for Hall of Fame
const hallOfFame = [
    {
        tournament: "GDG Christmas Cup",
        winner: "TBD",
        date: "22 Dicembre"
    },
    {
        tournament: "Founders Faceoff",
        winner: "Staff Team", // Keeping mock usage or assuming similar outcome
        date: "Ottobre 2025"
    },
    {
        tournament: "Summer Cup 2025",
        winner: "GDG Team",
        date: "Agosto 2025"
    }
];

export default function EventiPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                {/* Background Aggressive Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black z-0"></div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>

                <div className="relative z-10 text-center container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
                        <Trophy className="w-3 h-3" />
                        Prepare for Glory
                    </div>
                    <h1 className="valorant-glitch text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                        Competizione <span className="text-primary glitch-text-color block md:inline">GDG</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-zinc-400 font-body font-light max-w-2xl mx-auto tracking-wide">
                        Custom, Premier e Tornei Interni. Mettiti alla prova.
                    </p>
                </div>
            </section>

            {/* 2. UPCOMING EVENTS */}
            <section className="py-24 container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-left uppercase flex items-center gap-3">
                        <Calendar className="w-8 h-8 text-primary" />
                        Prossimi <span className="text-primary">Appuntamenti</span>
                    </h2>
                    <div className="hidden md:block w-32 h-[1px] bg-zinc-800"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {upcomingEvents.map((event, idx) => (
                        <div key={idx} className={`relative group p-8 border ${event.hot ? 'border-primary/50 bg-gradient-to-b from-zinc-900 to-black' : 'border-zinc-800 bg-zinc-900/30'} rounded-sm hover:border-primary transition-all duration-300 flex flex-col`}>

                            {/* Hot Badge */}
                            {event.hot && (
                                <div className="absolute -top-3 -right-3 bg-primary text-black font-heading font-bold text-xs uppercase px-3 py-1 transform rotate-3 shadow-lg shadow-primary/20">
                                    In Evidenza
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-xs font-bold uppercase tracking-wider ${event.statusColor} border border-current px-2 py-0.5 rounded opacity-80`}>
                                    {event.status}
                                </span>
                                <Zap className={`w-5 h-5 ${event.hot ? 'text-primary' : 'text-zinc-600 group-hover:text-primary transition-colors'}`} />
                            </div>

                            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                                {event.title}
                            </h3>
                            <p className="text-zinc-400 font-body mb-8 text-sm flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                            </p>

                            <div className="mt-auto">
                                <Link href={event.linkUrl || "#"} target="_blank">
                                    <button className={`w-full py-3 font-heading font-bold uppercase tracking-widest text-sm transition-all border ${event.hot ? 'bg-primary text-black border-primary hover:bg-primary/90' : 'bg-transparent text-white border-zinc-700 hover:border-primary hover:text-primary'}`}>
                                        {event.linkLabel}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. HALL OF FAME */}
            <section className="py-20 bg-zinc-900/20 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-widest text-white mb-4">
                            Hall of <span className="text-primary">Fame</span>
                        </h2>
                        <p className="text-zinc-500 font-body">I campioni che hanno scritto la storia della GDG.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {hallOfFame.map((entry, idx) => (
                            <div key={idx} className="group flex flex-col md:flex-row items-center justify-between p-6 bg-black border border-zinc-800 hover:border-primary/40 transition-all rounded-sm gap-4 md:gap-0">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                                        <Crown className="w-6 h-6" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h4 className="text-xl font-heading font-bold text-white uppercase tracking-wide">{entry.tournament}</h4>
                                        <p className="text-zinc-500 text-xs font-bold uppercase">{entry.date}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-right">
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Vincitori</p>
                                        <p className="text-lg font-heading font-bold text-primary">{entry.winner}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
