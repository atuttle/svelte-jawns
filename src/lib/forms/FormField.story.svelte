<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import FormField from '$lib/forms/FormField.svelte';
	import TextInput from '$lib/inputs/TextInput.svelte';
	import Form from './Form.svelte';
</script>

<Hst.Story title="forms/FormField">
	<Form>
		<FormField input={TextInput} type="text" label="First Name" id="fname" value="Ford" />
		<FormField input="input" type="color" label="Favorite Color" id="faveColor" value="#62f524" />
	</Form>

	todo: errors, help notes
</Hst.Story>
