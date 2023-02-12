type Options = {
	open: boolean;
	duration: number;
};

export function slide(node: HTMLDivElement, options: Options) {
	const { open, duration } = options;
	const initialHeight = node.offsetHeight;
	node.style.height = open ? 'auto' : '0px';
	node.style.overflow = 'hidden';

	let animation: Animation;
	if (node.animate) {
		animation = node.animate([{ height: '0px' }, { height: `${initialHeight}px` }], {
			duration,
			fill: 'both',
			direction: open ? 'reverse' : 'normal'
		});
		animation.pause();

		animation.onfinish = ({ currentTime }) => {
			if (!currentTime) {
				animation.reverse();
				animation.pause();
			}

			node.dispatchEvent(new CustomEvent('animationEnd'));
		};
	}

	return {
		update: () => {
			animation.currentTime ? animation.reverse() : animation.play();
		}
	};
}
