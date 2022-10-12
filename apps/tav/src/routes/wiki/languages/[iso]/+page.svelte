<script>
/** @type {import('./$types').PageData} */
export let data;
$: ({ language } = data);

import { t } from "$lib/Translations"
import {languageShow} from '@dbs/svelte-bible-wiki'

let rows
</script>

<svelte:head>
	<title>{language.name} | {$t("common.org_title")}</title>
</svelte:head>

<languageShow language={language} />