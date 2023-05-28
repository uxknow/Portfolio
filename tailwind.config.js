/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        wrapper: "1440px",
      },
      screens: {
        md900: '900px',
        sm480: '480px'
      },
      keyframes: {
        'move-arrow': {
          '0%': { transform: 'translateY(3px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(3px)' }
        },
        'shake': {
          '25%': {transform: 'translateX(4px)'},
          '50%': {transform: 'translateX(-4px)'},
          '75%': {transform: 'translateX(4px)'},
        }
    },
    animation: {
      'move-arrow': 'move-arrow 1.3s ease-in-out infinite',
      'shake': 'shake .2s ease-in'
    }
  }
  },
  plugins: [],
};
