<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import FormField from './FormField.svelte';
	import TextInput from './TextInput.svelte';
</script>

<Hst.Story title="forms/FormField">
	<FormField label="First Name" labelFor="fname">
		<TextInput type="text" value="Ford" id="fname" />
	</FormField>

	todo: errors, help notes
</Hst.Story>
