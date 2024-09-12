/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '344px', 'max': '500px'}, // Custom screen size for xs
      },
    },
  },
  plugins: [],
}

