import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				dotgothic16: ['DotGothic16', 'mono'],
				OOtt: ['OOtt', 'mono']
			}
		}
	},

	plugins: []
} satisfies Config
