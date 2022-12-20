<script>
import { t } from "$lib/Translations"
import { page } from "$app/stores"

/** @type {import('./$types').PageData} */
export let data;
</script>

<a href="{`/reader/`}">{$t("common.Back")}</a>
<section class="mx-auto w-2/3 divide-y divide-stone-200">
	{#each data.books.data as book}
		<a
			class="block py-4 text-center hover:bg-stone-200"
			href="{`/reader/${$page.params.bible_id}/${book.id}`}">
			<p class="text-stone-900">{book.name}</p>
			<p class="text-sm text-stone-500">{book.nameLong}</p>
		</a>
	{/each}
</section>
