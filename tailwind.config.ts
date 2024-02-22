import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '530px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    fontFamily: {
      Gellix: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#daf6f3'
        },
        secondary: {
          DEFAULT: '#000313'
        }
      }
    },
  },
  plugins: [],
}
export default config
