<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { transitionDurationMS, blockPadding } from '$lib/theme';
	import { slide } from '$lib/animations';
	import Panel from '$lib/ui/Panel.svelte';
	import Heading from '$lib/typography/Heading.svelte';

	export let open: boolean = false;

	const dispatch = createEventDispatcher();

	function toggleOpen() {
		dispatch(open ? 'accordion_close' : 'accordion_open');
		open = !open;
	}
</script>

<Panel>
	<div
		class="flex cursor-pointer items-center"
		on:click|stopPropagation={toggleOpen}
		on:keypress|stopPropagation={toggleOpen}
		style="--transitionDuration: {$transitionDurationMS / 1000}s"
	>
		<span class="icon {open ? 'open' : ''}">▲</span>
		<slot name="header">
			<Heading level={3}>Panel Heading</Heading>
		</slot>
	</div>
	<div use:slide={{ open, duration: $transitionDurationMS }}>
		<div class={$blockPadding}>
			<hr class="mb-2" />
			<slot name="body" />
		</div>
	</div>
</Panel>

<style>
	.icon {
		margin-right: 10px;
		transform: rotate(0.25turn);
		transition: transform var(--transitionDuration) ease;
	}
	.icon.open {
		transform: rotate(0.5turn);
	}
</style>
