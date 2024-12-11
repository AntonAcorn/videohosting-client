import type { Config } from 'tailwindcss'
import { COLORS } from './src/constants/colors.constants'
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: COLORS,
			padding: {
				layout: '1.2rem'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '200ms'
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.line-clamp-2': {
					display: '-webkit-box',
					'-webkit-line-clamp': '2',
					'-webkit-box-orient': 'vertical',
					overflow: 'hidden',
					'text-overflow': 'ellipsis'
				}
			})
		})
	]
} satisfies Config
