"use client";

import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import TopNav from "./components/layout/TopNav";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isLoginPage = pathname.startsWith("/login");
    const isAdminPage = pathname.startsWith("/admin");

    return (
        <html lang="en">
            <body className="min-h-screen bg-[#f4fbf1] text-[#171717]">
                <div className="flex flex-col min-h-screen">
                    {!isLoginPage && !isAdminPage && <Navbar />}

                    {/* {isAdminPage && <TopNav />} */}

                    <main className="flex-1">{children}</main>
                </div>
            </body>
        </html>
    );
}
