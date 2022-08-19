<script>
import { locale } from "$lib/translations"
import { CountryShow } from "@dbs/svelte-bible-wiki"

/** @type {import('./$types').PageData} */
export let data;
</script>

<CountryShow country="{data.country}" locale={locale} />
