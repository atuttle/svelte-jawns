<script lang="ts">
	import Button from '$lib/inputs/Button.svelte';
	import LinkButton from '$lib/inputs/LinkButton.svelte';

	import type { Hst } from '@histoire/plugin-svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="inputs/Button" layout={{ type: 'grid', width: 300 }}>
	<Hst.Variant title="Brand">
		<Button variant="brand">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="CTA">
		<Button variant="cta">click me</Button>
		<Button variant="cta" outline={true}>click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Danger">
		<Button variant="danger">click me</Button>
		<Button variant="danger" outline={true}>click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Tertiary">
		<Button variant="tertiary">click me</Button>
		<Button variant="tertiary" outline={true}>click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Gray">
		<Button variant="gray">click me</Button>
		<Button variant="gray" outline={true}>click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Subtle">
		<Button variant="subtle">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Disabled">
		<Button variant="disabled">click me</Button>
	</Hst.Variant>
	<Hst.Variant title="Link Button">
		<LinkButton variant="cta">click me</LinkButton>
		<LinkButton variant="cta" outline={true}>click me</LinkButton>
		<LinkButton variant="cta" outline={true} disabled={true}>click me</LinkButton>
		<LinkButton variant="cta" disabled={true}>click me</LinkButton>
	</Hst.Variant>
	<Hst.Variant title="Font sizes">
		<br /><Button variant="tertiary" class="mb-1.5 text-xs">text-xs</Button>
		<br /><Button variant="tertiary" class="mb-1.5 text-sm">text-sm</Button>
		<br /><Button variant="tertiary" class="mb-1.5 text-md">text-md</Button>
		<br /><Button variant="tertiary" class="mb-1.5 text-lg">text-lg</Button>
		<br /><Button variant="tertiary" class="mb-1.5 text-xl">text-xl</Button>
		<br /><Button variant="tertiary" class="mb-1.5 text-2xl">text-2xl</Button>
		<br /><Button variant="tertiary" class="mb-1.5 text-3xl">text-3xl</Button>
	</Hst.Variant>
</Hst.Story>
