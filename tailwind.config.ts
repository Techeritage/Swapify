import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myBkGreen: "#35524A",
        myOrange: "#FFA726",
        myGreen: "#386F5F",
      },
    },
  },
  plugins: [],
};
export default config;
