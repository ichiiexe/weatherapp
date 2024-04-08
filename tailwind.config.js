/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      xxl: { max: "1208px" },

      xl: { max: "965px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "722px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "676px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "485px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
