<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import InputGroup from '$lib/inputs/InputGroup.svelte';
	import InputGroupText from '$lib/inputs/InputGroupText.svelte';
	import TextInput from '$lib/inputs/TextInput.svelte';
</script>

<Hst.Story title="inputs/InputGroup" layout={{ type: 'grid', width: '500px' }}>
	<Hst.Variant title="Left">
		<InputGroup mode="left">
			<InputGroupText slot="left" position="left">@</InputGroupText>
			<TextInput type="email" slot="right" />
		</InputGroup>
	</Hst.Variant>
	<Hst.Variant title="Right">
		<InputGroup mode="right">
			<InputGroupText slot="right" position="right">🤷🏻‍♂️</InputGroupText>
			<TextInput type="email" slot="left" />
		</InputGroup>
	</Hst.Variant>
	<Hst.Variant title="Both">
		<InputGroup mode="both">
			<InputGroupText slot="left" position="left">before-</InputGroupText>
			<TextInput type="text" slot="middle" />
			<InputGroupText slot="right" position="right">-after</InputGroupText>
		</InputGroup>
	</Hst.Variant>
</Hst.Story>
