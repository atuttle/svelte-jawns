<script lang="ts">
	let classProp = '';
	export { classProp as class };
	export let block: boolean = false;
</script>

<code
	class={`bg-pink-100 text-red-800 py-0 px-1 ${
		block ? 'block overflow-x-scroll whitespace-pre' : 'inline'
	} ${classProp}`}><slot /></code
>
