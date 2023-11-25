import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {    
    fontFamily: {
    sans: ['"Segoe UI"','Roboto','sans-serif',],
    'montserrat': ['Montserrat'],
    'lato': ['Lato'],
    'garamond': ['Garamond']

  },
  extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero': "url('../public/image/green-cable.jpg')",
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
