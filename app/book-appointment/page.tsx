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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F5F6FA]">
            <div className="flex-1 flex items-center justify-center px-4 py-10">
                {!isSuccess && (
                    <div className="bg-white w-full max-w-[700px] min-h-[85vh] rounded-2xl p-4 md:p-10 flex flex-col justify-center shadow-lg">
                        <div className="mb-6 text-center">
                            <h2 className="text-3xl font-bold text-[#1E1E1E]">
                                Book Appointment
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                Fill in your details to schedule a consultation
                                with our specialists.
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
                                className="text-white py-3 rounded-lg mt-2 font-medium hover:opacity-90 transition"
                                style={{
                                    backgroundColor: theme.colors.primary,
                                }}
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
                                    <span
                                        style={{ color: theme.colors.primary }}
                                    >
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
                                    A confirmation email has been sent to your
                                    registered address.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                                <p className="text-sm text-gray-500">
                                    Appointment ID
                                </p>
                                <p className="font-bold">APT-10293</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                                <p className="text-sm text-gray-500">Date</p>
                                <p className="font-bold">{formData.date}</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl text-center shadow-sm">
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

            <footer className="bg-[#BCCABC] text-[#5B5B5B] w-full py-16 mt-auto">
                <div className="max-w-[1000px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
                        <div className="max-w-[300px]">
                            <h2
                                className="font-bold text-lg"
                                style={{ color: theme.colors.primary }}
                            >
                                Holyfield Medical Clinic
                            </h2>

                            <div className="flex justify-center text-gray-500 text-sm">
                                © {new Date().getFullYear()} Holyfield Medical
                                Clinic
                            </div>
                        </div>

                        <div className="text-[14px] max-w-[300px]">
                            <div className="flex flex-col space-y-3">
                                <p className="font-semibold mb-1">
                                    Privacy Policy
                                </p>
                            </div>
                        </div>
                        <div className="text-[14px] max-w-[300px]">
                            <div className="flex flex-col space-y-3">
                                <p className="font-semibold mb-1">
                                    Terms of Service
                                </p>
                            </div>
                        </div>
                        <div className="text-[14px] max-w-[300px]">
                            <div className="flex flex-col space-y-3">
                                <p className="font-semibold mb-1">
                                    Emergency Info
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Page;
