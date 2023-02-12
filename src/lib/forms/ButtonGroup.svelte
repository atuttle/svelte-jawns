<script lang="ts">
	import { setContext } from 'svelte';
	import { borderRadius } from '$lib/theme';

	setContext('buttonGroup', true);

	export let stack: boolean = false;
</script>

<div class={`inline-flex ${stack ? 'flex-col' : ''} overflow-hidden ${$borderRadius}`}>
	<slot />
</div>
