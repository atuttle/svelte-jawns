<script lang="ts">
	type Direction =
		| 'to-top'
		| 'to-top-right'
		| 'to-right'
		| 'to-bottom-right'
		| 'to-bottom'
		| 'to-bottom-left'
		| 'to-left'
		| 'to-top-left';

	export let mode: 'two-color' | 'three-color' = 'two-color';
	export let direction: Direction = 'to-right';
	export let fromColor: string = '';
	export let viaColor: string = '';
	export let toColor: string = '';

	if (fromColor.length && fromColor.substring(0, 5) !== 'from-') {
		throw new Error(`fromColor must start with "from-" (got: "${fromColor.substring(0, 5)}")`);
	}
	if (toColor.length && toColor.substring(0, 3) !== 'to-') {
		throw new Error(`toColor must start with "to-" (got: "${toColor.substring(0, 3)}")`);
	}
	if (viaColor.length && viaColor.substring(0, 4) !== 'via-') {
		throw new Error(`viaColor must start with "via-" (got: "${viaColor.substring(0, 4)}")`);
	}

	const directionalClasses = {
		'to-top': 'bg-gradient-to-t',
		'to-top-right': 'bg-gradient-to-tr',
		'to-right': 'bg-gradient-to-r',
		'to-bottom-right': 'bg-gradient-to-br',
		'to-bottom': 'bg-gradient-to-b',
		'to-bottom-left': 'bg-gradient-to-bl',
		'to-left': 'bg-gradient-to-l',
		'to-top-left': 'bg-gradient-to-tl'
	};

	const classes =
		`${directionalClasses[direction]} ${fromColor}` +
		(mode === 'two-color' ? '' : ` ${viaColor}`) +
		` ${toColor} bg-clip-text text-transparent`;
</script>

<span class={classes}><slot /></span>
