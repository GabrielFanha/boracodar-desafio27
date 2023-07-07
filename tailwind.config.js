/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#D6D6F2",
          100: "#E2E2F5",
        },
        blue: {
          50: "#212187",
          100: "#151557",
          200: "#000013",
        },
        purple: {
          100: "#BF7BFB",
        },
      },
      fontSize: {
        heading: "40px",
        regular: "20px",
        button: "14px",
      },
    },
  },
  plugins: [],
}
