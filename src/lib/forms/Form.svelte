<script lang="ts">
	import type { ZodSchema } from 'zod';
	import { z } from 'zod';
	import { noCC } from '$lib/forms/block-credit-cards';

	import type { HTMLFormAttributes } from 'svelte/elements';
	interface $$restProps extends HTMLFormAttributes {}

	import { setContext } from 'svelte';
	export let labelWidth: string = 'w-1/4';
	setContext('form-label-width', labelWidth);

	export let zodSchema: ZodSchema;

	function validateForm(data: any) {
		const validationResult = zodSchema.safeParse(data);
		if (!validationResult.success) {
			console.log(validationResult.error);
			return false;
		}
		return true;
	}
</script>

<form {...$$restProps}>
	<slot />
</form>
