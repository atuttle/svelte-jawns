<script lang="ts">
	import Radio from '$lib/inputs/Radio.svelte';
	import { Heading } from '$lib/typography';

	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;

	let food: string = 'pizza bagels';
</script>

<Hst.Story title="inputs/Radio" layout={{ type: 'grid', width: 350 }}>
	<Hst.Variant title="default">
		<div class="p-4">
			<Radio bind:group={food} value="pizza">Pizza</Radio>
			<Radio bind:group={food} value="bagels">Bagels</Radio>
			<Radio bind:group={food} value="pizza bagels">Pizza bagels</Radio>
		</div>
	</Hst.Variant>
	<Hst.Variant title="large">
		<div class="p-4">
			<Radio size={40} bind:group={food} value="pizza">Pizza</Radio>
			<Radio size={40} bind:group={food} value="bagels">Bagels</Radio>
			<Radio size={40} bind:group={food} value="pizza bagels">Pizza bagels</Radio>
		</div>
	</Hst.Variant>
	<Hst.Variant title="XL">
		<div class="p-4">
			<Radio size={80} bind:group={food} value="pizza"><Heading level={3}>Pizza</Heading></Radio>
			<Radio size={80} bind:group={food} value="bagels"><Heading level={3}>Bagels</Heading></Radio>
			<Radio size={80} bind:group={food} value="pizza bagels"
				><Heading level={3}>Pizza bagels</Heading></Radio
			>
		</div>
	</Hst.Variant>
</Hst.Story>
