module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html"
	],
	darkMode: "class",
	theme: {
		extend:
			{
				fontFamily: {
					"sans": ["poppins", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
				},
				colors: {
					"primary": {
						"100": "#e5f1fd",
						"200": "#b0d4f9",
						"300": "#7cb7f5",
						"400": "#479af1",
						"500": "#1a81ed",
						"600": "#0e61b8",
						"700": "#0a4583",
						"800": "#062a4f",
						"900": "#02101a",
					},
					"gray": {
						"50": "#fafafa",
						"100": "#f1f1f1",
						"200": "#d4d4d4",
						"300": "#b8b8b8",
						"400": "#9c9c9c",
						"500": "#808080",
						"600": "#636363",
						"700": "#474747",
						"800": "#2a2a2a",
						"833": "#0c1634",
						"866": "#070d1f",
						"900": "#0e0e0e",
					}
				},
				fontSize: {
					xsm: "0.75rem",
					sm: "0.875rem",
					base: "1rem",
					lg: "1.125rem",
					xl: "1.25rem",
					"2xl": "1.5rem",
					"3xl": "2rem",
					"4xl": "3rem",
				},
				font: {
					xsm: "text-[calc(0.75rem)] leading-snug",
					sm: "text-[calc(0.875rem)] leading-snug",
					base: "text-[calc(1rem)] leading-snug",
					lg: "text-[calc(1.125rem)] leading-snug",
					xl: "text-[calc(1.25rem)] leading-snug",
					"2xl": "text-[calc(1.5rem)] leading-snug",
					"3xl": "text-[calc(2rem)] leading-snug",
					"4xl": "text-[calc(3rem)] leading-snug",
				},
				screens: {
					"xs": "340px",
				},
				animation: {
					"spin-slow": "spin 1.5s ease-in-out infinite",
				},
			},
	},
	plugins: [
		require("daisyui"),
	],
};
