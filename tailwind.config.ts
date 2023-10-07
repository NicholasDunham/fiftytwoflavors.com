import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {},
  plugins: [require("@tailwindcss/typography")],
};
export default config;
