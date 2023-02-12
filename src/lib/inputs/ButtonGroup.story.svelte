<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import ButtonGroup from '$lib/inputs/ButtonGroup.svelte';
	import Button from '$lib/inputs/Button.svelte';
	export let Hst: Hst;
</script>

<Hst.Story title="inputs/ButtonGroup" layout={{ type: 'grid', width: 400 }}>
	<Hst.Variant title="Horizontal">
		<ButtonGroup>
			<Button variant="cta">Foo</Button>
			<Button variant="tertiary">Bar</Button>
			<Button variant="brand">Baz</Button>
		</ButtonGroup>
	</Hst.Variant>
	<Hst.Variant title="Subtle buttons">
		<ButtonGroup>
			<Button variant="subtle">Foo</Button>
			<Button variant="subtle">Bar</Button>
			<Button variant="subtle">Baz</Button>
		</ButtonGroup>
	</Hst.Variant>
	<Hst.Variant title="Vertical">
		<ButtonGroup stack={true}>
			<Button variant="cta">Foo</Button>
			<Button variant="tertiary">Bar</Button>
			<Button variant="brand">Baz</Button>
		</ButtonGroup>
	</Hst.Variant>
</Hst.Story>
