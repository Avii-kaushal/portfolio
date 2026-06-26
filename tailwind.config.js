/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#C2A4FF",
            },
            keyframes: {
                timeline: {
                    "10%, 20%, 50%, 70%, 90%": {
                        boxShadow: "0px 0px 5px 2px #d29bff",
                    },
                    "0%, 30%, 64%, 80%, 100%": {
                        boxShadow:
                            "0px 0px 5px 2px #d29bff, 0px 0px 15px 5px #d097ff, 0px 0px 110px 20px #f2c0ff",
                    },
                },
            },
            animation: {
                timeline: "timeline 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};