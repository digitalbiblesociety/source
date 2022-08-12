<script>
	import MX from "$lib/map/MX.svelte"
	import IN from "$lib/map/IN.svelte"

    const options = {
		MX:	MX,
		IN:	IN
	}

</script>

<svelte:component 
	this={options[import.meta.env.VITE_COUNTRY_SITE]} />