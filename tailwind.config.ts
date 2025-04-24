import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8e9ea",
          100: "#b8babd",
          200: "#96989d",
          300: "#666971",
          400: "#484c55",
          500: "#1a1f2b",
          600: "#181c27",
          700: "#12161f",
          800: "#0e1118",
          900: "#0b0d12",
        },
        secondary: {
          50: "#eaebef",
          100: "#bfc2cc",
          200: "#a0a4b4",
          300: "#747a92",
          400: "#59617d",
          500: "#30395c",
          600: "#2c3454",
          700: "#222841",
          800: "#1a1f33",
          900: "#141827",
        },
        details: {
          50: "#edf0f4",
          100: "#c7cfdd",
          200: "#acb8cc",
          300: "#8697b5",
          400: "#6e83a7",
          500: "#4a6491",
          600: "#435b84",
          700: "#354767",
          800: "#293750",
          900: "#1f2a3d",
        },
        "text-color": {
          50: "#fafcfe",
          100: "#f0f7fb",
          200: "#e9f3f9",
          300: "#e0edf6",
          400: "#d9e9f5",
          500: "#d0e4f2",
          600: "#bdcfdc",
          700: "#94a2ac",
          800: "#727d85",
          900: "#576066",
        },
        third: {
          50: "#f3f6fa",
          100: "#d9e3ef",
          200: "#c7d6e8",
          300: "#adc3dd",
          400: "#9db7d6",
          500: "#85a5cc",
          600: "#7996ba",
          700: "#5e7591",
          800: "#495b70",
          900: "#384556",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
