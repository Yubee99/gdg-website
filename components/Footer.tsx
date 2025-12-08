import Link from "next/link";
import { Instagram, Twitch, Zap, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="md:col-span-2">
                    <Link href="/" className="inline-block mb-4">
                        <img src="/gdg-logo.png" alt="GDG Logo" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-zinc-500 font-body text-sm max-w-sm mb-6">
                        La community italiana di riferimento per Valorant. Tornei, team competitivi e accademia per crescere insieme.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://www.instagram.com/governo_dei_gamers/#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-zinc-400 hover:bg-primary hover:text-black transition-all">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="https://m.facebook.com/893389657188788?ref=pl_edit_xav_ig_profile_page_profile_hl_unlink_test&wtsid=rdr_0SP1F8TVJMSTsSMBR" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-zinc-400 hover:bg-[#1877F2] hover:text-white transition-all">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="https://twitch.tv" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-zinc-400 hover:bg-[#9146FF] hover:text-white transition-all">
                            <Twitch className="w-5 h-5" />
                        </Link>
                        <Link href="https://tiktok.com" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-zinc-400 hover:bg-[#00f2ea] hover:text-black transition-all">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                        </Link>
                        <Link href="https://www.threads.com/@governo_dei_gamers?xmt=AQF0s3KQTAESUhE5nWLReADgDLwQCffqFzLGW7Bcx5gKYVI" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-zinc-400 hover:bg-white hover:text-black transition-all">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.75 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9h-1.5c0 4.14-3.36 7.5-7.5 7.5S4.25 16.14 4.25 12 7.61 4.5 11.75 4.5c2.9 0 5.43 1.63 6.63 4H20c-1.44-3.38-4.78-5.5-8.25-5.5zm0 3.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5c1.86 0 3.52-.92 4.53-2.34l-1.18-1c-.7.98-1.9 1.84-3.35 1.84-2.21 0-4-1.79-4-4s1.79-4 4-4c1.65 0 3.12 1.05 3.71 2.5H9.5V12h8.92c.05-.5.08-1 .08-1.5 0-3.03-2.47-5.5-5.5-5.5z" /></svg>
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-heading font-bold uppercase tracking-wide mb-4">Esplora</h3>
                    <ul className="space-y-2 text-sm text-zinc-500 font-body">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/eventi" className="hover:text-primary transition-colors">Eventi & Tornei</Link></li>
                        <li><Link href="/community" className="hover:text-primary transition-colors">Community</Link></li>
                    </ul>
                </div>

                {/* Legal / Extra */}
                <div>
                    <h3 className="text-white font-heading font-bold uppercase tracking-wide mb-4">Risorse</h3>
                    <ul className="space-y-2 text-sm text-zinc-500 font-body">
                        <li><Link href="https://discord.com/invite/JnBWf9Ngy9" className="hover:text-primary transition-colors">Candidati</Link></li>
                        <li><Link href="https://discord.com/invite/JnBWf9Ngy9" className="hover:text-primary transition-colors">Staff Support</Link></li>
                        <li><Link href="/partner" className="hover:text-primary transition-colors">Partner</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 flex flex-col items-center text-center gap-6">
                {/* Disclaimer */}
                <p className="text-[10px] text-zinc-700 max-w-2xl font-body leading-relaxed">
                    GDG Community non è affiliata, supportata o sponsorizzata da Riot Games Inc. o Valorant.
                    Tutti i contenuti, nomi dei personaggi, e asset visivi relativi a Valorant sono proprietà intelektuale di Riot Games.
                </p>

                <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-body uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} GDG Community. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <span className="flex items-center gap-2 text-primary font-bold">
                            <Zap className="w-3 h-3" /> Powered by GDG
                        </span>
                        <span className="hidden md:inline text-zinc-800">|</span>
                        <span>Designed for Gamers</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
