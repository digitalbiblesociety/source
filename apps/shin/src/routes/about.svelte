<script>
	import { t } from "$lib/translations/index.js"
	let site_id = import.meta.env.VITE_SITE_PREFIX;
</script>

<h1 class="text-primary-200">{$t(`about_${site_id}_title`)}</h1>
<div class="prose mx-auto max-w-prose">
	
	{@html $t(`about_${site_id}_description`)}
</div>

<p class="dark:text-stone-400 text-center text-sm py-12">The Source Site {site_id} was created by <a class="text-blue-500" href="https://dbs.org/">Digital Bible Society</a></p>
