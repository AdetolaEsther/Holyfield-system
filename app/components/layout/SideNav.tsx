"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { theme } from "@/app/theme";

const navItems = [
    {
        label: "Overview",
        href: "/admin/dashboard",
        icon: "material-symbols:dashboard-rounded",
    },
    {
        label: "Appointments",
        href: "/admin/appointments",
        icon: "mdi:calendar-clock",
    },
    {
        label: "Patient Records",
        href: "/admin/patients",
        icon: "mdi:account-group",
    },
    {
        label: "Add Patient",
        href: "/admin/patients/add",
        icon: "mdi:account-plus",
    },

    {
        label: "Doctors",
        href: "/admin/doctors",
        icon: "mdi:doctor",
    },
    {
        label: "Call Logs",
        href: "/admin/call-logs",
        icon: "mdi:phone-in-talk",
    },

    {
        label: "Settings",
        href: "/admin/settings",
        icon: "mdi:cog",
    },
];

const SideNav = () => {
    const pathname = usePathname();

    return (
        <aside className="h-screen w-[260px] border-r border-gray-200 flex flex-col justify-between p-5 sticky top-0">
            <div>
                {/* Logo */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                        <Icon
                            icon="streamline-plump:hospital-sign-square-remix"
                            width="22"
                            height="22"
                            color="#fff"
                        />
                    </div>

                    <div>
                        <h2 className="font-bold text-lg text-green-700">
                            Holyfield Admin
                        </h2>

                        <p className="text-xs text-gray-500">Head Doctor</p>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                    isActive
                                        ? "bg-green-600 text-white"
                                        : "text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                <Icon icon={item.icon} width="22" height="22" />

                                <span className="text-sm font-medium">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <button
                style={{
                    backgroundColor: theme.colors.secondary,
                }}
                className="flex items-center gap-2 text-white text-sm px-6 py-2 rounded-lg"
            >
                <Icon
                    icon="material-symbols:emergency"
                    width="22"
                    height="22"
                />
                New Emergency
            </button>
            <div className="border-t border-gray-200 ">
                <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full  py-3 rounded-xl transition">
                    <Icon
                        icon="material-symbols:logout-rounded"
                        width="22"
                        height="22"
                    />

                    <span className="text-sm font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default SideNav;
