<script lang="ts">
	import Modal from '$lib/DOM/Modal.svelte';
	import Dialog from '$lib/layout/Dialog.svelte';
	import Heading from '$lib/typography/Heading.svelte';

	export let allowClose: boolean = true;
	export let closeOnBackgroundClick: boolean = true;

	export let title: string = '';
</script>

<Modal on:close bind:closeOnBackgroundClick bind:allowClose>
	<Dialog bind:allowClose>
		<Heading level={3} slot="title">{title}</Heading>
		<div slot="body"><slot name="body" /></div>
		<div slot="footer"><slot name="footer" /></div>
	</Dialog>
</Modal>
