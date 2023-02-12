<script lang="ts">
	import {
		typography,
		borderRadius,
		breathingRoom,
		panelBg,
		panelShadow,
		blockSpacing
	} from '$lib/theme';

	let classes = `${$blockSpacing} ${$typography} ${$borderRadius} ${$breathingRoom} ${$panelBg} ${$panelShadow}`;
</script>

<div class={classes}><slot /></div>
