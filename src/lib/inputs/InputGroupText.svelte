<script lang="ts">
	import { borderRadius, textInputAddon } from '$lib/theme';

	export let position: 'left' | 'middle' | 'right' = 'left';

	let rounding: string;
	$: rounding =
		$borderRadius +
		(position === 'left'
			? ` rounded-r-none border-r-0`
			: position === 'right'
			? ` rounded-l-none border-l-0`
			: 'rounded-none border-r-0');
</script>

<div class="{$textInputAddon} flex items-center {rounding}" {...$$restProps}>
	<slot />
</div>
