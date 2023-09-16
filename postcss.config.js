/** @type {import('tailwindcss').Config} */
let postcss = require("postcss");

//const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1080px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "th-body-background": "var(--body-background)",
        "th-body-background-secondary": "var(--body-background-secondary)",
        "th-primary-dark": "var(--primary-dark)",
        "th-primary-medium": "var(--primary-medium)",
        "th-primary-light": "var(--primary-light)",
        "th-primary-light-1": "var(--primary-light-1)",
        "th-secondary-dark": "var(--secondary-dark)",
        "th-secondary-medium": "var(--secondary-medium)",
        "th-secondary-light": "var(--secondary-light)",
        "th-terniary-dark": "var(--terniary-dark)",
        "th-terniary-medium": "var(--terniary-medium)",
        "th-terniary-light": "var(--terniary-light)",
        "th-accent-dark": "var(--accent-dark)",
        "th-accent-medium": "var(--accent-medium)",
        "th-accent-light": "var(--accent-light)",
        "th-card-color-1": "var(--card-color-1)",
        "th-card-color-2": "var(--card-color-2)",
        "th-card-color-3": "var(--card-color-3)",
        "th-bg-color-1": "var(--bg-color-1)",
        "th-bg-color-2": "var(--bg-color-2)",
        "th-bg-color-3": "var(--bg-color-3)",
        "th-default-dark": "var(--default-dark)",
        "th-default-dark-1": "var(--default-dark-1)",
        "th-default-medium": "var(--default-medium)",
        "th-default-medium-1": "var(--default-medium-1)",
        "th-default-light": "var(--default-light)",
        "th-default-light-1": "var(--default-light-1)",
        "th-default-light-2": "var(--default-light-2)",
        "th-default-light-3": "var(--default-light-3)",
        "th-error-dark": "var(--error-dark)",
      },
    },
  },
  plugins: [
    {
      postcssPlugin: "grouped",
      Once(root, { result }) {
        return postcss([
          require("postcss-import"),
          require("postcss-mixins"),
          require("postcss-simple-vars"),
        ]).process(root, result.opts);
      },
    },
    require("tailwindcss"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("tw-elements/dist/plugin"),
  ],
};
