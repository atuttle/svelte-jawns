<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import TextInput from './TextInput.svelte';
</script>

<Hst.Story title="forms/TextInput" layout={{ type: 'grid', width: '300px' }}>
	<Hst.Variant title="Text">
		<TextInput type="text" value="" />
	</Hst.Variant>
	<Hst.Variant title="Email">
		<TextInput type="email" />
	</Hst.Variant>
	<Hst.Variant title="Password">
		<TextInput type="password" value="lol made you look" />
	</Hst.Variant>
	<Hst.Variant title="Tel">
		<TextInput type="tel" value="555-123-4567" />
	</Hst.Variant>
	<Hst.Variant title="Date">
		<TextInput type="date" />
	</Hst.Variant>
	<Hst.Variant title="Number">
		<TextInput type="number" value="42" />
	</Hst.Variant>
	<Hst.Variant title="Search">
		<TextInput type="search" value="real housewives of Kronos" />
	</Hst.Variant>
	<Hst.Variant title="Time">
		<TextInput type="time" />
	</Hst.Variant>
	<Hst.Variant title="URL">
		<TextInput type="url" />
	</Hst.Variant>
</Hst.Story>
