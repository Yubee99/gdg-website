import Link from "next/link";
import { Mail, MessageSquare, Instagram, Twitch, Send } from "lucide-react";
import ContactForm from "../../components/ContactForm";

export default function ContattiPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            <section className="py-20 container mx-auto px-4">
                <h1 className="valorant-glitch text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-16 text-center md:text-left">
                    Parla con <span className="text-primary glitch-text-color">Noi</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* Left Column: Quick Info */}
                    <div>
                        <div className="bg-[#5865F2] p-8 rounded-sm mb-12 shadow-lg shadow-[#5865F2]/20 hover:scale-[1.02] transition-transform">
                            <div className="flex items-center gap-4 mb-4">
                                <MessageSquare className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-heading font-bold uppercase text-white">Discord</h3>
                            </div>
                            <p className="text-white/80 font-body mb-6">
                                Il modo più veloce per ricevere supporto. Apri un ticket nel nostro server.
                            </p>
                            <Link href="https://discord.com/invite/JnBWf9Ngy9" className="inline-block bg-white text-[#5865F2] px-6 py-2 font-heading font-bold uppercase text-sm rounded hover:bg-gray-100 transition-colors">
                                Entra nel Server
                            </Link>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold uppercase text-white mb-1">Email</h4>
                                    <a href="mailto:info@gdc-community.it" className="text-zinc-400 font-body hover:text-primary transition-colors">info@gdc-community.it</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold uppercase text-white mb-1">Social</h4>
                                    <div className="flex flex-col gap-2 text-zinc-400 text-sm">
                                        <Link href="https://www.instagram.com/governo_dei_gamers/#" className="hover:text-primary transition-colors flex items-center gap-2">Instagram</Link>
                                        <Link href="https://m.facebook.com/893389657188788?ref=pl_edit_xav_ig_profile_page_profile_hl_unlink_test&wtsid=rdr_0SP1F8TVJMSTsSMBR" className="hover:text-primary transition-colors flex items-center gap-2">Facebook</Link>
                                        <Link href="https://twitch.tv" className="hover:text-primary transition-colors flex items-center gap-2">Twitch</Link>
                                        <Link href="https://tiktok.com" className="hover:text-primary transition-colors flex items-center gap-2">TikTok</Link>
                                        <Link href="https://www.threads.com/@governo_dei_gamers?xmt=AQF0s3KQTAESUhE5nWLReADgDLwQCffqFzLGW7Bcx5gKYVI" className="hover:text-primary transition-colors flex items-center gap-2">Threads</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Form */}
                    <ContactForm />

                </div>
            </section>
        </div>
    );
}
