<script>
import { t } from "$lib/translations"
import { page } from "$app/stores"

/** @type {import('./$types').PageData} */
export let data;
</script>

<div class="p-8">
	<a
		class="button mx-auto w-2/3"
		href="{`/reader/${$page.params.bible_id}/`}">
		{$t("common.Back")}
	</a>
</div>
<section class="grid grid-cols-4 divide-y divide-x">
	{#each data.chapters.data as chapter}
		<a
			class="block p-4 text-center hover:bg-gray-200"
			href="{`/reader/${$page.params.bible_id}/${chapter.bookId}/${chapter.id}`}">
			{chapter.reference}
		</a>
	{/each}
</section>
