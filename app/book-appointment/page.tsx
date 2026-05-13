"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { theme } from "../theme";

const Page = () => {
    const router = useRouter();

    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        reason: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // simulate success
        setIsSuccess(true);
    };

    return (
        <div className="min-h-screen bg-[#F5F6FA] flex items-center justify-center px-4 py-10">
            {!isSuccess && (
                <div className="bg-white w-full max-w-[700px] min-h-[85vh] rounded-2xl p-4 md:p-10 flex flex-col justify-center">
                    <div className="mb-6 text-center ">
                        <h2 className="text-3xl font-bold text-[#1E1E1E] ">
                            Book Appointment
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            Fill in your details to schedule a consultation with
                            our specialists.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                name="name"
                                placeholder="Full Name"
                                onChange={handleChange}
                                className="border border-gray-200 focus:border-[#2c8966] outline-none px-4 py-3 rounded-lg transition"
                                required
                            />

                            <input
                                name="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                                className="border border-gray-200 focus:border-[#2c8966] outline-none px-4 py-3 rounded-lg transition"
                                required
                            />
                        </div>

                        {}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                name="date"
                                type="date"
                                onChange={handleChange}
                                className="border border-gray-200 focus:border-[#2c8966] outline-none px-4 py-3 rounded-lg transition"
                                required
                            />

                            <input
                                name="time"
                                type="time"
                                onChange={handleChange}
                                className="border border-gray-200 focus:border-[#2c8966] outline-none px-4 py-3 rounded-lg transition"
                                required
                            />
                        </div>

                        <textarea
                            name="reason"
                            placeholder="Briefly describe your condition or reason for appointment"
                            onChange={handleChange}
                            rows={5}
                            className="border border-gray-200 focus:border-[#2c8966] outline-none px-4 py-3 rounded-lg transition resize-none"
                        />

                        <button
                            type="submit"
                            className="text-white py-3 rounded-lg mt-2 font-medium transition hover:opacity-90"
                            style={{ backgroundColor: theme.colors.primary }}
                        >
                            Book Appointment
                        </button>
                    </form>
                </div>
            )}

            {isSuccess && (
                <div className="w-full max-w-[700px] space-y-6">
                    <div className="bg-white rounded-2xl p-6 text-center shadow">
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                style={{
                                    background: `linear-gradient(135deg, ${theme.colors.primary}20 0%, ${theme.colors.primary}08 100%)`,
                                }}
                            >
                                <span style={{ color: theme.colors.primary }}>
                                    ✔
                                </span>
                            </div>

                            <h2
                                className="text-xl font-bold"
                                style={{ color: theme.colors.primary }}
                            >
                                Appointment booked successfully
                            </h2>

                            <p className="text-gray-500 text-sm">
                                Your request is being processed. A confirmation
                                email has been sent to your registered address.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl  text-center">
                            <p className="text-sm text-gray-500">
                                Appointment ID
                            </p>
                            <p className="font-bold">APT-10293</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl  text-center">
                            <p className="text-sm text-gray-500">Date</p>
                            <p className="font-bold">{formData.date}</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl  text-center">
                            <p className="text-sm text-gray-500">Time</p>
                            <p className="font-bold">{formData.time}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button
                            onClick={() => router.push("/")}
                            className="bg-[#2c8966] text-white px-6 py-2 rounded-lg"
                        >
                            Back to Home
                        </button>

                        <button
                            onClick={() => window.print()}
                            className="border border-gray-300 px-6 py-2 rounded-lg"
                        >
                            Save Appointment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
