import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lg': '1024px',
       // => @media (min-width: 1024px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'xs': {'max': '450px'},
      // => @media (min-width: 300px) { ... }

    }
  },
  plugins: [],
};
export default config;
