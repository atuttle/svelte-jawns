<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}
	function bgClick() {
		if (!allowClose) return;
		if (closeOnBackgroundClick) {
			close();
		}
	}
	function bgKeypress(event: KeyboardEvent) {
		if (!allowClose) return;
		if (event.key === 'Escape') {
			close();
		}
	}

	export let transitionDurationMS: number = 200;

	//set this to false to control closing the modal yourself (e.g. for confirmation dialogs)
	export let allowClose: boolean = true;
	export let closeOnBackgroundClick: boolean = true;
</script>

<div
	class="fixed inset-0 h-full w-full overflow-y-auto bg-gray-700 bg-opacity-90"
	transition:fade={{ duration: transitionDurationMS }}
	on:click={bgClick}
	on:keypress={bgKeypress}
>
	<slot>Modal content goes here</slot>
</div>

<!--
	Tailwind classes used in a component library don't get automatically applied in the consuming project, even
	if the consuming project is using Tailwind. So the class names are left on the tags for clarity and sanity,
	but the styles below are what's doing the actual work.
	👉🏻 https://github.com/svelte-add/svelte-add/issues/180
-->
<style>
	.fixed {
		position: fixed;
	}
	.inset-0 {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.bg-gray-700 {
		background-color: #374151;
	}
	.bg-opacity-90 {
		--bg-opacity: 0.9;
	}
	.overflow-y-auto {
		overflow-y: auto;
	}
	.h-full {
		height: 100%;
	}
	.w-full {
		width: 100%;
	}
</style>
