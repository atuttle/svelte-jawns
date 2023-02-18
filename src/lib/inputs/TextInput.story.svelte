<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import TextInput from '$lib/inputs/TextInput.svelte';

	let searchTerm: string = 'Real Housewives of Kronos';
	let searchLoading: boolean = false;
	function handleSearch() {
		searchLoading = true;
		setTimeout(() => {
			searchLoading = false;
		}, 5000);
	}
</script>

<Hst.Story title="inputs/TextInput" layout={{ type: 'grid', width: '300px' }}>
	<Hst.Variant title="Text">
		<TextInput type="text" value="" />
	</Hst.Variant>
	<Hst.Variant title="Tel">
		<TextInput type="tel" value="555-123-4567" />
	</Hst.Variant>
	<Hst.Variant title="URL">
		<TextInput type="url" />
	</Hst.Variant>
	<Hst.Variant title="Email">
		<TextInput type="email" />
	</Hst.Variant>
	<Hst.Variant title="Password">
		<TextInput type="password" value="lol made you look" />
	</Hst.Variant>
	<Hst.Variant title="Search">
		<TextInput
			type="search"
			bind:value={searchTerm}
			debounce={500}
			on:change={handleSearch}
			bind:loading={searchLoading}
		/>
		<strong>debounced:</strong>
		{searchTerm}
		<br />
		<strong>loading:</strong>
		{String(searchLoading)}
	</Hst.Variant>
	<Hst.Variant title="Date">
		<TextInput type="date" />
	</Hst.Variant>
	<Hst.Variant title="Time">
		<TextInput type="time" />
	</Hst.Variant>
</Hst.Story>
