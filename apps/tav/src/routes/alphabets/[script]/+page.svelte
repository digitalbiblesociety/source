<script>
/** @type {import('./$types').PageData} */
export let data;

import { t, locale } from "$lib/translations"
import { AlphabetShow } from "@dbs/svelte-bible-wiki"

let rows
</script>

<svelte:head>
	<title>{data.alphabet.name} | {$t("common.org_title")}</title>
</svelte:head>

<AlphabetShow alphabet="{data.alphabet}" bibles="{data.bibles}" locale="{locale}" />
