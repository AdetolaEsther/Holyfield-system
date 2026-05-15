import SideNav from "@/components/layout/SideNav";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <SideNav />
            <main className="flex-1">{children}</main>
        </div>
    );
}
