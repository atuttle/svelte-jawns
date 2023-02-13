<script lang="ts">
	import {
		typography,
		borderRadius,
		blockPadding,
		panelBg,
		panelShadow,
		blockSpacing
	} from '$lib/theme';

	let classes = `${$blockSpacing} ${$typography} ${$borderRadius} ${$blockPadding} ${$panelBg} ${$panelShadow}`;
</script>

<div class={classes}><slot /></div>
