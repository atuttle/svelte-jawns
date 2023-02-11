<script lang="ts">
	import Button from '$lib/forms/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { slide, fade } from 'svelte/transition';
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	let classPassThru: string = '';
	export { classPassThru as class };

	export let transitionDurationMS: number = 150;

	//set this to false to control closing the modal yourself (e.g. for confirmation dialogs)
	export let allowClose: boolean = true;
</script>

<div
	class="relative top-20 mx-auto w-3/4 max-w-5xl rounded-md bg-white p-5 shadow-lg {classPassThru}"
	transition:slide={{ duration: transitionDurationMS }}
>
	<!-- removed from DIV on prev line: `on:click|stopPropagation={() => {}}` -->
	{#if $$slots.title}
		<div class="border-b pb-3">
			<slot name="title" />
			{#if allowClose}
				<slot name="close">
					<Button on:click={close} variant="subtle" class="absolute top-2 right-2">&times;</Button>
				</slot>
			{/if}
		</div>
	{/if}
	{#if $$slots.body}
		<div class="py-5"><slot name="body" /></div>
	{/if}
	{#if $$slots.footer}
		<div class="border-t pt-3"><slot name="footer" /></div>
	{/if}
</div>

<!-- <style>
	:global(body) {
		overflow: hidden;
	}
</style> -->
