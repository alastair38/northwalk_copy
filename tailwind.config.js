/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			highlight: colors.yellow,
			base: {
				light: 'hsl(var(--color-base-light) / <alpha-value>)',
				DEFAULT: 'hsl(var(--color-base) / <alpha-value>)',
				dark: 'hsl(var(--color-base-dark) / <alpha-value>)'
			},
			content: {
				light: 'hsl(var(--color-content-light) / <alpha-value>)',
				DEFAULT: 'hsl(var(--color-content) / <alpha-value>)',
				dark: 'hsl(var(--color-content-dark) / <alpha-value>)'
			},
			brand: {
				light: 'hsl(var(--color-brand-light) / <alpha-value>)',
				DEFAULT: 'hsl(var(--color-brand) / <alpha-value>)',
				dark: 'hsl(var(--color-brand-dark) / <alpha-value>)'
			},
			accent: {
				light: 'hsl(var(--color-accent-light) / <alpha-value>)',
				DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
				dark: 'hsl(var(--color-accent-dark) / <alpha-value>)'
			}
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			default: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem'
		},

		extend: {
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans]
			},
			backgroundImage: {
				space:
					"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nNjAwJyBoZWlnaHQ9JzYwMCcgdmlld0JveD0nMCAwIDE1MCAxNTAnPgo8ZmlsdGVyIGlkPSdpJyB4PScwJyB5PScwJz4KCTxmZUNvbG9yTWF0cml4IHR5cGU9J21hdHJpeCcgdmFsdWVzPScxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAwIDAnIC8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSduJyB4PScwJyB5PScwJz4KCTxmZVR1cmJ1bGVuY2UgdHlwZT0ndHVyYnVsZW5jZScgYmFzZUZyZXF1ZW5jeT0nLjcnIHJlc3VsdD0nZnV6eicgbnVtT2N0YXZlcz0nMicgc3RpdGNoVGlsZXM9J3N0aXRjaCcvPgoJPGZlQ29tcG9zaXRlIGluPSdTb3VyY2VHcmFwaGljJyBpbjI9J2Z1enonIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMT0nMCcgazI9JzEnIGszPSctNzMnIGs0PScuMDEnIC8+CjwvZmlsdGVyPgo8cmVjdCB3aWR0aD0nMTAyJScgaGVpZ2h0PScxMDIlJyBmaWxsPScjMDMwMzFhJy8+CjxyZWN0IHg9Jy0xJScgeT0nLTElJyB3aWR0aD0nMTAyJScgaGVpZ2h0PScxMDIlJyBmaWxsPScjZmZmZmZmJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHk9JzEnLz4KPHJlY3QgeD0nLTElJyB5PSctMSUnIHdpZHRoPScxMDIlJyBoZWlnaHQ9JzEwMiUnIGZpbGw9JyMwMzAzMWEnIGZpbHRlcj0ndXJsKCNpKScgb3BhY2l0eT0nMScvPgo8L3N2Zz4=')",
				plaid:
					'repeating-linear-gradient(45deg, transparent 0px, transparent 100px, hsl(var(--color-accent) / .15) 100px, hsl(var(--color-accent) / .15) 200px, transparent 200px, transparent 400px, hsl(var(--color-content) / .15) 400px, hsl(var(--color-content) / .15) 401px), repeating-linear-gradient(135deg, transparent 0px, transparent 100px, hsl(var(--color-base-dark) / .15) 100px, hsl(var(--color-base-dark) / .15) 300px, hsl(var(--color-brand) / .15) 300px, hsl(var(--color-brand) / .15) 500px, rgba(255, 255,255, .85) 500px, rgba(255, 255,255, .85) 600px, transparent 600px, transparent 800px)',
				argyle:
					'repeating-linear-gradient(45deg, transparent 0px, transparent 300px, hsl(var(--color-accent-light) / .1) 300px, hsl(var(--color-accent-light) / .1) 400px, transparent 400px, transparent 500px, hsl(var(--color-content) / .15) 500px, hsl(var(--color-content) / .15) 501px), repeating-linear-gradient(135deg, transparent 0px, transparent 300px, hsl(var(--color-brand-light) / .1) 300px, hsl(var(--color-brand-light) / .1) 600px, hsl(var(--color-accent) / .15) 600px, hsl(var(--color-accent) / .15) 900px)'
			},
			dropShadow: {
				highlight: '0 3px 8px hsl(var(--color-accent) / 1)'
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': 'hsl(var(--color-content-light))',
						'--tw-prose-headings': 'hsl(var(--color-content))',
						'--tw-prose-lead': 'hsl(var(--color-content-light))',
						'--tw-prose-links': 'hsl(var(--color-content))',
						'--tw-prose-bold': 'hsl(var(--color-content-light))',
						'--tw-prose-counters': 'hsl(var(--color-content-dark))',
						'--tw-prose-bullets': 'hsl(var(--color-content-dark))',
						'--tw-prose-hr': 'hsl(var(--color-content-dark))',
						'--tw-prose-quotes': 'hsl(var(--color-content-dark))',
						'--tw-prose-quote-borders': 'hsl(var(--color-content))',
						'--tw-prose-captions': 'hsl(var(--color-content))',
						'--tw-prose-code': 'hsl(var(--color-content-light))',
						'--tw-prose-pre-code': 'hsl(var(--color-content-dark))',
						'--tw-prose-pre-bg': 'hsl(var(--color-content))',
						'--tw-prose-th-borders': 'hsl(var(--color-content-dark))',
						'--tw-prose-td-borders': 'hsl(var(--color-content-dark))',
						'--tw-prose-invert-body': 'hsl(var(--color-base-light))',
						'--tw-prose-invert-headings': 'hsl(var(--color-base))',
						'--tw-prose-invert-lead': 'hsl(var(--color-base-light))',
						'--tw-prose-invert-links': 'hsl(var(--color-base))',
						'--tw-prose-invert-bold': 'hsl(var(--color-base-light))',
						'--tw-prose-invert-counters': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-bullets': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-hr': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-quotes': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-quote-borders': 'hsl(var(--color-base))',
						'--tw-prose-invert-captions': 'hsl(var(--color-base))',
						'--tw-prose-invert-code': 'hsl(var(--color-base-light))',
						'--tw-prose-invert-pre-code': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-pre-bg': 'hsl(var(--color-base))',
						'--tw-prose-invert-th-borders': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-td-borders': 'hsl(var(--color-base-dark))'
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
