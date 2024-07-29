/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "hsl(var(--primary))",
        dark: "hsl(var(--dark))",
        mainColor: "hsl(var(--main-color))",
        primaryText: "hsl(var(--primary-text))",
        border: "hsl(var(--border))",
        miniCard: "hsl(var(--miniCard))",
        shadow: "hsl(var(--shadow))",
        secondaryText: "hsl(var(--secondary-text))",
      },
      backgroundImage: {
        'hero': "url('/kali-img.png')",
      }
    },
  },
  plugins: [],
};
