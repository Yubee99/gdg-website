"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    { name: "Accademia", href: "/accademia" },
    { name: "Community", href: "/community" },
    { name: "Eventi", href: "/eventi" },
    { name: "Blog", href: "/blog" },
    { name: "Partner", href: "/partner" },
    {
        name: "Join Us",
        href: "#",
        subLinks: [
            { name: "Diventa Player", href: "/candidatura" },
            { name: "Diventa Creator", href: "/candidatura-creator" }
        ]
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setMobileSubMenuOpen(null);
    };

    const toggleMobileSubMenu = (name: string) => {
        if (mobileSubMenuOpen === name) {
            setMobileSubMenuOpen(null);
        } else {
            setMobileSubMenuOpen(name);
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                    <Image
                        src="/gdg-logo.png"
                        alt="GDG Logo"
                        width={120}
                        height={60}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.subLinks ? (
                                <>
                                    <button
                                        className="font-heading text-lg uppercase tracking-wide text-gray-300 hover:text-primary transition-colors duration-200 flex items-center gap-1 focus:outline-none"
                                    >
                                        {link.name}
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block min-w-[200px]">
                                        <div className="bg-zinc-900 border border-zinc-800 rounded-sm shadow-xl p-2 flex flex-col gap-1">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="block px-4 py-2 text-sm font-heading font-bold uppercase text-gray-400 hover:bg-zinc-800 hover:text-primary transition-colors whitespace-nowrap"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="font-heading text-lg uppercase tracking-wide text-gray-300 hover:text-primary transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contatti"
                        className="px-6 py-2 bg-primary text-black font-heading font-bold uppercase tracking-wide rounded-sm hover:bg-yellow-500 transition-colors"
                    >
                        Contattaci
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-white">
                    <button onClick={toggleMenu} className="focus:outline-none p-2" aria-label="Toggle menu">
                        {isOpen ? <X className="h-8 w-8 text-primary" /> : <Menu className="h-8 w-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in shadow-2xl h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="flex flex-col gap-6 items-center justify-start py-8 min-h-full">
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col items-center gap-2 w-full">
                                {link.subLinks ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileSubMenu(link.name)}
                                            className="font-heading text-3xl uppercase tracking-widest text-white hover:text-primary transition-colors duration-200 flex items-center gap-2"
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-6 h-6 transition-transform ${mobileSubMenuOpen === link.name ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Mobile Submenu */}
                                        <div className={`flex flex-col gap-4 items-center w-full overflow-hidden transition-all duration-300 ${mobileSubMenuOpen === link.name ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    onClick={closeMenu}
                                                    className="font-heading text-xl uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="font-heading text-3xl uppercase tracking-widest text-white hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contatti"
                            onClick={closeMenu}
                            className="mt-8 px-10 py-4 bg-primary text-black font-heading font-bold text-xl uppercase tracking-wide rounded-sm hover:bg-yellow-500 transition-colors"
                        >
                            Contattaci
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
