import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({children}: {children: React.ReactNode;}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-[#f4fbf1] text-[#171717]">
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                </div>
            </body>
        </html>
    );
}