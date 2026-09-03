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
        canvas: "#F0F0F0",
        stark: "#121212",
        "bauhaus-red": "#D02020",
        "bauhaus-blue": "#1040C0",
        "bauhaus-yellow": "#F0C020",
        "bauhaus-muted": "#E0E0E0",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        sans: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        "hard-sm": "3px 3px 0px 0px #121212",
        "hard-md": "4px 4px 0px 0px #121212",
        "hard-lg": "8px 8px 0px 0px #121212",
        "hard-xl": "12px 12px 0px 0px #121212",
      },
      borderWidth: {
        "3": "3px",
      },
    },
  },
  plugins: [],
};
export default config;
