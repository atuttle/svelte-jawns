<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import NumberInput from '$lib/inputs/NumberInput.svelte';
</script>

<Hst.Story title="inputs/NumberInput" layout={{ type: 'grid', width: '300px' }}>
	<NumberInput type="text" value={42} />
</Hst.Story>
