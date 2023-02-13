<script lang="ts">
	import Alert from '$lib/ui/Alert.svelte';
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
</script>

<Hst.Story title="ui/Alert">
	<Alert variant="cta">
		<p>cta</p>
	</Alert>
	<Alert variant="tertiary">
		<p>tertiary</p>
	</Alert>
	<Alert variant="danger">
		<p>danger</p>
	</Alert>
	<Alert variant="subtle">
		<p>subtle</p>
	</Alert>
</Hst.Story>
