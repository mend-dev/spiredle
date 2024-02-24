<script lang="ts">
	import { base } from "$app/paths";
</script>

<svelte:head>
	<title>Spiredle</title>
</svelte:head>

<div class="grid lg:grid-cols-4 p-8 gap-8 md:grid-cols-2 grid-cols-1">
	<a class="text-3xl font-bold card card-hover bg-gradient-to-br variant-gradient-primary-secondary flex justify-center items-center aspect-square"
		href={`${base}/daily`}>
		Daily
	</a>

	<a class="text-3xl font-bold card card-hover bg-gradient-to-br variant-gradient-secondary-tertiary flex justify-center items-center aspect-square"
		href={`${base}/infinite`}>
		Infinite
	</a>

	<a class="text-3xl text-white font-bold card card-hover bg-gradient-to-br variant-gradient-tertiary-primary flex justify-center items-center aspect-square"
		href={`${base}/`}>
		W.I.P.
	</a>
</div>
