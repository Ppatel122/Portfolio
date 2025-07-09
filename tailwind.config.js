/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      backgroundImage: {
        "dot-white": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
      },
      backgroundSize: {
        "dot": "20px 20px",
      },
    },
    fontFamily: {
      sans: ['var(--font-space-grotesk)', 'sans-serif'],
      'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
    },
  },
  plugins: [],
}; 