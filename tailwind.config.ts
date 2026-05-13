import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#27AE60",
                background: "#F5F6FA",
                textPrimary: "#2C3E50",
                textSecondary: "#7F8C8D",
            },
            borderRadius: {
                md: "12px",
                lg: "16px",
            },
        },
    },
    plugins: [],
};

export default config;

