<script lang="ts">
	import Heading from './Heading.svelte';
	import GradientText from './GradientText.svelte';

	import type { Hst } from '@histoire/plugin-svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="typography/GradientText" layout={{ type: 'grid', width: 600 }}>
	<Hst.Variant title="two-color">
		<Heading level={1}>
			<GradientText direction="to-right" fromColor="from-cyan-300" toColor="to-purple-600">
				Sample Text
			</GradientText>
		</Heading>
	</Hst.Variant>
	<Hst.Variant title="three-color">
		<Heading level={1}>
			<GradientText
				mode="three-color"
				direction="to-right"
				fromColor="from-cyan-300"
				viaColor="via-purple-600"
				toColor="to-red-800"
			>
				Sample Text
			</GradientText>
		</Heading>
	</Hst.Variant>
</Hst.Story>
