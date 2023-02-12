<script lang="ts">
	import type { HeadingLevel } from '$lib/types';

	import { typography, headings } from '../theme';

	let classPassThru: string = '';
	export { classPassThru as class };

	export let level: HeadingLevel = 1;

	const headingSizeMap = {
		1: 'text-5xl',
		2: 'text-4xl',
		3: 'text-3xl',
		4: 'text-2xl',
		5: 'text-xl',
		6: 'text-lg'
	};

	const classes = `${$typography} ${$headings} ${headingSizeMap[level]} ${classPassThru}`;
</script>

<svelte:element this={`h${level}`} class={classes}>
	<slot />
</svelte:element>
