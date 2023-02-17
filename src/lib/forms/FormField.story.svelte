<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import FormField from '$lib/forms/FormField.svelte';
	import TextInput from '$lib/inputs/TextInput.svelte';
</script>

<Hst.Story title="forms/FormField">
	<FormField input={TextInput} type="text" label="First Name" id="fname" value="Ford" />
	<FormField input="input" type="color" label="Favorite Color" id="faveColor" value="#62f524" />

	todo: errors, help notes
</Hst.Story>
