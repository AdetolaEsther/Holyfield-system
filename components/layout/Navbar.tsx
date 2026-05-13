"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { theme } from "@/app/theme";
import Link from "next/link";

const Navbar = () => {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="w-full sticky top-0 z-50 bg-[#f4fbf1] shadow-sm">
            <nav className="flex justify-between items-center px-2 py-2 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Icon
                        icon="streamline-plump:hospital-sign-square-remix"
                        color={theme.colors.primary}
                        width="24"
                        height="24"
                    />

                    <h2
                        className="font-bold text-lg"
                        style={{ color: theme.colors.primary }}
                    >
                        Holyfield Medical Clinic
                    </h2>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="/"
                        className="font-semibold border-b-2 pb-1"
                        style={{ color: theme.colors.primary }}
                    >
                        Home
                    </a>

                    <button
                        onClick={() => scrollToSection("services")}
                        className="text-gray-600 hover:text-green-600 transition"
                    >
                        Services
                    </button>

                    <button
                        onClick={() => scrollToSection("footer")}
                        className="text-gray-600 hover:text-green-600 transition"
                    >
                        Find a Doctor
                    </button>

                    <button
                        onClick={() => scrollToSection("about")}
                        className="text-gray-600 hover:text-green-600 transition"
                    >
                        About
                    </button>
                </div>

                {/* CTA */}
                <div>
                    <Link href="/book-appointment">
                        <button
                            style={{ backgroundColor: theme.colors.secondary }}
                            className="text-white text-sm px-6 py-2 rounded-lg"
                        >
                            Book Appointment
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
