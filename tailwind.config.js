/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepViolet: "#704CB6",
        fadeViolet: "#F0EDF7",
      },
    },
  },
  plugins: [],
};
