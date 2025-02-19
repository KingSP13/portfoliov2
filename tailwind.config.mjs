/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'marrom-bombom': '#5C4636'
      },
      fontFamily: {
        optie: ['optie', 'serif'],
      }
    },
  },
  plugins: [],
};
