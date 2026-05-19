import Image from "next/image";
import { theme } from "./theme";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
    const features = [
        {
            icon: "material-symbols:cardiology-outline",
            title: "Cardiology",
            description:
                "Advanced diagnostic and therapeutic heart care services including preventive screenings.",
        },
        {
            icon: "lucide:brain",
            title: "Neurology",
            description:
                "Expert care for complex neurological conditions using the latest medical breakthroughs.",
        },
        {
            icon: "lucide-lab:bottle-baby",
            title: "Pediatrics",
            description:
                "Compassionate and gentle care for your little ones, from infancy through adolescence.",
        },
        {
            icon: "hugeicons:doctor-01",
            title: "Diagnostics",
            description:
                "Precision imaging and laboratory services for accurate and rapid health assessments.",
        },
    ];
    return (
        <div className="w-full flex flex-col">
            <div
                id="home"
                className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 pt-6 md:pt-10 px-3 md:px-[350px] pb-6 md:pb-[40px] text-center md:text-left"
            >
                <div className="flex-1 max-w-[700px] flex flex-col gap-3 items-start text-left">
                    <div className="bg-[#CFE2F9] text-[#351F89] px-2 py-2 rounded-[0.8rem] w-fit whitespace-nowrap text-[12px] inline-flex items-center font-medium">
                        <Icon
                            icon="material-symbols-light:verified-outline"
                            width="18"
                            height="18"
                            color="#351F89"
                        />
                        <span className="text-inherit">
                            TRUSTED BY 10,000+ PATIENTS
                        </span>
                    </div>
                    <h2 className="text-[56px] font-bold leading-[1.2]">
                        Quality Healthcare
                        <span
                            className="font-bold"
                            style={{ color: theme.colors.primary }}
                        >
                            You Can Trust{" "}
                        </span>
                    </h2>
                    <p className=" text-[#5B5B5B] text-[16px] md:text-[18px] leading-[1.6] max-w-full md:max-w-[500px]">
                        Experience a new standard of medical excellence with our
                        state- of-the-art facilities and compassionate
                        specialist care tailored to your family's needs.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        {" "}
                        <Link href="/book-appointment">
                            <button
                                style={{
                                    backgroundColor: theme.colors.secondary,
                                }}
                                className="text-white text-sm px-6 py-3 rounded-lg w-full md:w-auto"
                            >
                                Book Appointment
                            </button>
                        </Link>
                        <button className="text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 border-2 border-[#5B5B5B] text-[#5B5B5B] hover:bg-[#5B5B5B] hover:text-white transition w-full md:w-auto">
                            <Icon
                                icon="mdi:play-circle-outline"
                                width="18"
                                height="18"
                            />
                            Learn more
                        </button>
                    </div>
                </div>

                <div className=" flex-1 flex items-center justify-center relative w-full mt-6 md:mt-0">
                    <div className="flex-1 flex items-center justify-center relative w-full mt-6 md:mt-0">
                        <div className="relative w-full max-w-[600px] aspect-[1/1]">
                            <Image
                                src="/Container.png"
                                alt="Hero Image"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="services"
                className="px-4 md:px-[204px] py-8 md:py-[100px]"
            >
                <p
                    className="text-center text-[10px] md:text-[12px] leading-[1.6]"
                    style={{ color: theme.colors.primary }}
                >
                    OUR SPECIALTIES
                </p>
                <h2 className="text-center text-2xl md:text-4xl font-bold mb-6">
                    Comprehensive Medical Services{" "}
                </h2>
                <p className="text-center text-[14px] md:text-[16px] leading-[1.6] mb-4">
                    We offer a wide range of specialized treatments delivered by
                    world-class <br /> medical professionals in our modern
                    facilities.{" "}
                </p>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className=" bg-white rounded-2xl p-6 w-full md:max-w-[320px] border border-gray-100 flex flex-col"
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 "
                                style={{
                                    background: `linear-gradient( 135deg, ${theme.colors.primary}20 0%, ${theme.colors.primary}08 100% )`,
                                }}
                            >
                                <Icon
                                    icon={item.icon}
                                    width="24"
                                    height="24"
                                    color={theme.colors.primary}
                                />
                            </div>

                            <h3 className="text-[20px] font-semibold text-[#1E1E1E] mb-3">
                                {item.title}
                            </h3>

                            <p className="text-[#5B5B5B] text-[15px] leading-7 mb-6">
                                {item.description}
                            </p>

                            <button
                                className="flex items-center gap-2 text-sm font-medium mt-auto transition-opacity duration-200 hover:opacity-80 "
                                style={{ color: theme.colors.primary }}
                            >
                                EXPLORE MORE
                                <Icon
                                    icon={"maki:arrow"}
                                    width="16"
                                    height="16"
                                    color={theme.colors.primary}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div
                id="about"
                className="flex flex-col-reverse md:flex-row items-stretch justify-between gap-6 md:gap-10 pt-[80px] md:pt-[100px] px-3 md:px-[350px] pb-6 md:pb-[100px] text-left"
            >
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-full max-w-[600px] h-full min-h-[500px] md:min-h-[600px]">
                        <Image
                            src="/Our-Modern-Clinic-Facility.png"
                            alt="Clinic Facility"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <button className="absolute inset-0 flex items-center justify-center z-10">
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                                style={{
                                    backgroundColor: theme.colors.primary,
                                }}
                            >
                                <Icon
                                    icon="mdi:play"
                                    width="38"
                                    height="38"
                                    color="#fff"
                                />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex-1 max-w-[700px] flex flex-col gap-3 items-center md:items-start">
                    <p
                        className="font-bold text-[10px] md:text-[14px]"
                        style={{ color: theme.colors.primary }}
                    >
                        About Holyfield
                    </p>

                    <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.2]">
                        Defining the Future of Medical Precision
                    </h2>

                    <p className="text-[#5B5B5B] text-[14px] md:text-[16px] leading-[1.6] max-w-[500px]">
                        Since our founding in 2010, Holyfield has been at the
                        forefront of medical innovation...
                    </p>

                    <div className="flex flex-col gap-4 mt-8">
                        {[
                            "Over 150+ Certified Specialist Doctors",
                            "Modern Diagnostic & Surgical Technology",
                            "Personalized Patient Recovery Plans",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3"
                            >
                                <div
                                    className="min-w-10 h-10 rounded-full flex items-center justify-center"
                                    style={{
                                        background: `linear-gradient( 135deg, ${theme.colors.primary}20 0%, ${theme.colors.primary}08 100%)`,
                                    }}
                                >
                                    <Icon
                                        icon="mdi:check-bold"
                                        width="18"
                                        height="18"
                                        color={theme.colors.primary}
                                    />
                                </div>

                                <p className="text-[15px] md:text-[16px] font-medium text-[#1E1E1E]">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <button
                            style={{ backgroundColor: theme.colors.primary }}
                            className="text-white text-sm px-6 py-2 rounded-lg"
                        >
                            OUR FULL STORY
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-8">
                <div className="bg-[#BCCABC] rounded-2xl p-8 w-full md:max-w-[420px] border border-gray-100 flex flex-col items-center text-center">
                    <h3 className="text-[28px] font-bold text-[#1E1E1E]">
                        25K+
                    </h3>
                    <p className="text-[#5B5B5B] text-[14px] font-medium mt-2">
                        HAPPY PATIENTS
                    </p>
                </div>

                <div className="bg-[#27AE60] rounded-2xl p-8 w-full md:max-w-[420px] flex flex-col items-center text-center">
                    <h3 className="text-[28px] font-bold text-[#FFFFFF]">2</h3>
                    <p className="text-[#FFFFFF] text-[14px] font-medium mt-2">
                        WORLD-CLASS CLINICS
                    </p>
                </div>

                <div className="bg-[#BCCABC] rounded-2xl p-8 w-full md:max-w-[420px] border border-gray-100 flex flex-col items-center text-center">
                    <h3 className="text-[28px] font-bold text-[#1E1E1E]">
                        99%
                    </h3>
                    <p className="text-[#5B5B5B] text-[14px] font-medium mt-2">
                        SUCCESS RATE
                    </p>
                </div>
            </div>

            <div
                id="footer"
                className="bg-[#BCCABC] text-[#5B5B5B] w-full py-16"
            >
                <div className="max-w-[1000px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between gap-10 text-left">
                        {" "}
                        <div>
                            <div className="flex items-center gap-2 justify-start">
                                {" "}
                                <Icon
                                    icon="streamline-plump:hospital-sign-square-remix"
                                    color={theme.colors.primary}
                                    width="24"
                                    height="24"
                                />
                                <h2
                                    className="font-bold text-lg"
                                    style={{ color: theme.colors.primary }}
                                >
                                    Holyfield Medical Clinic
                                </h2>
                            </div>

                            <div className="mt-4 text-[14px] leading-6 max-w-[300px]">
                                <p>
                                    Providing world-class medical services with
                                    a touch of humanity and precision. Your
                                    health is our primary mission.
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 text-[14px] max-w-[300px]">
                            <h4 className="font-bold mb-3">Quick Links</h4>

                            <div className="flex flex-col space-y-2">
                                <p>About Us</p>
                                <p>Find a Doctor</p>
                                <p>Services</p>
                                <p>Book Appointment</p>
                            </div>
                        </div>
                        <div className="mt-4 text-[14px] max-w-[300px]">
                            <h4 className="font-bold mb-3">Support</h4>

                            <div className="flex flex-col space-y-2">
                                <p>Emergency Info</p>
                                <p>Contact Support</p>
                                <p>Terms of Service</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <div className="mt-4 text-[14px] leading-6 max-w-[300px]">
                            <h4 className="font-bold mb-3">News Letter</h4>
                            <p>
                                Stay updated with our latest medical news and
                                tips.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                {" "}
                                <input
                                    placeholder="example@email.com"
                                    className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md text-black"
                                />
                                <button className="flex items-center justify-center w-full sm:w-auto">
                                    {" "}
                                    <div
                                        className="w-full sm:w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                                        style={{
                                            backgroundColor:
                                                theme.colors.primary,
                                        }}
                                    >
                                        <Icon
                                            icon="material-symbols:send-rounded"
                                            color="#ffffff"
                                            width="24"
                                            height="24"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start md:items-center justify-center gap-6 text-gray-400 mt-8 border-t border-gray-300 pt-6">
                        {" "}
                        <p className="whitespace-nowrap">
                            © {new Date().getFullYear()} © Holyfield Medical
                            clinic. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
