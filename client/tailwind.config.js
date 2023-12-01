/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#00008B",
        lightblue: "#0062d1",
        litedarkblue: "#0045c2",
        green: "#00E6C0",
        overley: "#00000042",
        grays: "#f7f6f5",
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.5rem',
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};
