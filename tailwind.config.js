/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to right, #da22ff, #9733ee)',
      },
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px'
    }
  },
  plugins: [],
}
