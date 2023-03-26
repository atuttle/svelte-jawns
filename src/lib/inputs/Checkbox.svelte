<script lang="ts">
	import { borderRadius, toggleBgOff, toggleSwitchOff, toggleSwitchOn } from '$lib/theme';

	export let name: string;
	export let value: string;
	export let checked: boolean;
	export let size: number = 24;

	let scaleFactor = size / 24;

	const defaultStyles = `
		--scaleFactor: ${scaleFactor};
		--width: ${size}px;
		--border: 1px solid #333;
		--bg: ${$toggleBgOff};
		--bgHover: ${$toggleSwitchOff};
		--checkedBg: ${$toggleSwitchOn};
	`;
</script>

<label style={defaultStyles}>
	<input type="checkbox" bind:checked {name} {value} {...$$restProps} />
	<span class={$borderRadius} />
	<div class="label"><slot /></div>
</label>

<style>
	label {
		display: flex;
		align-items: center;
		gap: 10px;
		position: relative;
		margin-bottom: 0.3rem;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	span {
		position: relative;
		height: var(--width);
		width: var(--width);
		background-color: var(--bg);
	}

	/* On mouse-over, add a grey background color */
	label:hover input ~ span {
		background-color: var(--bgHover);
	}

	/* When the checkbox is checked, add a blue background */
	label input:checked ~ span {
		background-color: var(--checkedBg);
	}

	/* When the checkbox is checked, add a blue background */
	label input:checked ~ span:hover {
		background-color: var(--bgHover);
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	span:after {
		content: '';
		position: absolute;
		display: none;
	}

	/* Show the checkmark when checked */
	label input:checked ~ span:after {
		display: block;
	}

	/* Style the checkmark/indicator */
	label span:after {
		left: 50%;
		top: 45%;
		width: calc(var(--width) / 5 * 2);
		height: calc(var(--width) / 4 * 3);
		border: solid white;
		border-width: 0 calc(5px * var(--scaleFactor)) calc(5px * var(--scaleFactor)) 0;
		-webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(0.7);
		-ms-transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(0.7);
		transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(0.7);
	}
</style>
