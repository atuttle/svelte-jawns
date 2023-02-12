<script lang="ts">
	import { toggleBgOff, toggleSwitchOn } from '$lib/theme';

	export let group: string;
	export let value: string;
	export let size: number = 24;

	const defaultStyles = `
		--width: ${size}px;
		--border: 1px solid #333;
		--radius: var(--width, 50%);
		--bg: ${$toggleBgOff};
		--fg: ${$toggleSwitchOn};
	`;
</script>

<label style={defaultStyles}>
	<input type="radio" bind:group {value} {...$$restProps} />
	<div class="radio" />
	<div class="label">
		<slot />
	</div>
</label>

<style>
	label {
		position: relative;
		display: flex;
		margin-bottom: 5px;
		align-items: center;
		cursor: pointer;
	}
	.label {
		flex-grow: 1;
	}

	input {
		display: none;
	}

	.radio {
		width: var(--width);
		height: var(--width);
		border-radius: var(--radius);
		border: 1px solid var(--color-gray-300);
		background-color: var(--bg);
		margin-right: 10px;
		flex-shrink: 0;
	}

	.radio::after {
		display: none;
		content: '';
		width: calc(var(--width) - calc(var(--width) / 3));
		height: calc(var(--width) - calc(var(--width) / 3));
		border-radius: var(--radius);
		background-color: var(--fg);
		position: absolute;
		top: calc(calc(var(--width) / 3) / 2);
		left: calc(calc(var(--width) / 3) / 2);
	}
	input:checked + .radio::after {
		display: block;
	}
</style>
