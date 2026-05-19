"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { theme } from "@/app/theme";
import Link from "next/link";

const TopNav = () => {


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

                    
                   

                  
                </div>

               
            </nav>
        </header>
    );
};

export default TopNav;
