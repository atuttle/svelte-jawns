<script lang="ts">
	import Toggle from '$lib/inputs/Toggle.svelte';
	import Heading from '$lib/typography/Heading.svelte';

	import type { Hst } from '@histoire/plugin-svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="inputs/Toggle" layout={{ type: 'grid', width: 250 }}>
	<Hst.Variant title="default">
		<p style="padding: 10px">
			<Toggle><strong>Beta User</strong></Toggle>
		</p>
	</Hst.Variant>
	<Hst.Variant title="Small">
		<p style="padding: 10px">
			<Toggle size={20}><strong>Beta User</strong></Toggle>
		</p>
	</Hst.Variant>
	<Hst.Variant title="woah-nelly">
		<p style="padding: 10px">
			<Toggle size={60}><Heading level={3}>Beta User</Heading></Toggle>
		</p>
	</Hst.Variant>
	<Hst.Variant title="Custom colors">
		<p style="padding: 10px">
			<Toggle size={30} switchColorOn="#b91c1c" gutterBGColorOn="#fecaca">
				<strong>Bad Thing</strong>
			</Toggle>
		</p>
	</Hst.Variant>
</Hst.Story>
