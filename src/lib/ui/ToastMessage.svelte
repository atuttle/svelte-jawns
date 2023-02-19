<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	import type { ToastMessage } from '$lib/ui/Toast.js';
	import {
		blockPaddingComfy,
		alertColorsCTA,
		alertColorsTertiary,
		alertColorsDanger,
		borderRadius
	} from '$lib/theme';
	import toast from '$lib/ui/Toast.js';

	export let message: ToastMessage;

	function remove() {
		toast.remove(message.id);
	}

	let progress = tweened(100, { duration: message.duration });
	async function updateProgress() {
		await progress.set(0);
		toast.remove(message.id);
	}

	const colorClassMap = {
		success: $alertColorsCTA,
		error: $alertColorsDanger,
		warning: $alertColorsTertiary
	};
	const colorClasses = colorClassMap[message.type];

	if (message.duration > 0) {
		onMount(() => {
			updateProgress();
		});
	}
</script>

<div
	class="border-0 relative cursor-pointer max-w-full w-80 {$borderRadius} {colorClasses}"
	on:click={remove}
	on:keyup={remove}
>
	{#if message.duration > 0}
		<div class="absolute t-0 l-0 bg-white opacity-50 h-2" style={`width: ${$progress}%`} />
	{/if}
	<div class={$blockPaddingComfy}>{message.message}</div>
</div>
