<!-- this is intended to be a Tailwind container. Not sure yet how to enforce Tailwind inclusion... -->
<script lang="ts">
	let classPassthru = '';
	export { classPassthru as class };
</script>

<div class="container mx-auto {classPassthru}"><slot /></div>

<!--
	Tailwind classes used in a component library don't get automatically applied in the consuming project, even
	if the consuming project is using Tailwind. So the class names are left on the tags for clarity and sanity,
	but the styles below are what's doing the actual work.
	👉🏻 https://github.com/svelte-add/svelte-add/issues/180
-->
<style>
	.container {
		width: 100%;
	}
	.mx-auto {
		margin-left: auto;
		margin-right: auto;
	}
</style>
