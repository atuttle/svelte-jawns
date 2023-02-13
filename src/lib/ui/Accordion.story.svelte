<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Accordion from '$lib/ui/Accordion.svelte';
	import { Heading } from '$lib/typography/index';

	export let Hst: Hst;
</script>

<Hst.Story title="ui/Accordion">
	<div class="p-4">
		<Accordion open={false}>
			<div slot="header">
				<Heading level={4}>Some captivating section heading</Heading>
			</div>
			<div slot="body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam nesciunt hic minima
					explicabo adipisci ab architecto ratione molestiae, doloremque, suscipit dolore corporis
					excepturi dignissimos inventore aut quis repudiandae odio.
				</p>
			</div>
		</Accordion>
		<Accordion open={false}>
			<div slot="header">
				<Heading level={4}>Some captivating section heading</Heading>
			</div>
			<div slot="body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam nesciunt hic minima
					explicabo adipisci ab architecto ratione molestiae, doloremque, suscipit dolore corporis
					excepturi dignissimos inventore aut quis repudiandae odio.
				</p>
			</div>
		</Accordion>
	</div>
</Hst.Story>
