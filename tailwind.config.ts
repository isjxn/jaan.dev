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
        'text': '#fde7e7',
        'background': '#050505',
        'primary': '#B32100',
        'secondary': '#1a1a19',
        'accent': '#ff542e',
      },
    },
  },
  plugins: [],
}
export default config
