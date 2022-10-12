<script>
import { AlphabetList } from "@dbs/svelte-bible-wiki"
import { t } from "$lib/Translations"

/** @type {import('./$types').PageData} */
export let data;
</script>

<svelte:head>
	<title>{ $t('common.wiki.alphabets') } | { $t("common.org_title") }</title>
	<meta name="description" content={$t('common.wiki.alphabet_description')} />
</svelte:head>

<AlphabetList alphabets="{data.alphabets}" locale="" />
