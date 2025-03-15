module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        morph: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(90deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'morph-button': 'morph 0.4s ease-in-out',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};