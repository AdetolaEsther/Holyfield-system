"use client";

import { ReactNode, useEffect, useState } from "react";
import { theme } from "@/app/theme";
import { Icon } from "@iconify/react";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
    const slides = [
        "Advanced care, simplified",
        "Empowering healthcare access",
        "Trusted medical excellence",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
            <div
                className="flex md:hidden w-full px-4 py-3"
                style={{ backgroundColor: theme.colors.primary }}
            >
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <Icon
                            icon="streamline-plump:hospital-sign-square-remix"
                            width="26"
                            height="26"
                            color="#fff"
                        />
                        <h2 className="font-bold text-base text-white">
                            Holyfield Medical Clinic
                        </h2>
                    </div>

                    <h2 className="text-lg font-bold text-white leading-snug">
                        Access your administrative tools for clinical records
                        and operational excellence.
                    </h2>

                    <p className="text-sm text-white/80 leading-5">
                        Securely manage appointments, patient records, and
                        healthcare operations.
                    </p>
                </div>
            </div>

            <div
                className="hidden md:flex relative flex-col w-[40%] px-10 lg:px-16 py-10"
                style={{ backgroundColor: theme.colors.primary }}
            >
                <div className="flex items-center gap-3 mb-10">
                    <Icon
                        icon="streamline-plump:hospital-sign-square-remix"
                        width="36"
                        height="36"
                        color="#fff"
                    />
                    <h2 className="font-bold text-lg text-white">
                        Holyfield Medical Clinic
                    </h2>
                </div>

                <div className="flex flex-col justify-center flex-1 max-w-md">
                    <div className="flex flex-col gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            {slides[index]}
                        </h2>

                        <p className="text-white/70 text-sm md:text-base">
                            Experience modern healthcare designed around speed,
                            accuracy, and compassion.
                        </p>
                    </div>

                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center gap-4 w-full max-w-sm">
                        <img
                            src="https://i.pravatar.cc/100"
                            className="w-12 h-12 rounded-full"
                            alt="avatar"
                        />

                        <div>
                            <p className="text-sm font-medium text-white">
                                “Best healthcare experience I’ve had.”
                            </p>
                            <p className="text-xs text-white/70">
                                — Patient Review
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[60%] flex flex-1 items-start md:items-center justify-center relative ">
                {children}
            </div>
        </div>
    );
};
