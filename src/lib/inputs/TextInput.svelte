<script lang="ts">
	// This components makes use of $$restProps which is generally discouraged
	// for optimization reasons, but I think this is the reason it exists...
	// https://svelte.dev/docs#template-syntax-attributes-and-props

	import type { InputType } from '$lib/types';
	import { getContext, hasContext } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	interface $$Props extends HTMLInputAttributes {
		type: InputType;
		value?: string;
		class?: string;
	}

	import { borderRadius, textInput } from '$lib/theme';

	export let value: string = '';
	export let type: InputType = 'text';

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

	//since we don't allow numeric inputs in this TextInput component, we can assume the value should be a string
	function handleInput(event: Event) {
		value = (event.target as HTMLInputElement).value;
	}
</script>

<input {...$$restProps} {type} {value} class={classes} on:input={handleInput} />
