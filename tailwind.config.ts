/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  // darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#1D1D1D",
        onPrimary: "#FFFFFF",
        link: "#204ECF",
        linkLight: "#E5ECFF",
        placeholder: "#8E8E8E",
        background: "#FFFFFF",
        success: "#20CF91",
        notice: "#FF3652",
        foreground: "#F3F5F7",
        shadow: "#8E8E8E26",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#204ECF",
          foreground: "#E5ECFF",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "#8E8E8E",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "#D4D3D3",
        input: "#F3F5F7",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1.438rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.9rem",
          {
            lineHeight: "1.438rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "normal",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        l: [
          "1.125rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        xl: [
          "1.438rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "3xl": [
          "1.602rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "5xl": [
          "2rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "6xl": [
          "2.281rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "7xl": [
          "2.57rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1250px",
        xxl: "1450px",
        xxxl: "1550px",
        xxxxl: "1650px",
      },
      borderRadius: {
        xs: "0.313rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "6.25rem",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;
