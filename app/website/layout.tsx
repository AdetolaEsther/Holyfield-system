import Navbar from "@/app/components/layout/Navbar";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#f4fbf1] text-[#171717]">
            <Navbar />

            <main>{children}</main>
        </div>
    );
}
