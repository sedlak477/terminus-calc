<script lang="ts">
	import '../app.css'
	let { children } = $props()
</script>

<div class="font-OOtt h-full w-full overflow-y-auto bg-gray-950 text-green-500">
	{@render children()}
</div>

<style>
	:global(html, body) {
		height: 100%;
	}
</style>
