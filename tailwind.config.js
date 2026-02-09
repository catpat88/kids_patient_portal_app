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
        hippoBlue: "#9BE7FF",      
        mintGreen: "#BDF6D4",     
        peach: "#FFB3AB",          
        lilac: "#CDB4FF",          
        sunnyYellow: "#FFE97A",    
        coralPink: "#FFD6E8",  
        brightYellow: "#f6ff00ff",    

        // 🌤 Backgrounds
        page: "#ffffffff",
        card: "#F8F8F8",
        graySoft: "#f6f7f8",
        grayLine: "#e5e7eb",

        // 🖋 Text
        ink: "#1f2937",
        inkLight: "#4b5563",

        // 🧸 For older kids (future theme)
        black: "#000000",
        darkBlue: "#1A2B49",
        vibrantCyan: "#03E8FF",
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
