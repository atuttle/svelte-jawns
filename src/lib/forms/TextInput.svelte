<script lang="ts">
	import type { InputType } from '$lib/types';
	import type { HTMLInputAttributes } from 'svelte/elements';
	interface $$Props extends HTMLInputAttributes {
		type: InputType;
		value?: string;
		class?: string;
	}

	import { borderRadius, textInput } from '../theme';

	export let value: string = '';
	export let type: InputType = 'text';

	let passThruClasses: string = '';
	export { passThruClasses as class };
	const classes = `${$borderRadius} ${$textInput} ${passThruClasses}`;

	// This components makes use of $$restProps which is generally discouraged
	// for optimization reasons, but I think this is the reason it exists...
	// https://svelte.dev/docs#template-syntax-attributes-and-props
</script>

{#if type === 'text'}
	<input type="text" {...$$restProps} bind:value class={classes} />
{:else if type === 'password'}
	<input type="password" {...$$restProps} bind:value class={classes} />
{:else if type === 'email'}
	<input type="email" {...$$restProps} bind:value class={classes} />
{:else if type === 'number'}
	<input type="number" {...$$restProps} bind:value class={classes} />
{:else if type === 'tel'}
	<input type="tel" {...$$restProps} bind:value class={classes} />
{:else if type === 'url'}
	<input type="url" {...$$restProps} bind:value class={classes} />
{:else if type === 'search'}
	<input type="search" {...$$restProps} bind:value class={classes} />
{:else if type === 'date'}
	<input type="date" {...$$restProps} bind:value class={classes} />
{:else if type === 'time'}
	<input type="time" {...$$restProps} bind:value class={classes} />
{/if}
