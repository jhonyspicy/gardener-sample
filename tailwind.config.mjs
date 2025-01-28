/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'garden-green': '#2F5233',
        'garden-light': '#97BC62',
        'garden-accent': '#E3B448',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
