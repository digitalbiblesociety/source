<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"

$: values = [
	{
		title: $t("about.values_accessible"),
		description: $t("about.values_accessible_long"),
		icon: "https://images.bible.cloud/values_accessible.svg",
	},
	{
		title: $t("about.values_persecuted"),
		description: $t("about.values_persecuted_long"),
		icon: "https://images.bible.cloud/values_persecute.svg",
	},
	{
		title: $t("about.values_missionaries"),
		description: $t("about.values_missionaries_long"),
		icon: "https://images.bible.cloud/values_church.svg",
	},
	{
		title: $t("about.values_stewardship"),
		description: $t("about.values_stewardship_long"),
		icon: "https://images.bible.cloud/values_finance.svg",
	},
	{
		title: $t("about.values_believers"),
		description: $t("about.values_believers_long"),
		icon: "https://images.bible.cloud/values_unity.svg",
	},
	{
		title: $t("about.values_prayer"),
		description: $t("about.values_prayer_long"),
		icon: "https://images.bible.cloud/values_prayer.svg",
	},
	{
		title: $t("about.values_partnership"),
		description: $t("about.values_partnership_long"),
		icon: "https://images.bible.cloud/values_partners.svg",
	},
	{
		title: $t("about.values_dogma"),
		description: $t("about.values_dogma_long"),
		icon: "https://images.bible.cloud/values_unity.svg",
	},
]
</script>

<svelte:head>
	<title>{$t("common.Values")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("about.values_title")} 
	subtitle="" 
	caption={$t("about.values_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: '#', title: $t('common.Values') },
	]}
	subnav={[
		{title:$t("common.Background"),url:'/about/overview/'},
		{title:$t("common.Mission"),url:'/about/overview/mission'},
		{title:$t("common.History"),url:'/about/overview/history'},
		{title:$t("common.Values"),url:'/about/overview/values',selected:true},
		{title:$t("common.Beliefs"),url:'/about/overview/beliefs'},
	]} />

<section class="pb-18 mt-12 flex h-full overflow-hidden">
	<div class="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
		<div class="mx-auto">
			<div class="mt-6 grid gap-12 px-6 md:grid-cols-2 md:px-12 lg:px-16">
				{#each values as value}
					<div>
						<span class="mt-2 block">
							<img
								src="{value.icon}"
								class="float-left mr-4 h-9 w-9 md:h-14 md:w-14"
								alt="{value.title}" />
							<p class="text-lg font-semibold text-gray-900 dark:text-gray-300">
								{value.title}
							</p>
							<p class="mt-3 text-gray-500 dark:text-gray-400">
								{value.description}
							</p>
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
