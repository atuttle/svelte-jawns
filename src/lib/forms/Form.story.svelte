<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import Form from '$lib/forms/Form.svelte';
	import FormField from '$lib/forms/FormField.svelte';
	import TextInput from '$lib/inputs/TextInput.svelte';
</script>

<Hst.Story title="forms/Form">
	<Form labelWidth="w-28">
		<FormField
			label="First Name"
			labelFor="fname"
			input={TextInput}
			type="text"
			value="Ford"
			id="fname"
		/>
		<FormField
			label="Last Name"
			labelFor="lname"
			input={TextInput}
			type="text"
			value="Prefect"
			id="lname"
		/>
	</Form>

	todo: errors, help notes
</Hst.Story>
