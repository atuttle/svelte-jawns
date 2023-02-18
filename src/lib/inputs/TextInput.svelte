<script lang="ts">
	// This components makes use of $$restProps which is generally discouraged
	// for optimization reasons, but I think this is the reason it exists...
	// https://svelte.dev/docs#template-syntax-attributes-and-props

	import type { InputType } from '$lib/types';
	import { getContext, hasContext, createEventDispatcher } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	interface $$Props extends HTMLInputAttributes {
		type: InputType;
		value?: string;
		class?: string;

		//defaults to 0 aka no debounce; provide #ms to debounce
		debounce?: number;

		loading?: boolean;
	}

	import InputGroup from '$lib/inputs/InputGroup.svelte';
	import InputGroupText from '$lib/inputs/InputGroupText.svelte';
	import { borderRadius, textInput } from '$lib/theme';

	const dispatch = createEventDispatcher();

	export let value: string = '';
	export let type: InputType = 'text';

	export let debounce: number = 0;
	export let loading: boolean = false;

	let passThruClasses: string = '';
	export { passThruClasses as class };
	let classes = `${$borderRadius} ${$textInput} ${passThruClasses}`;

	let inInputGroup = hasContext('inputGroup') ? getContext('inputGroup') : false;
	let inputGroupMode = hasContext('inputGroupMode') ? getContext('inputGroupMode') : null;
	if (type === 'search' || type === 'tel' || type === 'email' || type === 'url') {
		inInputGroup = true;
		inputGroupMode = 'left';
	}
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
	let debounceTimer: ReturnType<typeof setTimeout>;
	function handleInput(event: Event) {
		if (debounce === 0) {
			value = (event.target as HTMLInputElement).value;
			dispatch('change', value);
			return;
		}
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			value = (event.target as HTMLInputElement).value;
			dispatch('change', value);
		}, debounce);
	}
</script>

{#if type === 'search'}
	<InputGroup>
		<InputGroupText slot="left" position="left">
			{#if loading}
				<span class="animate-bounce">🔎</span>
			{:else}
				🔎
			{/if}
		</InputGroupText>
		<input slot="middle" {...$$restProps} {type} {value} class={classes} on:input={handleInput} />
	</InputGroup>
{:else if type === 'tel'}
	<InputGroup>
		<InputGroupText slot="left" position="left">☎️</InputGroupText>
		<input slot="middle" {...$$restProps} {type} {value} class={classes} on:input={handleInput} />
	</InputGroup>
{:else if type === 'email'}
	<InputGroup>
		<InputGroupText slot="left" position="left">✉️</InputGroupText>
		<input slot="middle" {...$$restProps} {type} {value} class={classes} on:input={handleInput} />
	</InputGroup>
{:else if type === 'url'}
	<InputGroup>
		<InputGroupText slot="left" position="left">🔗</InputGroupText>
		<input
			slot="middle"
			placeholder="https://..."
			{...$$restProps}
			{type}
			{value}
			class={classes}
			on:input={handleInput}
		/>
	</InputGroup>
{:else}
	<input {...$$restProps} {type} {value} class={classes} on:input={handleInput} />
{/if}
