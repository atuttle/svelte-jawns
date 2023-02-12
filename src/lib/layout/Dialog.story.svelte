<script lang="ts">
	import Dialog from '$lib/layout/Dialog.svelte';
	import Button from '$lib/inputs/Button.svelte';

	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;

	function handleDialogClose() {
		console.log('Dialog close event received');
	}
	function handleConfirm() {
		console.log('Confirm button clicked');
	}
</script>

<Hst.Story title="layout/Dialog">
	<Dialog on:close={handleDialogClose} title="Confirm Password Reset">
		<div slot="body">
			<p>Are you sure you want to reset your password?</p>
		</div>
		<div slot="footer" class="text-right">
			<Button variant="subtle" on:click={handleDialogClose}>Cancel</Button>
			<Button variant="cta" on:click={handleConfirm}>Confirm</Button>
		</div>
	</Dialog>
</Hst.Story>
