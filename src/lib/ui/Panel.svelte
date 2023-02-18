<script lang="ts">
	import {
		typography,
		borderRadius,
		borderBottomRadius,
		blockPaddingComfy,
		panelBg,
		panelShadow,
		blockSpacing
	} from '$lib/theme';

	let classes = `${$blockSpacing} ${$typography} ${$borderRadius} ${$panelBg} ${$panelShadow}`;
</script>

<div class={classes}>
	{#if $$slots.header}
		<div class="px-4 pt-4">
			<slot name="header" />
		</div>
	{/if}
	<div class={$blockPaddingComfy}>
		<slot />
	</div>
	{#if $$slots.footer}
		<div class={`bg-zinc-200 border-0 ${$borderBottomRadius} ${$blockPaddingComfy}`}>
			<slot name="footer" />
		</div>
	{/if}
</div>
