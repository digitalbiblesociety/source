<script>
/** @type {import('./$types').PageData} */
export let data;

import { AlphabetList } from "@dbs/svelte-bible-wiki"
import { t } from "$lib/translations"
</script>

<svelte:head>
	<title>Alphabets | {$t("common.org_title")}</title>
</svelte:head>

<AlphabetList alphabets="{data.alphabets}" locale="" />
