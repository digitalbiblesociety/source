<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"

$: beliefs = [
	{
		title: $t("about.beliefs_god"),
		long: $t("about.beliefs_god_long"),
		ref: $t("about.beliefs_god_ref"),
		icon: "/img/about/belief_god.webp",
	},

	{
		title: $t("about.beliefs_christ"),
		long: $t("about.beliefs_christ_long"),
		ref: $t("about.beliefs_christ_ref"),
		icon: "/img/about/belief_christ.webp",
	},

	{
		title: $t("about.beliefs_spirit"),
		long: $t("about.beliefs_spirit_long"),
		ref: $t("about.beliefs_spirit_ref"),
		icon: "/img/about/belief_spirit.webp",
	},

	{
		title: $t("about.beliefs_bible"),
		long: $t("about.beliefs_bible_long"),
		ref: $t("about.beliefs_bible_ref"),
		icon: "/img/about/belief_bible.webp",
	},

	{
		title: $t("about.beliefs_church"),
		long: $t("about.beliefs_church_long"),
		ref: $t("about.beliefs_church_ref"),
		icon: "/img/about/belief_church.webp",
	},

	{
		title: $t("about.beliefs_commission"),
		long: $t("about.beliefs_commission_long"),
		ref: $t("about.beliefs_commission_ref"),
		icon: "/img/about/belief_commission.webp",
	},

	{
		title: $t("about.beliefs_heaven"),
		long: $t("about.beliefs_heaven_long"),
		ref: $t("about.beliefs_heaven_ref"),
		icon: "/img/about/belief_hell.webp",
	},

	{
		title: $t("about.beliefs_rise"),
		long: $t("about.beliefs_rise_long"),
		ref: $t("about.beliefs_rise_ref"),
		icon: "/img/about/belief_resurrection.webp",
	},
]
</script>

<Banner 
	title={$t("about.beliefs")} 
	subtitle=""
	caption={$t("about.beliefs_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: '#', title: $t('about.beliefs') },
	]}
	subnav={[
		{title:$t("common.Background"),url:'/about/overview/'},
		{title:$t("common.Mission"),url:'/about/overview/mission'},
		{title:$t("common.History"),url:'/about/overview/history'},
		{title:$t("common.Values"),url:'/about/overview/values'},
		{title:$t("common.Beliefs"),url:'/about/overview/beliefs',selected:true},
	]} />

<section class="pb-18 mt-12 flex h-full overflow-hidden">
	<div class="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
		<div class="mx-auto">
			<div class="mt-6 grid gap-12 px-6 md:grid-cols-2 md:px-12 lg:px-20">
				{#each beliefs as believe}
					<div>
						<span class="mt-2 block">
							<img
								src="{believe.icon}"
								class="float-left mr-4 w-12 md:w-16 lg:w-20"
								alt="{believe.title}" />
							<p>
								<span
									class="text-lg font-semibold text-gray-900 dark:text-gray-300">
									{believe.title}
								</span>
								&nbsp;
								<span
									class="mt-3 leading-5 text-gray-600 dark:text-gray-400">
									{believe.long}
								</span>
							</p>

							<p class="mt-3 text-sm text-slate-500 dark:text-gray-400">
								{believe.ref}
							</p>
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
