<script context="module" lang="ts">
	export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
</script>

<script lang="ts">
	export let level: HeadingLevel = 1;
</script>

<svelte:element this={`h${level}`}>
	<slot />
</svelte:element>
