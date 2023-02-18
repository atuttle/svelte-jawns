<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	export let Hst: Hst;

	import Panel from '$lib/ui/Panel.svelte';
	import { blockPadding } from '$lib/theme';
</script>

<Hst.Story title="ui/Panel" layout={{ type: 'grid', width: 500 }}>
	<Hst.Variant title="Basic">
		<Panel>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laudantium quos
			voluptatibus in quam provident autem natus commodi vitae. Corrupti totam eligendi, fugiat
			tempora delectus doloribus quod magnam ut nam?
		</Panel>
	</Hst.Variant>
	<Hst.Variant title="Header">
		<Panel>
			<h3 class="text-xl font-bold" slot="header">Header</h3>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laudantium quos voluptatibus
			in quam provident autem natus commodi vitae. Corrupti totam eligendi, fugiat tempora delectus doloribus
			quod magnam ut nam?
		</Panel>
	</Hst.Variant>
	<Hst.Variant title="Footer">
		<Panel>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laudantium quos
			voluptatibus in quam provident autem natus commodi vitae. Corrupti totam eligendi, fugiat
			tempora delectus doloribus quod magnam ut nam?
			<div slot="footer" class="text-center">
				<a
					class="font-semibold antialiased text-purple-600 underline hover:no-underline"
					href="https://google.com">linky linky link</a
				>
			</div>
		</Panel>
	</Hst.Variant>
	<Hst.Variant title="Header and Footer">
		<Panel>
			<h3 class="text-xl font-bold" slot="header">Header</h3>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laudantium quos voluptatibus
			in quam provident autem natus commodi vitae. Corrupti totam eligendi, fugiat tempora delectus doloribus
			quod magnam ut nam?
			<div slot="footer" class="text-right">
				<a
					class="inline-block font-semibold antialiased bg-lime-600 text-lime-300 {$blockPadding} hover:rotate-2"
					href="#stuff">linky doo</a
				>
			</div>
		</Panel>
	</Hst.Variant>
</Hst.Story>
