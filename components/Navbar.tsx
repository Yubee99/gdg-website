"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Accademia", href: "/accademia" },
    { name: "Community", href: "/community" },
    { name: "Eventi", href: "/eventi" },
    { name: "Blog", href: "/blog" },
    { name: "Partner", href: "/partner" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
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
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-heading text-lg uppercase tracking-wide text-gray-300 hover:text-primary transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
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
                <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in shadow-2xl h-[calc(100vh-5rem)]">
                    <div className="flex flex-col gap-6 items-center justify-center h-full">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="font-heading text-3xl uppercase tracking-widest text-white hover:text-primary transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
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
