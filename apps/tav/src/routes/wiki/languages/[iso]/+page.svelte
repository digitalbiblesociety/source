<script>
/** @type {import('./$types').PageData} */
export let data;
$: ({ language } = data);

import { t } from "$lib/Translations"
import {LanguageShow} from '@dbs/svelte-bible-wiki'

</script>

<svelte:head>
	<title>{language.name} | {$t("common.org_title")}</title>
</svelte:head>

<LanguageShow language={language} />