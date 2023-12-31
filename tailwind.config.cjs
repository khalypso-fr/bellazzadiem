/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ["Dancing Script"],
      },
      colors: {
        bellezzadiem: {
          bg: "#E1DCD0",
          text: "#554A37",
        },
      },
    },
  },
  plugins: [],
};
