<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import ButtonGroup from '$lib/forms/ButtonGroup.svelte';
	import Button from '$lib/forms/Button.svelte';
</script>

<Hst.Story title="forms/ButtonGroup" layout={{ type: 'grid', width: 400 }}>
	<Hst.Variant title="Horizontal">
		<ButtonGroup>
			<Button variant="cta">Foo</Button>
			<Button variant="tertiary">Bar</Button>
			<Button variant="brand">Baz</Button>
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
