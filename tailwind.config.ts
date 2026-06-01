import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        foreground: "#F4F4F4",
        muted: "#94A3B8",
        accent: "#D8B79A",
        "accent-hover": "#E3C8B1",
        surface: "#0F1523",
        border: "rgba(244, 244, 244, 0.08)",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        ui: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(0, 0, 0, 0.6)"
      }
    },
  },
  plugins: [],
} satisfies Config;
