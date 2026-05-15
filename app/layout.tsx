"use client";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const hideNavbar = pathname.startsWith("/login");

    return (
        <html lang="en">
            <body className="min-h-screen bg-[#f4fbf1] text-[#171717]">
                <div className="flex flex-col min-h-screen">
                    {!hideNavbar && <Navbar />}
                    <main className="flex-1">{children}</main>
                </div>
            </body>
        </html>
    );
}
