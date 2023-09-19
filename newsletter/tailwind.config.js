/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            mobile: "375px",
            desktop: "1440px",
        },
        extend: {},
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
