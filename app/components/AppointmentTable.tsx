import React from 'react'
import { theme } from '../theme'

const AppointmentTable = () => {

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
    
         const schedules = [
             {
                 patient: "Jane Cooper",
                 doctor: "Dr. Sarah",
                 time: "09:00 AM",
                 status: "Confirmed",
             },
             {
                 patient: "Michael Lee",
                 doctor: "Dr. David",
                 time: "10:30 AM",
                 status: "In Progress",
             },
             {
                 patient: "Sophia White",
                 doctor: "Dr. Emma",
                 time: "12:00 PM",
                 status: "Waiting",
             },
             {
                 patient: "John Doe",
                 doctor: "Dr. Smith",
                 time: "02:00 PM",
                 status: "Delayed",
             },
             {
                 patient: "Chris Evans",
                 doctor: "Dr. Jane",
                 time: "03:30 PM",
                 status: "Cancelled",
             },
         ];

  return (
                    <div className="xl:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">
                                Today's Schedule
                            </h3>

                            <a
                                className="text-sm font-semibold"
                                style={{ color: theme.colors.primary }}
                                href="/admin/appointments"
                            >
                                View All
                            </a>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-separate border-spacing-y-2">
                                <thead>
                                    <tr>
                                        <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-4 py-3 rounded-l">
                                            Patient
                                        </th>

                                        <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-4 py-3">
                                            Doctor
                                        </th>

                                        <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-4 py-3">
                                            Time
                                        </th>

                                        <th className="bg-[#eef5eb] text-left text-sm text-gray-500 font-medium px-4 py-3 rounded-r-l">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {schedules.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white shadow-sm"
                                        >
                                            <td className="px-4 py-4 font-medium rounded-l-xl">
                                                {item.patient}
                                            </td>

                                            <td className="px-4 py-4 text-gray-600">
                                                {item.doctor}
                                            </td>

                                            <td className="px-4 py-4 text-gray-600">
                                                {item.time}
                                            </td>

                                            <td className="px-4 py-4 rounded-r-xl">
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
                    </div>

                   
                )
}

export default AppointmentTable