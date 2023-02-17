<script lang="ts">
	import { hasContext, getContext } from 'svelte';

	import type { ComponentType, SvelteComponentTyped } from 'svelte';

	export let input: ComponentType<SvelteComponentTyped> | string;
	export let label: string = '';
	export let id: string = '';
	export let stack: boolean = false;

	const labelWidth: string = hasContext('form-label-width')
		? getContext('form-label-width')
		: 'w-1/4';

	const labelClasses = `inline-block h-full pt-2 pr-4 text-right font-semibold ${labelWidth}`;
	const wrapperClasses = `flex max-w-full items-start py-2 ${stack ? 'flex-col' : ''}`;
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
