<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	import { transitionDurationMS } from '$lib/theme';
	import Portal from '$lib/DOM/Portal.svelte';

	//set this to false to control closing the modal yourself (e.g. for confirmation dialogs)
	export let open: boolean = true;
	export let allowClose: boolean = true;
	export let closeOnBackgroundClick: boolean = true;

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}
	function bgClick() {
		if (!allowClose) return;
		if (closeOnBackgroundClick) {
			close();
		}
	}
	function bgKeypress(event: KeyboardEvent) {
		if (!allowClose) return;
		if (event.key === 'Escape') {
			close();
		}
	}
</script>

{#if open}
	<Portal>
		<div
			class="fixed inset-0 h-full w-full overflow-y-auto bg-gray-700 bg-opacity-90"
			transition:fade={{ duration: $transitionDurationMS }}
			on:click={bgClick}
			on:keypress={bgKeypress}
		>
			<slot>Modal content goes here</slot>
		</div>
	</Portal>
{/if}
