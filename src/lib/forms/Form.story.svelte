<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import Form from './Form.svelte';
	import FormField from './FormField.svelte';
	import TextInput from './TextInput.svelte';
</script>

<Hst.Story title="forms/Form">
	<Form labelWidth="w-28">
		<FormField label="First Name" labelFor="fname">
			<TextInput type="text" value="Ford" id="fname" />
		</FormField>
		<FormField label="Last Name" labelFor="lname">
			<TextInput type="text" value="Prefect" id="lname" />
		</FormField>
	</Form>

	todo: errors, help notes
</Hst.Story>
