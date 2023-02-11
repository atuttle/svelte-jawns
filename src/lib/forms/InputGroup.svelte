<script lang="ts">
	import { setContext } from 'svelte';

	export let mode: 'left' | 'right' | 'both' = 'left';

	setContext('inputGroup', true);
	setContext('inputGroupMode', mode);
</script>

<div class="flex">
	<slot name="left" />
	<slot name="middle" />
	<slot name="right" />
</div>
