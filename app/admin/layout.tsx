import { ReactNode } from "react";
import SideNav from "../components/layout/SideNav";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <SideNav />
            <main className="flex-1">{children}</main>
        </div>
    );
}



