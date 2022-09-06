<script>
	import Datatable from '$lib/components/datatable/datatable.svelte'
	export let data;
</script>

<Datatable inputData={data.languages} />
