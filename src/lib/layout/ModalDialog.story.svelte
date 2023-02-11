<script lang="ts">
	import ModalDialog from './ModalDialog.svelte';
	import Button from '$lib/forms/Button.svelte';

	import type { Hst } from '@histoire/plugin-svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="layout/ModalDialog">
	<ModalDialog title="Confirm New Password">
		<div slot="body">
			<p>New password: <strong>lol</strong></p>
		</div>
		<div slot="footer">
			<Button variant="tertiary">🐐</Button>
			<Button variant="submit">🎏</Button>
		</div>
	</ModalDialog>
</Hst.Story>
