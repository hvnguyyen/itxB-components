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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'], // For H1
        montserrat: ['Montserrat', 'sans-serif'], // For H2 og H3
        sourceSans: ['Source Sans 3', 'sans-serif'], // For avsnitt
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '700' }], // 48px
        h2: ['2rem', { lineHeight: '1.2', fontWeight: '700' }], // 32px
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
        pRegular: ['1rem', { lineHeight: '1.5', fontWeight: '400' }], // 16px Regular
        pMedium: ['1rem', { lineHeight: '1.5', fontWeight: '500' }], // 16px Medium
      },
    },
  },
  plugins: [],
};

export default config;