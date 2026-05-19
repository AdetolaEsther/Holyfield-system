"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { theme } from "../../theme";
import { Icon } from "@iconify/react";

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
        <div className="w-full min-h-screen overflow-x-hidden flex flex-col bg-[#F5F6FA]">
            {" "}
            <div className="flex-1 flex items-center justify-center px-4 py-10">
                {" "}
                {!isSuccess && (
                    <div className="w-full max-w-[720px] flex flex-col gap-6">
                        {/* Header Card */}
                        <div
                            className="rounded-2xl p-6 md:p-8 text-white"
                            style={{
                                backgroundColor: theme.colors.primary,
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Icon
                                        icon="solar:calendar-bold"
                                        width="28"
                                        height="28"
                                        color="#fff"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold">
                                        Schedule a Consultation{" "}
                                    </h2>

                                    <p className="text-sm md:text-base text-white/90 mt-2 leading-6">
                                        Please fill out the form below to secure
                                        your medical appointment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white w-full rounded-2xl p-5 md:p-10 shadow-lg">
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

                                <label className="flex items-start gap-3 text-sm text-gray-600 leading-6">
                                    <input
                                        type="checkbox"
                                        required
                                        className="mt-1 accent-[#2c8966]"
                                    />

                                    <span>
                                        I consent to the collection of my data
                                        for the purpose of scheduling this
                                        appointment in accordance with the
                                        privacy policy.
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
                                    style={{
                                        backgroundColor: theme.colors.primary,
                                    }}
                                >
                                    Confirm Appointment
                                </button>
                            </form>

                            <div className="mt-4 p-8 border-t w-full border-gray-200 text-sm text-gray-500 text-center bg-[#eef5eb] rounded-lg ">
                                Need immediate assistance? Call our help desk at
                                <span
                                    className="font-semibold ml-1"
                                    style={{ color: theme.colors.primary }}
                                >
                                    0803800
                                </span>
                            </div>
                        </div>
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
            {/* <footer className="bg-[#BCCABC] text-[#5B5B5B] w-full py-16 mt-auto">
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
            </footer> */}
        </div>
    );
};

export default Page;
