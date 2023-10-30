/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false
    // preflight: false
  },
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#0071eb",
        textHeading: "#1a2b49",
        textContent: "#63687a",
        secondary: "#ff5533",
        hoverPrimary: "#005bbd",
        midNightBlue: "#1a2b49",
        backgroundSecondary: "#ebeef1",
        text: "#1a2b49"
      }
    }
  },
  plugins: []
};
