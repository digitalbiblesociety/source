<script>
	import MenuSubNav from "$lib/components/Navigation/MenuSubnav.svelte"
	import { t } from "$lib/Translations/index.js"
</script>

	<MenuSubNav links={[
		{title:$t("common.Overview"),url:'/about/projects/'},
		{title:$t("common.Stories"),url:'/about/projects/stories'},
		{title:$t("common.Proposed"),url:'/about/projects/proposals'},
		{title:$t("common.Values"),url:'/about/overview/values'},
		{title:$t("common.Beliefs"),url:'/about/overview/beliefs'},
	]} />

<slot />