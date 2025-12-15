/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        },
        navy: "#0f172a",
        slate: "#1e293b"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
        "gradient-hero":
          "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.2), transparent 25%), radial-gradient(circle at 80% 10%, rgba(59,130,246,0.18), transparent 25%)"
      }
    }
  },
  plugins: []
};

