const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				iqBlue: '#08457e',
				iqBlueBright: '#0075d9',
				iqYellow: '#ebbc62'
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
