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
        <div className="flex w-full min-h-screen">
            <div
                className="relative hidden md:flex flex-col w-[40%] overflow-hidden px-10 lg:px-16 py-10"
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
                    <div className="flex flex-col gap-4 text-left mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white transition-all duration-500">
                            {slides[index]}
                        </h2>

                        <p className="text-white/70 text-sm md:text-base">
                            Experience modern healthcare designed around speed,
                            accuracy, and compassion.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 w-full max-w-sm">
                        <img
                            src="https://i.pravatar.cc/100"
                            className="w-12 h-12 rounded-full"
                            alt="avatar"
                        />

                        <div className="text-left">
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

            <div className="w-full md:w-[60%] min-h-screen flex items-center justify-center relative">
                {children}
            </div>
        </div>
    );
};
