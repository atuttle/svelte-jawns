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
		buttonColorsCTAOutline,
		buttonColorsDangerOutline,
		buttonColorsGrayOutline,
		buttonColorsTertiaryOutline,
		disabled
	} from '$lib/theme';

	const createMaps = <ObjectMapType extends Record<string, string>>(obj: ObjectMapType) => obj;
	const variantMap = createMaps({
		brand: 'border-iqBlue bg-iqBlue text-iqYellow hover:bg-iqBlueBright hover:border-iqBlueBright',
		cta: $buttonColorsCTA,
		tertiary: $buttonColorsTertiary,
		danger: $buttonColorsDanger,
		gray: $buttonColorsGray,
		subtle: $buttonColorsSubtle,
		disabled: $buttonColorsDisabled
	});

	// PROPS
	let passThruClasses: string = '';
	export let variant: keyof typeof variantMap = 'tertiary';
	export { passThruClasses as class };
	let isDisabled: boolean = false;
	export { isDisabled as disabled };

	const isButtonGroup: boolean = hasContext('buttonGroup') ? getContext('buttonGroup') : false;

	//if disabled, override to gray variant
	let disabledClass = '';
	let selectedVariant: keyof typeof variantMap;
	selectedVariant = isDisabled ? 'disabled' : variant;
	disabledClass = isDisabled || selectedVariant === 'disabled' ? $disabled : '';

	const groupStyle = isButtonGroup ? '' : `${$borderRadius}`;
	const themeClasses = `${groupStyle} ${$button} ${disabledClass}`;
	let variantClasses = variantMap[selectedVariant];

	export let outline: boolean = false;
	//if outline button is requested but variant is brand, subtle, or disabled, override to false
	if (selectedVariant === 'disabled') outline = false;
	if (selectedVariant === 'brand') outline = false;
	if (selectedVariant === 'subtle') outline = false;
	if (isDisabled) outline = false;

	if (outline) {
		const outlineVariantMap = createMaps({
			cta: $buttonColorsCTAOutline,
			tertiary: $buttonColorsTertiaryOutline,
			danger: $buttonColorsDangerOutline,
			gray: $buttonColorsGrayOutline
		});
		const selectedOutlineVariant = selectedVariant as keyof typeof outlineVariantMap;
		variantClasses = outlineVariantMap[selectedOutlineVariant];
	}

	let allClasses = `${themeClasses} ${variantClasses} ${passThruClasses} font-semibold antialiased transition uppercase`;
</script>

<button on:click disabled={isDisabled} class={allClasses}>
	<slot />
</button>
