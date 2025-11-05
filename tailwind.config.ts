import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			gold: {
  				light: '#FFD700',
  				base: '#F5B82E',
  				dark: '#B8860B'
  			},
  			dark: {
  				page: '#000000',
  				surface: '#0A0A0A',
  				card: 'rgba(18, 18, 18, 0.5)',
  				border: 'rgba(255, 215, 0, 0.2)'
  			},
  			text: {
  				primary: '#E4E4E7',
  				secondary: '#A1A1AA'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			heading: [
  				'Poppins',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'monospace'
  			]
  		},
  		fontSize: {
  			hero: [
  				'64px',
  				{
  					lineHeight: '1.2'
  				}
  			],
  			'hero-mobile': [
  				'40px',
  				{
  					lineHeight: '1.2'
  				}
  			]
  		},
  		spacing: {
  			xs: '8px',
  			sm: '16px',
  			md: '24px',
  			lg: '32px',
  			xl: '64px',
  			xxl: '96px'
  		},
  		borderRadius: {
  			card: '16px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'gold-glow': '0 0 16px rgba(245, 184, 46, 0.3)',
  			'card-hover': '0 8px 32px rgba(0, 0, 0, 0.4)'
  		},
  		backdropBlur: {
  			nav: '12px',
  			card: '20px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config