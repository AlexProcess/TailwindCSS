/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "375px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1440px",
        },
        extend: {
            outlineOffset: {
                1: "1px",
            },
            boxShadow: {
                custom: "-2px 18px 56px 0px rgba(255, 141, 72, 0.56)",
            },
        },
        colors: {
            tomato: "hsl(4, 100%, 67%)",
            "dark-slate": "hsl(234, 29%, 20%)",
            charcoalgrey: "hsl(235, 18%, 26%)",
            grey: "hsl(231, 7%, 60%)",
            white: "hsl(0, 0%, 100%)",
        },
    },
    plugins: [],
};
