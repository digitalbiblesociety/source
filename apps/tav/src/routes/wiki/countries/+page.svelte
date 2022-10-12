<script>
import { CountryList } from "@dbs/svelte-bible-wiki"
import { locale } from "$lib/Translations"

/** @type {import('./$types').PageData} */
export let data;
</script>

<CountryList countries={data.countries} locale={locale} />