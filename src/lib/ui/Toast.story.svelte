<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;

	import Button from '$lib/inputs/Button.svelte';
	import Toaster from '$lib/ui/Toaster.svelte';
	import toast from '$lib/ui/Toast';
</script>

<Hst.Story title="ui/Toast">
	<Toaster />

	<Button on:click={() => toast.success('Yo!')}>success</Button>
	<br /><Button
		on:click={() => toast.warn("If I've told you once, I've told you a thousand times...", 5000)}
		>warning</Button
	>
	<br /><Button on:click={() => toast.error("Now you've done it...", 10000)}>error</Button>
	<br /><Button on:click={() => toast.success('Click to dismiss', 0)}>click to dismiss</Button>
</Hst.Story>
