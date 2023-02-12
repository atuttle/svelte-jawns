<script lang="ts">
	import Heading from './Heading.svelte';

	import type { Hst } from '@histoire/plugin-svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="typography/Heading" layout={{ type: 'grid', width: 350 }}>
	<Hst.Variant title="H1">
		<Heading level={1}>Heading 1</Heading>
	</Hst.Variant>
	<Hst.Variant title="H2">
		<Heading level={2}>Heading 2</Heading>
	</Hst.Variant>
	<Hst.Variant title="H3">
		<Heading level={3}>Heading 3</Heading>
	</Hst.Variant>
	<Hst.Variant title="H4">
		<Heading level={4}>Heading 4</Heading>
	</Hst.Variant>
	<Hst.Variant title="H5">
		<Heading level={5}>Heading 5</Heading>
	</Hst.Variant>
	<Hst.Variant title="H6">
		<Heading level={6}>Heading 6</Heading>
	</Hst.Variant>
</Hst.Story>
