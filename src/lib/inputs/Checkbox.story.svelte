<script lang="ts">
	import Checkbox from '$lib/inputs/Checkbox.svelte';
	import { Heading } from '$lib/typography';

	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;

	let food: string = 'pizza bagels';
</script>

<Hst.Story title="inputs/Checkbox" layout={{ type: 'grid', width: 350 }}>
	<Hst.Variant title="default">
		<div class="p-4">
			<Checkbox checked={false} value="pizza">Pizza</Checkbox>
			<Checkbox checked={true} value="bagels">Bagels</Checkbox>
			<Checkbox checked={false} value="pizza bagels">Pizza bagels</Checkbox>
		</div>
	</Hst.Variant>
	<Hst.Variant title="large">
		<div class="p-4">
			<Checkbox checked={true} size={30} value="pizza">Pizza</Checkbox>
			<Checkbox checked={false} size={30} value="bagels">Bagels</Checkbox>
			<Checkbox checked={false} size={30} value="pizza bagels">Pizza bagels</Checkbox>
		</div>
	</Hst.Variant>
	<Hst.Variant title="XL">
		<div class="p-4">
			<Checkbox checked={false} size={50} value="pizza">Pizza</Checkbox>
			<Checkbox checked={false} size={50} value="bagels">Bagels</Checkbox>
			<Checkbox checked={true} size={50} value="pizza bagels">Pizza bagels</Checkbox>
		</div>
	</Hst.Variant>
</Hst.Story>
