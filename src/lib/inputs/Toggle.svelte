<script lang="ts">
	import {
		toggleBgBorderOff,
		toggleBgBorderOn,
		toggleBgOff,
		toggleBgOn,
		toggleSwitchOff,
		toggleSwitchOn
	} from '$lib/theme';

	export let checked: boolean = false;
	export let value: string = '1';
	export let size: number = 30;
	export let gutterBGColorOff: string = '';
	export let gutterBGColorOn: string = '';
	export let gutterBorderOff: string = '';
	export let gutterBorderOn: string = '';
	export let switchColorOff: string = '';
	export let switchColorOn: string = '';

	let style = `
		--themeGutterBorderOff: ${$toggleBgBorderOff};
		--themeGutterBorderOn: ${$toggleBgBorderOn};
		--themeGutterBgOff: ${$toggleBgOff};
		--themeGutterBgOn: ${$toggleBgOn};
		--themeSwitchOff: ${$toggleSwitchOff};
		--themeSwitchOn: ${$toggleSwitchOn};

		${gutterBGColorOff.length ? `--userGutterBgOff: ${gutterBGColorOff};` : ''}
		${gutterBGColorOn.length ? `--userGutterBgOn: ${gutterBGColorOn};` : ''}
		${gutterBorderOff.length ? `--userGutterBorderOff: ${gutterBorderOff};` : ''}
		${gutterBorderOn.length ? `--userGutterBorderOn: ${gutterBorderOn};` : ''}
		${switchColorOff.length ? `--userSwitchOff: ${switchColorOff};` : ''}
		${switchColorOn.length ? `--userSwitchOn: ${switchColorOn};` : ''}

		--gutterBorderOff: var(--userGutterBorderOff, var(--themeGutterBorderOff));
		--gutterBorderOn: var(--userGutterBorderOn, var(--themeGutterBorderOn));
		--gutterBgOff: var(--userGutterBgOff, var(--themeGutterBgOff));
		--gutterBgOn: var(--userGutterBgOn, var(--themeGutterBgOn));
		--switchOff: var(--userSwitchOff, var(--themeSwitchOff));
		--switchOn: var(--userSwitchOn, var(--themeSwitchOn));

		--height: ${size}px;
	`;
</script>

<label {style}>
	<input type="checkbox" bind:checked {...$$restProps} {value} />
	<div class="toggle" />
	<slot />
</label>

<style>
	label,
	.toggle,
	.toggle::after {
		box-sizing: border-box;
	}
	input {
		display: none;
	}
	label {
		--height: 20px;
		--width: calc(var(--height) / 2);
		--gutterRadius: calc(var(--width) / 2);
		display: flex;
		align-items: center;
	}
	.toggle {
		position: relative;
		width: calc(var(--width) - 2px);
		height: var(--height);
		border-radius: var(--gutterRadius);
		border: var(--gutterBorderOff);
		background-color: var(--gutterBgOff);
		transition: all 0.2s ease;
		margin-right: 10px;
	}
	.toggle::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: -3px;
		width: calc(var(--width) + 2px);
		height: calc(var(--width) + 2px);
		border-radius: var(--gutterRadius);
		background-color: var(--switchOff);
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
		transition: transform 0.2s ease;
	}
	input:checked + .toggle {
		background-color: var(--gutterBgOn);
		border: var(--gutterBorderOn);
	}
	input:checked + .toggle::after {
		background-color: var(--switchOn);
		transform: translate3d(0, -100%, 0);
	}
</style>
