<script>
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import Portal from '$lib/DOM/Portal.svelte';
	import toast from '$lib/ui/Toast';
	import ToastMessage from '$lib/ui/ToastMessage.svelte';
</script>

<Portal>
	<div class="fixed top-0 right-0 sm:right-10 sm:top-10">
		{#each $toast as message (message)}
			<div
				on:click={() => toast.remove(message.id)}
				on:keyup={() => toast.remove(message.id)}
				in:fly={{ opacity: 0, x: 100 }}
				out:fade
				animate:flip
				class="mb-4 p-0"
			>
				<ToastMessage {message} />
			</div>
		{/each}
	</div>
</Portal>
