/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-frontend':
          'linear-gradient(to right, #00C0EA 0%, rgba(0, 73, 183, 0.93) 100%)',
          
      },
    },
  },
  plugins: [],
}
