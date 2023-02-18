<script lang="ts">
	import {
		typography,
		borderRadius,
		blockPadding,
		panelShadow,
		blockSpacing,
		alertColorsCTA,
		alertColorsTertiary,
		alertColorsDanger,
		alertColorsSubtle
	} from '$lib/theme';

	const createMaps = <ObjectMapType extends Record<string, string>>(obj: ObjectMapType) => obj;
	const variantMap = createMaps({
		brand: 'border-iqBlue bg-iqBlue text-iqYellow hover:bg-iqBlueBright hover:border-iqBlueBright',
		cta: $alertColorsCTA,
		tertiary: $alertColorsTertiary,
		danger: $alertColorsDanger,
		subtle: $alertColorsSubtle
	});

	export let variant: keyof typeof variantMap = 'tertiary';
	const variantClasses = variantMap[variant];

	let classes = `${$blockSpacing} ${$typography} border-0 border-l-8  ${$borderRadius} ${$blockPadding} ${variantClasses} ${$panelShadow}`;
</script>

<div class={classes}><slot /></div>
