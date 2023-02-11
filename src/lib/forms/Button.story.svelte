<script lang="ts">
	import Button from './Button.svelte';

	import type { Hst } from '@histoire/plugin-svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="forms/Button" layout={{ type: 'grid' }}>
	<Hst.Variant title="default">
		<Button>click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Brand">
		<Button variant="brand">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Call To Action (CTA)">
		<Button variant="cta">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Danger">
		<Button variant="danger">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Tertiary">
		<Button variant="tertiary">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Subtle">
		<Button variant="subtle">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Gray">
		<Button variant="gray">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Disabled">
		<Button variant="disabled">click me</Button>
	</Hst.Variant>
</Hst.Story>
