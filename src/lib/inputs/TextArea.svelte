<script lang="ts">
	import { borderRadius, textInput } from '$lib/theme';

	export let value: string;
	export let rows: number = 4;

	let passThruClasses: string = '';
	export { passThruClasses as class };
	let classes = `${$borderRadius} ${$textInput} ${passThruClasses}`;
</script>

<textarea bind:value class={classes} {rows} {...$$restProps} />
