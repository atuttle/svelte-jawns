<script lang="ts">
	import { Code } from '$lib/typography/index';
	import { hasContext, getContext } from 'svelte';
	export let stack: boolean = false;

	export let label: string = '';
	export let labelFor: string = '';

	const labelWidth: string = hasContext('form-label-width')
		? getContext('form-label-width')
		: 'w-1/4';
</script>

<div class="flex max-w-full items-start py-2 {stack ? 'flex-col' : ''}">
	<label for={labelFor} class="inline-block h-full pt-2 pr-4 text-right font-semibold {labelWidth}"
		>{label}</label
	>
	<div class="flex-1">
		<slot>
			Empty <Code>field</Code> slot
		</slot>
	</div>
</div>
