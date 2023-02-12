<script lang="ts">
	import ModalDialog from './ModalDialog.svelte';
	import Button from '$lib/forms/Button.svelte';

	import type { Hst } from '@histoire/plugin-svelte';

	let modalOpen: boolean = false;

	function handleClose() {
		modalOpen = false;
	}

	export let Hst: Hst;
</script>

<Hst.Story title="layout/ModalDialog">
	<svelte:fragment slot="controls">
		<Button on:click={() => (modalOpen = !modalOpen)}>Toggle Modal</Button>
	</svelte:fragment>

	{#if modalOpen}
		<ModalDialog title="Confirm New Password" on:close={handleClose}>
			<div slot="body">
				<p>New password: <strong>lol</strong></p>
			</div>
			<div slot="footer" class="text-right">
				<Button variant="subtle" on:click={handleClose}>Jawn</Button>
				<Button variant="cta" on:click={handleClose}>Go Birds</Button>
			</div>
		</ModalDialog>
	{/if}

	<!-- This div is only here to show some content behind the modal... -->
	<div id="background-content">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto eveniet magni
			necessitatibus numquam nobis voluptas, est, nisi fuga dolores quibusdam fugiat laboriosam
			possimus ratione totam reiciendis sapiente animi unde.
		</p>
	</div>
</Hst.Story>
