"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { theme } from "@/app/theme";
import Link from "next/link";

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);
    
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="w-full sticky top-0 z-50 bg-[#f4fbf1] border-b border-gray-200">
            <nav className="flex justify-between items-center px-2 py-2 max-w-7xl mx-auto">
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

                <div className="relative">
                    <div className="hidden md:block">
                        <Link href="/book-appointment">
                            <button
                                style={{
                                    backgroundColor: theme.colors.secondary,
                                }}
                                className="text-white text-sm px-6 py-2 rounded-lg"
                            >
                                Book Appointment
                            </button>
                        </Link>
                    </div>

                    <div className="block md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2"
                        >
                            <Icon
                                icon={
                                    isOpen
                                        ? "material-symbols:close-rounded"
                                        : "material-symbols:menu-rounded"
                                }
                                width={28}
                            />
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-4 z-50 flex flex-col gap-4">
                                <a
                                    href="/"
                                    className="font-semibold"
                                    style={{ color: theme.colors.primary }}
                                >
                                    Home
                                </a>

                                <button
                                    onClick={() => {
                                        scrollToSection("services");
                                        setIsOpen(false);
                                    }}
                                    className="text-left text-gray-600"
                                >
                                    Services
                                </button>

                                <button
                                    onClick={() => {
                                        scrollToSection("footer");
                                        setIsOpen(false);
                                    }}
                                    className="text-left text-gray-600"
                                >
                                    Find a Doctor
                                </button>

                                <button
                                    onClick={() => {
                                        scrollToSection("about");
                                        setIsOpen(false);
                                    }}
                                    className="text-left text-gray-600"
                                >
                                    About
                                </button>

                                <Link href="/book-appointment">
                                    <button
                                        style={{
                                            backgroundColor:
                                                theme.colors.secondary,
                                        }}
                                        className="w-full text-white text-sm px-4 py-2 rounded-lg"
                                    >
                                        Book Appointment
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
