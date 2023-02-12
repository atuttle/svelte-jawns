<script lang="ts">
	let classProp = '';
	export { classProp as class };
	export let block: boolean = false;
</script>

<code
	class={`bg-pink-100 py-0 px-1 text-red-800 ${
		block ? 'block overflow-x-scroll whitespace-pre' : 'inline'
	} ${classProp}`}><slot /></code
>
