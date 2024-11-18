/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1216px",
        // "2xl": "1440px",
      },
    },
    extend: {
      boxShadow: {
        booking: "0 4px 12px hsla(0, 0%, 80%, .45)",
      },
      colors: {
        mainColor: "#f45369",
        mainColorHover:"#ef3e42",
        textPrimaryColor: "#2e3131"
      },
    },
  },
  plugins: [],
};
