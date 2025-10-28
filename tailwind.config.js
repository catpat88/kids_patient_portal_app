// Tailwind thme styles - colours, background, fonts, sho=adows, border rad etc
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌈 Brand Core
        hippoBlue: "#9BE7FF",      // light friendly blue
        mintGreen: "#BDF6D4",      // for health / calm
        peach: "#FFB3AB",          // warm accent
        lilac: "#CDB4FF",          // soft purple
        sunnyYellow: "#FFE97A",    // happy yellow
        coralPink: "#FFD6E8",      // friendly pink

        // 🌤 Backgrounds
        page: "#ffffff",
        card: "#F8F8F8",
        graySoft: "#f6f7f8",
        grayLine: "#e5e7eb",

        // 🖋 Text
        ink: "#1f2937",
        inkLight: "#4b5563",

        // 🧸 For older kids (future theme)
        tealStrong: "#2BB6A7",
        violetStrong: "#8A6FD1",
      },
      boxShadow: {
        soft: "0 4px 8px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
