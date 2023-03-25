<script lang="ts">
	import { hasContext, getContext } from 'svelte';

	export let label: string = '';
	export let id: string = '';
	export let stack: boolean = false;
	export let value: string | number = '';

	const labelWidth: string = hasContext('form-label-width')
		? getContext('form-label-width')
		: 'w-1/4';

	const labelClasses = `inline-block h-full pt-2 pr-4 text-right font-semibold ${labelWidth}`;
	const wrapperClasses = `flex max-w-full items-start py-2 ${stack ? 'flex-col' : ''}`;
</script>

<div class={wrapperClasses}>
	<label for={id} class={labelClasses}>{label}</label>
	<div class="flex-1">
		{value}
	</div>
</div>
