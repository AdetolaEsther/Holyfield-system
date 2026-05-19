"use client";
import SearchFilterBar from "@/app/components/SearchAndFilter";
import { theme } from "@/app/theme";
import { Icon } from "@iconify/react";
import React from "react";

const page = () => {
     type StatusType =
         | "Confirmed"
         | "In Progress"
         | "Waiting"
         | "Delayed"
         | "Cancelled";

     const getStatusColor = (status: StatusType): string => {
         switch (status) {
             case "Confirmed":
                 return "bg-green-100 text-green-700";
             case "In Progress":
                 return "bg-blue-100 text-blue-700";
             case "Waiting":
                 return "bg-yellow-100 text-yellow-700";
             case "Delayed":
                 return "bg-orange-100 text-orange-700";
             case "Cancelled":
                 return "bg-red-100 text-red-700";
             default:
                 return "bg-gray-100 text-gray-700";
         }
     };
     const getDepartmentColor = (dept: string) => {
         switch (dept) {
             case "Cardiology":
                 return "bg-red-100 text-red-700";
             case "Neurology":
                 return "bg-purple-100 text-purple-700";
             case "Pediatrics":
                 return "bg-blue-100 text-blue-700";
             case "Orthopedics":
                 return "bg-green-100 text-green-700";
             default:
                 return "bg-gray-100 text-gray-700";
         }
     };
    const features = [
        {
            icon: "material-symbols:cardiology-outline",
            title: "TOTAL RECORDS",
            description: "1,284",
            stats: "+12%",
        },
        {
            icon: "lucide:brain",
            title: "ACTIVE CASES",
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
    const schedules = [
        {
            id: "PT-001",
            patient: "Jane Cooper",
            phone: "+234 812 345 6789",
            department: "Cardiology",
            doctor: "Dr. Sarah",
            time: "2026-05-20",
            status: "Confirmed",
            image: "https://i.pravatar.cc/100?img=1",
        },
        {
            id: "PT-002",
            patient: "Michael Lee",
            phone: "+234 803 111 2222",
            department: "Neurology",
            doctor: "Dr. David",
            time: "2026-05-20",
            status: "In Progress",
            image: "https://i.pravatar.cc/100?img=2",
        },
        {
            id: "PT-002",
            patient: "Michael Lee",
            phone: "+234 803 111 2222",
            department: "Neurology",
            doctor: "Dr. David",
            time: "2026-05-20",
            status: "In Progress",
            image: "https://i.pravatar.cc/100?img=2",
        },
        {
            id: "PT-002",
            patient: "Michael Lee",
            phone: "+234 803 111 2222",
            department: "Neurology",
            doctor: "Dr. David",
            time: "2026-05-20",
            status: "In Progress",
            image: "https://i.pravatar.cc/100?img=2",
        },
        {
            id: "PT-002",
            patient: "Michael Lee",
            phone: "+234 803 111 2222",
            department: "Neurology",
            doctor: "Dr. David",
            time: "2026-05-20",
            status: "In Progress",
            image: "https://i.pravatar.cc/100?img=2",
        },
        {
            id: "PT-002",
            patient: "Michael Lee",
            phone: "+234 803 111 2222",
            department: "Neurology",
            doctor: "Dr. David",
            time: "2026-05-20",
            status: "In Progress",
            image: "https://i.pravatar.cc/100?img=2",
        },
    ];


    return (
        <div className="w-full min-h-screen ">
            <header className="sticky top-0 z-50  border-b border-gray-200">
                <nav className="flex items-center justify-between px-6 py-4">
                    <h2
                        className="font-bold text-2xl"
                        style={{ color: theme.colors.primary }}
                    >
                        Patient Records{" "}
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
            <div className="p-6 space-y-4">
                <SearchFilterBar
                    placeholder="Search appointments..."
                    onSearch={(val) => console.log(val)}
                    onFilter={() => console.log("filter")}
                    onAdd={() => console.log("add new")}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                              
                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-500">
                                        {item.title}
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                                        {item.description}
                                    </h3>

                                    <span className="text-xs font-semibold text-green-600 mt-1">
                                        {item.stats}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6">
                <div className="mt-6 border border-gray-300 rounded-2xl bg-white overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-6 py-3">
                                        Patient
                                    </th>
                                    <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-6 py-3">
                                        Phone Number
                                    </th>
                                    <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-6 py-3">
                                        Department
                                    </th>
                                    <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-6 py-3">
                                        Appointment Date
                                    </th>
                                    <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {schedules.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-100 last:border-b-0"
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={item.image}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div>
                                                    <p className="font-semibold">
                                                        {item.patient}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {item.id}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-5 text-gray-600">
                                            {item.phone}
                                        </td>

                                        <td className="px-6 py-5">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${getDepartmentColor(
                                                    item.department,
                                                )}`}
                                            >
                                                {item.department}
                                            </span>
                                        </td>

                                        <td className="px-6 py-5 text-gray-600">
                                            {item.time}
                                        </td>

                                        <td className="px-6 py-5">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                                    item.status as StatusType,
                                                )}`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-[#eef5eb] ">
                        <p className="text-sm text-gray-500">
                            Showing{" "}
                            <span className="font-semibold text-gray-900">
                                1
                            </span>{" "}
                            -{" "}
                            <span className="font-semibold text-gray-900">
                                10
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-gray-900">
                                42
                            </span>{" "}
                            appointments
                        </p>

                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 text-sm border rounded-lg text-gray-600 hover:bg-gray-50">
                                Previous
                            </button>

                            <button
                                className="px-4 py-2 text-sm rounded-lg text-white"
                                style={{ background: theme.colors.primary }}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-white"></div>
                </div>
            </div>
        </div>
    );
};

export default page;
