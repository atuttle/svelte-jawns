<script lang="ts">
	import { hasContext, getContext } from 'svelte';
	import { textInput } from '$lib/theme';

	if (!hasContext('form-label-width')) {
		throw new Error('FormFieldDisplay must be used within a Form component');
	}
	const labelWidth: string = getContext('form-label-width');

	export let label: string = '';
	export let id: string = '';
	export let stack: boolean = false;
	export let value: string | number = '';
	export let labelClasses: string = `inline-block h-full pt-2 pr-4 text-right font-semibold ${labelWidth}`;
	export let wrapperClasses: string = `flex max-w-full items-start py-2 ${stack ? 'flex-col' : ''}`;
	let passThruClasses: string = `flex-1 border-neutral-500 bg-neutral-300 text-neutral-800 w-full ${$textInput}`;
	export { passThruClasses as class };
</script>

<div class={wrapperClasses}>
	<label for={id} class={labelClasses}>{label}</label>
	<div {id} class={passThruClasses}>
		<slot>{value}</slot>
	</div>
</div>
