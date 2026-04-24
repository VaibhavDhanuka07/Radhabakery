/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        petal: '#FFC7FF',
        blush: '#FFB2B2',
        butter: '#F5E8E8',
        canvas: '#FFF9FC',
        ink: '#2B2B2B',
        mist: '#FFF2FB',
        rose: '#FFE4E4',
        sand: '#FAF1F1',
      },
      fontFamily: {
        body: ['"Manrope"', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(255, 178, 178, 0.22)',
        float: '0 30px 70px rgba(255, 199, 255, 0.22)',
      },
    },
  },
  plugins: [],
}
