/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#8031F7",
          600: "#702de3",
        },
        blue: {
          500: "#0099CC",
          600: "#0088b3",
        },
        green: {
          500: "#00CC85",
          600: "#00b376",
        },
        gray: {
          100: "#f8f8f8",
          200: "#e5e5e5",
          300: "#d4d4d4",
          600: "#525252",
          800: "#212121",
          900: "#171717",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  safelist: [
    'bg-gradient-to-r',
    'from-slate-900',
    'to-slate-800',
    'from-purple-600',
    'via-blue-400',
    'to-emerald-500',
    'from-blue-400',
    'via-blue-500',
    'to-purple-600',
    'text-white',
    'dark:bg-slate-950',
  ],
}

