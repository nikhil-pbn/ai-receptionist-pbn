"use client";

import { navLinks } from "@/constants/header";
import { MenuIcon, XIcon } from "@/icon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DemoButton } from "@/components/common";


export const Header = () => {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        onScroll();

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    return (
        <header
            className={` fixed inset-x-0 top-0 h-16 z-50 transition-all duration-300
                ${isScrolled
                    ? "bg-[#161515]/50 shadow-lg backdrop-blur-xl"
                    : "bg-transparent backdrop-blur-sm"
                }
      `}
        >            <div className="mx-auto h-full flex max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/assets/home/HeaderLogo.png"
                    className="w-24 lg:w-40"
                        width={150}
                        height={44}
                        alt="Logo" />

                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:gap-12 md:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleNavClick}
                            className={`text-base font-medium transition-colors ${pathname === item.href
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-4 md:flex">
                    <DemoButton />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden cursor-pointer border border-border rounded-md p-1.5 transition hover:bg-white/5"
                >
                    {isOpen ? <XIcon size={20} stroke="white" fill="white" /> : <MenuIcon size={20} stroke="white" fill="white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border absolute right-3 top-16 w-fit border-border bg-background rounded-2xl lg:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="py-2 text-lg font-medium text-muted-foreground hover:text-foreground"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="mt-6 flex flex-col gap-4">
                            <DemoButton />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};