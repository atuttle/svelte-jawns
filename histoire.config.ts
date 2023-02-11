import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	setupFile: '/src/histoire.setup.ts',
	storyIgnored: ['./package/**', '**/node_modules/**'],
	theme: {
		title: 'Svelte Jawns',
		logo: {
			square: '/static/favicon.png',
			light: '/static/favicon.png',
			dark: '/static/favicon.png'
		}
	},
	autoApplyContrastColor: true,
	plugins: [HstSvelte()]
});
