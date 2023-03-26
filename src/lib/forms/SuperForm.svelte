<script lang="ts">
	import type { HTMLFormAttributes } from 'svelte/elements';
	interface $$restProps extends HTMLFormAttributes {}
	import type { SuperformForm, SuperformErrors, SuperformConstraints } from '$lib/types';

	import { setContext } from 'svelte';
	export let labelWidth: string = 'w-1/4';
	setContext('form-label-width', labelWidth);

	export let form: SuperformForm;
	export let errors: SuperformErrors;
	export let constraints: SuperformConstraints;
	setContext('superform', { form, errors, constraints });
</script>

<form {...$$restProps}>
	<slot />
</form>
