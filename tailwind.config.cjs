/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (_theme) => ({
        programmer: "url('/unsplash/chris-ried-ieic5Tq8YMk-unsplash-2560.jpg')",
        mtbr:
          "url('/unsplash/julian-hochgesang-jyoTLVMv9So-unsplash-2560.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["programmer"],
    },
  },
  plugins: [],
};
