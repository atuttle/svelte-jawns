<script lang="ts">
	function portal(node: HTMLElement) {
		const targetSelector = 'body';
		let target;

		update(); //run once on init

		function update() {
			target = document.querySelector(targetSelector);
			if (!target) return;
			target.appendChild(node);
			node.hidden = false;
		}

		function destroy() {
			if (node.parentNode) {
				node.parentNode.removeChild(node);
			}
		}

		return { update, destroy };
	}
</script>

<div use:portal hidden>
	<slot />
</div>
