<script lang="ts">
	import Button from '$lib/forms/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { borderRadius, transitionDurationMS } from '$lib/theme';
	import { slide } from 'svelte/transition';
	import { Heading } from '$lib/typography';
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	let classPassThru: string = '';
	export { classPassThru as class };

	export let title: string = 'No title has been set';

	//set this to false to control closing the modal yourself (e.g. for confirmation dialogs)
	export let allowClose: boolean = true;

	function stopInternalClicksFromClosingModal() {}
</script>

<div
	class="relative top-20 mx-auto w-3/4 max-w-5xl {$borderRadius} bg-neutral-50 p-5 shadow-lg {classPassThru}"
	transition:slide={{ duration: $transitionDurationMS }}
	on:click|stopPropagation={stopInternalClicksFromClosingModal}
	on:keypress|stopPropagation={stopInternalClicksFromClosingModal}
>
	<div class="border-b pb-3 flex">
		<div class="flex-auto">
			<Heading level={3}>{title}</Heading>
		</div>
		{#if allowClose}
			<div class="flex-none">
				<slot name="close">
					<Button on:click={close} variant="subtle" class="text-2xl leading-none">&times;</Button>
				</slot>
			</div>
		{/if}
	</div>
	{#if $$slots.body}
		<div class="py-5"><slot name="body" /></div>
	{/if}
	{#if $$slots.footer}
		<div class="border-t pt-3"><slot name="footer" /></div>
	{/if}
</div>
