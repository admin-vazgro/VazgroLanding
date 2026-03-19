/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Instrument Serif', 'serif'],
        sans: ['Bricolage Grotesque', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: { DEFAULT: '#F6F4EE', 2: '#EFECE4', 3: '#E8E4DA' },
        ink: { DEFAULT: '#0E0D09', 2: '#2C2B26' },
        muted: '#7E7B72',
        rule: '#D9D6CD',
        blue: { DEFAULT: '#1400FF', lt: '#EEEEFF' },
        warm: { DEFAULT: '#E03D00', lt: '#FFF0EB' },
        sage: { DEFAULT: '#1A6B54', lt: '#EBF5F1' },
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        18: '4.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'fade-in': 'fadeIn 0.5s ease both',
        float: 'float 3.5s ease-in-out infinite',
        'float-2': 'float 3.5s 0.7s ease-in-out infinite',
        'float-3': 'float 3.5s 1.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
