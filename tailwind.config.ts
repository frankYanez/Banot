import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gold accent colors
        'gold': {
          'light': '#FFD700',
          'base': '#F5B82E', 
          'dark': '#B8860B'
        },
        // Dark neutrals
        'dark': {
          'page': '#000000',
          'surface': '#0A0A0A',
          'card': 'rgba(18, 18, 18, 0.5)',
          'border': 'rgba(255, 215, 0, 0.2)'
        },
        // Text colors
        'text': {
          'primary': '#E4E4E7',
          'secondary': '#A1A1AA'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.2' }],
        'hero-mobile': ['40px', { lineHeight: '1.2' }]
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '64px',
        'xxl': '96px'
      },
      borderRadius: {
        'card': '16px'
      },
      boxShadow: {
        'gold-glow': '0 0 16px rgba(245, 184, 46, 0.3)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.4)'
      },
      backdropBlur: {
        'nav': '12px',
        'card': '20px'
      }
    },
  },
  plugins: [],
}
export default config