<script lang="ts">
	//<input type="number" /> has some accessibility issues.
	//See https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/

	import type { HTMLInputAttributes } from 'svelte/elements';
	interface $$restProps extends HTMLInputAttributes {
		type: 'text';
		value?: number;
		class?: string;
	}

	import { getContext, hasContext } from 'svelte';
	import { borderRadius, textInput } from '../theme';

	export let value: number | undefined;

	let passThruClasses: string = '';
	export { passThruClasses as class };
	let classes = `${$borderRadius} ${$textInput} ${passThruClasses}`;

	const inInputGroup = hasContext('inputGroup') ? getContext('inputGroup') : false;
	const inputGroupMode = hasContext('inputGroupMode') ? getContext('inputGroupMode') : null;
	if (inInputGroup) {
		classes = classes + ' flex-1';
		if (inputGroupMode === 'left') {
			classes = classes + ' rounded-l-none';
		} else if (inputGroupMode === 'right') {
			classes = classes + ' rounded-r-none';
		} else if (inputGroupMode === 'both') {
			classes = classes + ' rounded-none';
		}
	}
</script>

<input
	type="text"
	inputmode="numeric"
	pattern="[0-9]*"
	bind:value
	class={classes}
	{...$$restProps}
/>
