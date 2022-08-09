<script>
	import { t } from "$lib/translations/index.js"
	import Banner from "$lib/components/Banner.svelte"

import IconBookmark from "~icons/heroicons-outline/bookmark"
import IconLibrary from "~icons/heroicons-outline/library"
import IconVolumeUp from "~icons/heroicons-outline/volume-up"
import IconBookOpen from "~icons/heroicons-outline/book-open"
import IconSearch from "~icons/heroicons-outline/search"
import IconHeart from "~icons/heroicons-outline/heart"

$: projects = [
	{
		title: $t("common.Bibles") + " " + $t("common.Online"),
		description: $t("about.work_bibles_description"),
		action: $t("about.work_bibles_action"),
		picture: "/img/about/projects_biblecloud_thumb.png",
		url: "/about/work/biblecloud",
		class: "bg-gradient-to-r from-sky-400 to-blue-600 dark:bg-gray-800",
		icon: IconBookmark,
	},
	{
		title: $t("common.Libraries"),
		description: $t("about.work_libraries_description"),
		action: $t("about.work_libraries_action"),
		picture: "/img/about/projects_libraries_thumb.png",
		url: "/libraries",
		class: "bg-gradient-to-r from-tahiti-400 to-tahiti-800  dark:bg-gray-800",
		icon: IconLibrary,
	},
	{
		title: $t("common.Audio Bibles"),
		description: $t("about.work_audio_description"),
		action: $t("about.work_audio_action"),
		picture: "/img/about/projects_players_thumb.png",
		url: "/about/work/audiobibles",
		class: "bg-gradient-to-r from-cyan-400 to-cyan-700 dark:bg-gray-800",
		icon: IconVolumeUp,
	},
	{
		title: $t("common.Print on Demand"),
		description: $t("about.work_print_description"),
		action: $t("about.work_print_action"),
		picture: "/img/about/projects_print_thumb.png",
		url: "/about/work/print",
		class: "bg-gradient-to-r from-blue-400 to-slate-800 dark:bg-gray-800",
		icon: IconBookOpen,
	},
	{
		title: $t("common.Bible") + " " + $t("common.Research"),
		description: $t("about.work_research_description"),
		action: $t("about.work_research_action"),
		picture: "/img/about/projects_fab_thumb.png",
		url: "/about/work/research",
		class: "bg-gradient-to-r from-teal-400 to-teal-700  dark:bg-gray-800",
		icon: IconSearch,
	},
	{
		title: $t("common.Proposals"),
		description: $t("about.work_proposals_description"),
		action: $t("about.work_proposals_action"),
		picture: "/img/about/projects_proposals_thumb.png",
		url: "/about/work/proposals",
		class: "bg-gradient-to-r from-indigo-400 to-indigo-600  dark:bg-gray-800",
		icon: IconHeart,
	},
]
</script>

	<Banner 
		title={$t("common.Our Work")}
		subtitle=""
		caption={$t("about.work_caption")}
		breadcrumbs={[
			{ link: `/about/`, title: $t('common.About') },
			{ link: '#', title: $t('common.Our Work') },
		]}
		subnav={[
		{title:$t("common.Bibles"),url:'/about/work/biblecloud'},
		{title:$t("common.Libraries"),url:'/about/work/libraries'},
		{title:$t("common.Audio"),url:'/about/work/audio-bibles'},
		{title:$t("common.Print"),url:'/about/work/print'},
		{title:$t("common.Study Bible"),url:'/about/work/sophia'},
		{title:$t("common.Research"),url:'/about/work/research'},
		{title:$t("common.Proposals"),url:'/about/work/proposals'}

	]} />



<section
	class="relative z-10 mx-auto max-w-3xl pb-12 sm:px-8 lg:px-12"
	aria-labelledby="contact-heading">
	<div class="mt-8">
		{#each projects as project}
			<a href="{project.url}"
				class=" text-base font-medium text-blue-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-800 drop-shadow-lg">
				<div
					class="mb-8 flex flex-col rounded-xl rounded-bl-xl rounded-br-xl border border-gray-300 bg-gray-100 dark:bg-gray-800">
					<div
						class="relative flex rounded-tl-xl rounded-tr-xl px-4 pt-5 pb-1 md:px-8 bg-gray-200 dark:bg-gray-600">
						<div
							class="dark:text-invert absolute top-3 right-4 flex -translate-y-1/2 transform rounded-xl border
								border-gray-500 bg-primary-600 p-2.5 dark:bg-gray-800 text-gray-200">
							{#if project.icon}
								<svelte:component this="{project.icon}" />
							{/if}
						</div>

						<div class="flex  w-3/12 items-center">
							<img src="{project.picture}" alt="{project.picture}" class="w-[100px] h-[80px] md:w-[125px] md:h-[95px]" />
						</div>

						<div class="w-9/12  pl-4">
							<h3 class="text-lg font-medium text-gray-800 dark:text-gray-100">
								{project.title}
							</h3>
							<p
								class="mt-2 text-sm font-normal leading-tight text-gray-800 dark:text-gray-100">
								{@html project.description}
							</p>
						</div>
					</div>

					<div>
						<div
							class="rounded-bl-xl rounded-br-xl bg-primary-500 p-1 text-right font-normal text-white
									hover:bg-black dark:bg-gray-400 dark:hover:bg-gray-200 md:px-8 {project.class}">
							{project.action}
							<span aria-hidden="true">&rarr;</span>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
