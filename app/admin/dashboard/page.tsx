import AppointmentTable from "@/app/components/AppointmentTable";
import { theme } from "@/app/theme";
import { Icon } from "@iconify/react";
import React from "react";

const page = () => {
    const features = [
        {
            icon: "material-symbols:cardiology-outline",
            title: "Total Patients",
            description: "1,284",
            stats: "+12%",
        },
        {
            icon: "lucide:brain",
            title: "Today's Patients",
            description: "21",
            stats: "Daily",
        },
        {
            icon: "lucide-lab:bottle-baby",
            title: "Pending Appointments",
            description: "2",
            stats: "Weekly",
        },
        {
            icon: "hugeicons:doctor-01",
            title: "Completed Appointments",
            description: "24",
            stats: "Weekly",
        },
    ];

  

    const nurses = [
        {
            name: "Nurse Anita",
            active: true,
        },
        {
            name: "Nurse Grace",
            active: true,
        },
        {
            name: "Nurse James",
            active: false,
        },
    ];

    const notifications = [
        "3 Lab tests pending",
        "Patient Jane needs medication by 6:00PM",
        "2 New emergency admissions",
    ];

    const staffUpdates = [
        "2 Nurses resumed morning shift",
        "Staff meeting by 4:00PM",
        "Roster updated successfully",
    ];

    return (
        <div className="w-full min-h-screen ">
            <header className="sticky top-0 z-50  border-b border-gray-200">
                <nav className="flex items-center justify-between px-6 py-4">
                    <h2
                        className="font-bold text-2xl"
                        style={{ color: theme.colors.primary }}
                    >
                        Overview
                    </h2>
                    <div className="flex items-center gap-4">
                        <Icon
                            icon="mingcute:notification-line"
                            width="22"
                            height="22"
                            className="text-gray-600"
                        />

                        <img
                            src="https://i.pravatar.cc/100"
                            className="w-11 h-11 rounded-full border-2 border-white shadow"
                            alt="avatar"
                        />

                        <button className="text-gray-700 font-bold">
                            Dr. O.Aderibigbe
                        </button>
                    </div>
                </nav>
            </header>

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                        >
                            <div className="flex items-start justify-between mb-5">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: `${theme.colors.primary}15`,
                                    }}
                                >
                                    <Icon
                                        icon={item.icon}
                                        width="24"
                                        height="24"
                                        color={theme.colors.primary}
                                    />
                                </div>

                                <span className="text-sm font-semibold text-green-600">
                                    {item.stats}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 mb-1">
                                {item.title}
                            </p>

                            <h3 className="text-3xl font-bold text-gray-900">
                                {item.description}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <AppointmentTable />

                    <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold">
                                Nurses On Duty
                            </h3>
                        </div>

                        <div className="space-y-4 flex-1">
                            {nurses.map((nurse, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={`https://i.pravatar.cc/150?img=${
                                                index + 10
                                            }`}
                                            className="w-12 h-12 rounded-full"
                                            alt=""
                                        />

                                        <div>
                                            <p className="font-semibold">
                                                {nurse.name}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                ICU Ward
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className={`w-3 h-3 rounded-full ${
                                            nurse.active
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>

                        <button className="mt-auto w-full border border-gray-300 hover:border-gray-400 transition py-3 rounded-xl font-medium text-sm">
                            Manage Roster
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="rounded-2xl p-6 bg-white/8 backdrop-blur-sm border border-gray-200">
                        {" "}
                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                            <button className="md:w-[280px] backdrop-blur-3xl bg-white/30 border border-white/20 rounded-2xl p-3 text-left">
                                <h3
                                    className="text-2xl"
                                    style={{
                                        color: theme.colors.primary,
                                    }}
                                >
                                    NOTIFICATIONS
                                </h3>
                            </button>

                            <div className="flex-1 space-y-5">
                                {notifications.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full mt-2"
                                            style={{
                                                background:
                                                    theme.colors.primary,
                                            }}
                                        />

                                        <p className="text-gray-600 leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="rounded-2xl p-6 text-white"
                        style={{
                            background: theme.colors.primary,
                        }}
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                            <div className="md:w-[150px] md:h-[150px]  flex items-center justify-center rounded-full p-5 bg-white/10">
                                <Icon
                                    icon="carbon:id-management"
                                    width="38"
                                    height="38"
                                    color="#fff"
                                />
                            </div>

                            <div className="flex-1 space-y-5">
                                <h3 className="text-2xl font-bold">
                                    Staff Management
                                </h3>
                                {staffUpdates.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-white mt-2" />

                                        <p className="leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
