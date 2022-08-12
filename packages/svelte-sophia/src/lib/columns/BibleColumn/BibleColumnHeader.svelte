<script context="module">
	export async function load({fetch}) {
		const res = await fetch('/data/bibles_dbs.json', {mode: 'no-cors'})
		if (res.ok) {
			return {
				props: {
					bibles: await res.json(),
				},
			}
		}
	
		return {
			status: res.status,
			error: new Error('Could not load bibles JSON'),
		}
	}
</script>
<script>

	import ColumnHeader from '../ColumnHeader.svelte'
	import BibleColumnBooks from './BibleColumnBooks.svelte'
	import BibleColumnMenu from './BibleColumnMenu.svelte'

	export let key

</script>

<ColumnHeader key={key}>
	<div class="flex rounded-md shadow-sm justify-center items-center">
		<BibleColumnBooks key={key} />
		<BibleColumnMenu key={key} />
	</div>
</ColumnHeader>