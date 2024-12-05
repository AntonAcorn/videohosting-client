import { COLORS } from "./src/app/constants/colors.constants";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: COLORS,
		},
	},
	plugins: [],
} satisfies Config;
