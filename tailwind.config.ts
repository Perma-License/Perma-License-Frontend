import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greenNormal: '#00A991',
        greenDark:'#007F6D',
        greenDarker:'#003B33',
        BaseBlack: '#000000',
        BaseWhite: '#FFFFFF',
        BaseGrey: '#202020',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        acorn: ['Acorn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
