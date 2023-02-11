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

<div class="py-2 flex max-w-full items-start {stack ? 'flex-col' : ''}">
	<label for={labelFor} class="pt-2 pr-4 h-full font-semibold inline-block text-right {labelWidth}"
		>{label}</label
	>
	<div class="flex-1">
		<slot>
			Empty <Code>field</Code> slot
		</slot>
	</div>
</div>
