<script lang="ts">
	import { hasContext, getContext } from 'svelte';
	import {
		borderRadius,
		button,
		buttonColorsCTA,
		buttonColorsDanger,
		buttonColorsDisabled,
		buttonColorsGray,
		buttonColorsSubtle,
		buttonColorsTertiary,
		disabled
	} from '$lib/theme';

	const createMaps = <ObjectMapType extends Record<string, string>>(obj: ObjectMapType) => obj;
	const variantMap = createMaps({
		brand: 'border-iqBlueBright bg-iqBlue text-iqYellow hover:bg-iqBlueBright',
		cta: $buttonColorsCTA,
		tertiary: $buttonColorsTertiary,
		danger: $buttonColorsDanger,
		gray: $buttonColorsGray,
		subtle: $buttonColorsSubtle,
		disabled: $buttonColorsDisabled
	});

	// PROPS
	let passThruClasses: string = '';
	export let variant: keyof typeof variantMap = 'gray';
	export { passThruClasses as class };
	let isDisabled: boolean = false;
	export { isDisabled as disabled };

	// passThruClasses = passThruClasses ?? '';

	const isButtonGroup: boolean = hasContext('buttonGroup') ? getContext('buttonGroup') : false;
	export let outline: boolean = false;
	//if outline button is requested but variant is brand or disabled, override to false
	outline =
		outline === false ? false : variant !== 'brand' && variant !== 'disabled' && !isDisabled;
	const outlineClass = !outline ? '' : `bg-transparent`;

	//if disabled, override to gray variant
	let disabledClass = '';
	let selectedVariant: keyof typeof variantMap;
	selectedVariant = isDisabled ? 'disabled' : variant;
	disabledClass = isDisabled || selectedVariant === 'disabled' ? $disabled : '';

	const groupStyle = isButtonGroup ? '' : `${$borderRadius}`;
	const themeClasses = `${groupStyle} ${$button} ${disabledClass} ${outlineClass}`;
	const variantClasses = variantMap[selectedVariant];
</script>

<button
	on:click
	disabled={isDisabled}
	class="{themeClasses} {variantClasses} {passThruClasses} font-semibold antialiased transition"
>
	<slot />
</button>
