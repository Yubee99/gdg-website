import Link from "next/link";
import { User, Twitch, Crown, Star, Zap, Shield } from "lucide-react";
import { StreamerInfo } from "@/lib/twitch";

interface StreamerGridProps {
    streamers: StreamerInfo[];
    defaultVariant?: 'founder' | 'partner' | 'creator' | 'co-founder';
    onGetVariant?: (streamer: StreamerInfo) => 'founder' | 'partner' | 'creator' | 'co-founder' | undefined;
}

export function StreamerGrid({ streamers, defaultVariant = 'creator', onGetVariant }: StreamerGridProps) {
    if (streamers.length === 0) return null;

    const getBadge = (variant: string) => {
        if (variant === 'founder') {
            return (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/50 px-2 py-1 rounded text-[10px] uppercase font-bold text-yellow-500 tracking-wider shadow-[0_0_10px_rgba(234,179,8,0.2)]">
                    <Crown className="w-3 h-3" />
                    <span>Founder</span>
                </div>
            );
        }
        if (variant === 'co-founder') {
            return (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-zinc-400/20 border border-zinc-400/50 px-2 py-1 rounded text-[10px] uppercase font-bold text-zinc-300 tracking-wider shadow-[0_0_10px_rgba(161,161,170,0.2)]">
                    <Star className="w-3 h-3" />
                    <span>Co-Founder</span>
                </div>
            );
        }
        if (variant === 'partner') {
            return (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-primary/20 border border-primary/50 px-2 py-1 rounded text-[10px] uppercase font-bold text-primary tracking-wider shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                    <Star className="w-3 h-3" />
                    <span>Partner</span>
                </div>
            );
        }
        return null;
    };

    const getBorderClass = (isLive: boolean, variant: string) => {
        if (isLive) return "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]";
        if (variant === 'founder') return "border-yellow-500/30 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]";
        if (variant === 'co-founder') return "border-zinc-500/30 hover:border-zinc-400 hover:shadow-[0_0_15px_rgba(161,161,170,0.15)]";
        if (variant === 'partner') return "border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]";
        return "border-zinc-800 hover:border-zinc-600";
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {streamers.map((streamer, idx) => {
                const activeVariant = onGetVariant?.(streamer) ?? defaultVariant;

                return (
                    <div
                        key={idx}
                        className={`group relative bg-zinc-900/40 border p-6 rounded-sm transition-all duration-300 flex items-center gap-6 overflow-hidden ${getBorderClass(streamer.live, activeVariant)}`}
                    >
                        {/* Badge */}
                        {getBadge(activeVariant)}

                        {/* Profile Pic Placeholder - Real Image if available */}
                        <div className={`w-20 h-20 bg-zinc-800 rounded-full shrink-0 flex items-center justify-center border transition-colors overflow-hidden ${streamer.live ? 'border-red-500' : 'border-white/10 group-hover:border-white/30'}`}>
                            {streamer.profileImageUrl ? (
                                <img src={streamer.profileImageUrl} alt={streamer.name} className="w-full h-full object-cover" />
                            ) : (
                                <User className={`w-8 h-8 ${streamer.live ? 'text-red-500' : 'text-zinc-500'}`} />
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex flex-col flex-grow min-w-0">
                            <div className="flex items-center gap-2 mb-1 mt-2">
                                {/* Name */}
                                <h3 className={`text-xl font-heading font-bold tracking-wide truncate transition-colors max-w-[140px] ${streamer.live ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                                    {streamer.name}
                                </h3>

                                {/* LIVE Badge Next to Name */}
                                {streamer.live && (
                                    <span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-600 border border-red-500 rounded text-[9px] font-bold text-white uppercase tracking-wider shadow-[0_0_10px_rgba(220,38,38,0.5)] animate-pulse shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                                        Live
                                    </span>
                                )}
                            </div>

                            {/* Game Name or Offline Status */}
                            <div className="mb-3">
                                {streamer.live ? (
                                    <span className="text-zinc-500 text-xs truncate block">{streamer.gameName}</span>
                                ) : (
                                    <p className="text-zinc-600 text-xs font-body truncate">Offline</p>
                                )}
                            </div>

                            <Link
                                href={`https://twitch.tv/${streamer.login}`}
                                target="_blank"
                                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${streamer.live ? 'animate-pulse' : ''} ${activeVariant === 'founder' ? 'text-yellow-500 hover:text-yellow-400' : 'text-primary hover:text-white'}`}
                            >
                                <Twitch className="w-3 h-3" />
                                Guarda ora
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
