import { ReactNode } from "react";

export const AuthWrapper2 = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex w-full bg-black text-white">
            <div className="relative flex items-center justify-center w-full sm:w-7/12 md:w-1/2 h-dvh overflow-hidden p-2">
                <div className="absolute top-0 left-0 p-8">
                    <img src="/logo/scale-logo.png" width={100} alt="logo" />
                </div>

                {children}
            </div>

            <div
                className="hidden sm:block sm:w-5/12 md:w-1/2 h-dvh bg-cover bg-center"
                style={{ backgroundImage: "url('/authBg.svg')" }}
            />
        </div>
    );
};
