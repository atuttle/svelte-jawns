<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Modal from '$lib/DOM/Modal.svelte';
	import Dialog from '$lib/layout/Dialog.svelte';

	export let allowClose: boolean = true;
	export let closeOnBackgroundClick: boolean = true;

	export let title: string = '';

	let open: boolean = true;

	const dispatch = createEventDispatcher();
	function handleClose() {
		open = false;
		dispatch('close');
	}
</script>

{#if open}
	<Modal on:close={handleClose} bind:open bind:closeOnBackgroundClick bind:allowClose>
		<Dialog bind:allowClose on:close={handleClose} {title}>
			<div slot="body"><slot name="body" /></div>
			<div slot="footer"><slot name="footer" /></div>
		</Dialog>
	</Modal>
{/if}

<!-- <style>
	:global(body) {
		overflow: hidden;
	}
</style> -->
