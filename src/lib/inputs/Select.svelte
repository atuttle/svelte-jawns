<script lang="ts">
	import { getContext, hasContext } from 'svelte';

	import { borderRadius, textInput } from '$lib/theme';

	export let value: string = '';

	let classPassThru: string = '';
	export { classPassThru as class };

	let classes = classPassThru + ` ${$borderRadius} ${$textInput}`;

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

<select bind:value class={classes} {...$$restProps}>
	<slot />
</select>
