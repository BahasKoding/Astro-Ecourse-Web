/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		animation: {
			marquee: 'marquee 25s linear infinite',
		  },
		keyframes: {
			marquee: {
			  '0%': { transform: 'translateX(0)' },
			  '100%': { transform: 'translateX(-100%)' },
			}
		},
		colors: {
		  primary: {
			50: '#f0f9ff',
			100: '#e0f2fe',
			500: '#0ea5e9',
			600: '#0284c7',
			700: '#0369a1',
		  },
		  secondary: {
			50: '#fdf4ff',
			100: '#fae8ff',
			500: '#d946ef',
			600: '#c026d3',
			700: '#a21caf',
		  },
		  dark: '#0f172a',
		  light: '#f8fafc',
		},
	  },
	},
	plugins: [],
  };