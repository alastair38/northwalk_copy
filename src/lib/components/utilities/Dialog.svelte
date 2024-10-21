<script lang="ts">
	export let dialog: HTMLDialogElement | undefined = undefined;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<dialog
	bind:this={dialog}
	on:close
	class="relative min-h-96 w-2/3 overscroll-contain rounded-md backdrop:backdrop-blur-md"
>
	<slot />
</dialog>
