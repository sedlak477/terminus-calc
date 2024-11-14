<script lang="ts">
	import { initRecognition } from '$lib/recognition/recognition'
	import { codeFromValues, symbolFromValue, values } from '$lib/symbols'

	let x: number | undefined = $state()
	let y: number | undefined = $state()
	let z: number | undefined = $state()
	let video: HTMLVideoElement
	let recognize: Awaited<ReturnType<typeof initRecognition>> | undefined

	let code = $derived(
		x !== undefined && y !== undefined && z !== undefined ? codeFromValues(x, y, z) : []
	)
</script>

<svelte:head>
	<title>Terminus calculator</title>
</svelte:head>

{#snippet symbol(value: number | undefined)}
	{#if value === undefined}
		<span></span>
	{:else}
		<img
			class="h-24 w-24 border-white object-cover invert after:inset-2 after:w-1"
			src={symbolFromValue(value)}
			alt="Symbol {value}"
		/>
	{/if}
{/snippet}

{#snippet symbolButton(value: number, onclick: () => void)}
	<button
		{onclick}
		disabled={x === value || y === value || z === value}
		class="disabled:opacity-20"
	>
		{@render symbol(value)}
	</button>
{/snippet}

<main class="mx-auto flex max-w-4xl flex-col align-middle">
	<h1 class="text-7xl">Terminus calculatoris</h1>

	<div class="mt-16 grid flex-grow grid-cols-7 grid-rows-3 items-center justify-center">
		{@render symbol(x)}
		{#each values as value}
			{@render symbolButton(value, () => (x = value))}
		{/each}

		{@render symbol(y)}
		{#each values as value}
			{@render symbolButton(value, () => (y = value))}
		{/each}

		{@render symbol(z)}
		{#each values as value}
			{@render symbolButton(value, () => (z = value))}
		{/each}
	</div>

	<h2 class="mt-16 text-5xl">Your code</h2>
	<div class="mt-8 flex flex-row justify-around">
		{#if code.length === 0}
			<span class="text-9xl">-</span>
			<span class="text-9xl">-</span>
			<span class="text-9xl">-</span>
		{:else}
			{#each code as digit}
				<span class="text-9xl">{digit}</span>
			{/each}
		{/if}
	</div>

	<button onclick={async () => (recognize = await initRecognition(video))}>Start recognition</button
	>
	<video bind:this={video}></video>
</main>
