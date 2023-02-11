<script lang="ts">
	import type { HTMLFormAttributes } from 'svelte/elements';
	interface $$restProps extends HTMLFormAttributes {}

	import { setContext } from 'svelte';
	export let labelWidth: string = 'w-1/4';

	setContext('form-label-width', labelWidth);
</script>

<form {...$$restProps}>
	<slot />
</form>
