<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;
	import TextArea from '$lib/inputs/TextArea.svelte';

	let value: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at vitae praesentium est ratione magnam consequatur, enim, voluptatem sed animi doloremque molestias natus aspernatur nihil et officiis perferendis ipsa aliquid.';
</script>

<Hst.Story title="inputs/TextArea" layout={{ type: 'grid', width: 500 }}>
	<TextArea bind:value />
</Hst.Story>
