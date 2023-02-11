<script lang="ts">
	import Portal from './Portal.svelte';

	import type { Hst } from '@histoire/plugin-svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="DOM/Portal">
	<Hst.Variant title="default">
		<Portal>
			<p style="position: absolute; top: 0; left: 0;">
				Inspect this element and note that the portal div is a child of the <code>&lt;body&gt;</code
				> tag, not of the svelte app div.
			</p>
		</Portal>
	</Hst.Variant>
</Hst.Story>
