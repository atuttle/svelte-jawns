<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { borderRadius, panelBg, panelShadow, transitionDurationMS } from '$lib/theme';
	import { slide } from 'svelte/transition';
	import { Heading } from '$lib/typography';
	import Button from '$lib/inputs/Button.svelte';
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
	class="relative top-20 mx-auto w-3/4 max-w-5xl p-5 {$borderRadius} {$panelBg} {$panelShadow} {classPassThru}"
	transition:slide={{ duration: $transitionDurationMS }}
	on:click|stopPropagation={stopInternalClicksFromClosingModal}
	on:keypress|stopPropagation={stopInternalClicksFromClosingModal}
>
	<div class="flex border-b pb-3">
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
