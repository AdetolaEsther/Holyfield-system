"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { AuthWrapper } from "@/components/layout/AuthWrapper";

const Page = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);

    return (
        <AuthWrapper>
            <div className="w-full flex flex-col items-center justify-center gap-8">
                {" "}
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-12 mb-8">
                    <div className="mb-8">
                        <h1 className="text-4xl font-semibold text-black">
                            Welcome back
                        </h1>

                        <p className="text-lg text-gray-500 mt-2">
                            Access your administrative dashboard.
                        </p>
                    </div>

                    <form className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                        />

                        <div className="relative">
                            <input
                                type={isVisible ? "text" : "password"}
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 outline-none focus:border-green-500"
                            />

                            <button
                                type="button"
                                onClick={toggle}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {isVisible ? (
                                    <Icon icon="mdi:eye-off" />
                                ) : (
                                    <Icon icon="mdi:eye" />
                                )}
                            </button>
                        </div>

                        <div className="flex justify-end">
                            <a
                                href="/forgot-password"
                                className="text-sm text-green-600"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="bg-green-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Login
                        </button>

                        <div className="flex flex-col items-center gap-4 mt-6">
                            <div className="w-full flex items-center gap-3">
                                <div className="flex-1 h-px bg-gray-200" />
                               <div className="flex-1 h-px bg-gray-200" />
                            </div>

                            <p className="text-sm text-center text-gray-600">
                                Need technical assistance?{" "}
                                <a
                                    href="/sign-up"
                                    className="text-green-600 font-medium hover:underline"
                                >
                                    Contact Support
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500 text-center">
                    <p className="whitespace-nowrap">
                        © {new Date().getFullYear()} Holyfield Medical clinic.
                        All rights reserved.
                    </p>
                    <span className="hidden md:block">•</span>

                    <p className="cursor-pointer hover:text-green-600 transition">
                        Privacy Policy
                    </p>

                    <span className="hidden md:block">•</span>

                    <p className="cursor-pointer hover:text-green-600 transition">
                        Terms of Service
                    </p>
                </div>
            </div>
        </AuthWrapper>
    );
};

export default Page;
