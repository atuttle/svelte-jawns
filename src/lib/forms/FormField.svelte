<script lang="ts">
	import { hasContext, getContext } from 'svelte';
	import type { ComponentType, SvelteComponentTyped } from 'svelte';

	if (!hasContext('form-label-width')) {
		throw new Error('FormField must be used within a Form component');
	}
	const labelWidth: string = getContext('form-label-width');

	export let input: ComponentType<SvelteComponentTyped> | string;
	export let label: string = '';
	export let id: string = '';
	export let stack: boolean = false;
	export let labelClasses: string = `inline-block h-full pt-2 pr-4 text-right font-semibold ${labelWidth}`;
	export let wrapperClasses: string = `flex max-w-full items-start py-2 ${stack ? 'flex-col' : ''}`;
</script>

<div class={wrapperClasses}>
	<label for={id} class={labelClasses}>{label}</label>
	<div class="flex-1">
		{#if typeof input === 'string'}
			<svelte:element this={input} {id} {...$$restProps} />
		{:else}
			<svelte:component this={input} {id} {...$$restProps} />
		{/if}
	</div>
</div>
