<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import Select from '$lib/inputs/Select.svelte';
</script>

<Hst.Story title="inputs/Select" layout={{ type: 'grid', width: '300px' }}>
	<Select value="rubber baby buggy bumpers">
		<option value="bumpers">Bumpers</option>
		<option value="rubber baby buggy bumpers">Rubber baby buggy bumpers</option>
		<option value="baby buggy">Baby Buggy</option>
		<option value="rubber baby">Rubber Baby</option>
	</Select>
</Hst.Story>
