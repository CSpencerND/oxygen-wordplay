/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                xs: ["clamp(0.8rem, calc(0.68rem + 0.29vw), 1rem)", "1.2"],
                sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.5"],
                base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
                lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.5"],
                xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
                "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.73rem)", "1.2"],
                "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
                "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
                "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
                "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
            },
            boxShadow: {
                box: "0 0 10px rgb(0 0 0 / 0.2), 0 0 5px rgb(0 0 0 / 0.2)",
            },
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
            colors: {
                brown: {
                    50: "#fdf8f6",
                    100: "#f2e8e5",
                    200: "#eaddd7",
                    300: "#e0cec7",
                    400: "#d2bab0",
                    500: "#bfa094",
                    600: "#a18072",
                    700: "#977669",
                    800: "#846358",
                    900: "#43302b",
                },
            },
            borderRadius: {
                sq: "17.5%",
                rec: "17.5% / 8.75%",
            },
        },
    },

    plugins: [
        require("daisyui"),
        require("@tailwindcss/typography"),
        require("@headlessui/tailwindcss")({ prefix: "ui" }),
    ],

    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
        themes: [{ ...require("./theme") }],
    },
}
