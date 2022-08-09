<script context="module">
export async function load({ params, fetch }) {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${params.bible_id}/books`,
		{
			headers: { "api-key": import.meta.env.VITE_API_BIBLE },
		}
	)
	if (res.ok) {
		return {
			props: {
				books: await res.json(),
			},
		}
	}
	return {
		status: res.status,
		error: new Error(`Could not load Scripture API books`),
	}
}
</script>

<script>
import { t } from "$lib/translations"
import { page } from "$app/stores"
export let books
</script>

<a href="{`/reader/`}">{$t("common.Back")}</a>
<section class="mx-auto w-2/3 divide-y divide-gray-200">
	{#each books.data as book}
		<a
			class="block py-4 text-center hover:bg-gray-200"
			href="{`/reader/${$page.params.bible_id}/${book.id}`}">
			<p class="text-gray-900">{book.name}</p>
			<p class="text-sm text-gray-500">{book.nameLong}</p>
		</a>
	{/each}
</section>
