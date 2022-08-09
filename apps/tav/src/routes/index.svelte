<script>
import { t } from "$lib/translations/index.js"
import News from "$lib/News.svelte"
import MailingList from "$lib/MailingList.svelte"
import IconBookmark from "~icons/heroicons-outline/bookmark"
import IconLibrary from "~icons/heroicons-outline/library"
import IconVolumeUp from "~icons/heroicons-outline/volume-up"
import IconBookOpen from "~icons/heroicons-outline/book-open"
import IconSearch from "~icons/heroicons-outline/search"
import IconHeart from "~icons/heroicons-outline/heart"

$: projects = [
	{
		title: $t("common.Bibles"),
		description: $t("about.work_bibles_description"),
		action: $t("about.work_bibles_action"),
		picture: "/img/about/projects_biblecloud_thumb.webp",
		url: "/bibles",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:from-sky-700 dark:to-blue-800",
		icon: IconBookmark,
	},
	{
		title: $t("common.Libraries"),
		description: $t("about.work_libraries_description"),
		action: $t("about.work_libraries_action"),
		picture: "/img/about/projects_libraries_thumb.webp",
		url: "/libraries/treasures",
		class: "bg-gradient-to-r from-tahiti-400 to-tahiti-800  dark:from-tahiti-700 dark:to-tahiti-800",
		icon: IconLibrary,
	},
	{
		title: $t("common.Audio Bibles"),
		description: $t("about.work_audio_description"),
		action: $t("about.work_audio_action"),
		picture: "/img/about/projects_players_thumb.webp",
		url: "/bibles/audio",
		class: "bg-gradient-to-r from-cyan-400 to-cyan-700 dark:from-cyan-600 dark:to-cyan-800",
		icon: IconVolumeUp,
	},
	{
		title: $t("common.Print on Demand"),
		description: $t("about.work_print_description"),
		action: $t("about.work_print_action"),
		picture: "/img/about/projects_print_thumb.webp",
		url: "/bibles/print",
		class: "bg-gradient-to-r from-blue-400 to-slate-800 dark:from-slate-500 dark:to-slate-800",
		icon: IconBookOpen,
	},
	{
		title: $t("common.Bible") + " " + $t("common.Research"),
		description: $t("about.work_research_description"),
		action: $t("about.work_research_action"),
		picture: "/img/about/projects_fab_thumb.webp",
		url: "/about/work/research",
		class: "bg-gradient-to-r from-teal-400 to-teal-700  dark:from-gray-600 dark:to-teal-800",
		icon: IconSearch,
	},
	{
		title: $t("about.work_proposals_action1"),
		description: $t("about.work_proposals_description"),
		action: $t("about.work_proposals_action"),
		picture: "/img/about/projects_proposals_thumb.webp",
		url: "/about/projects/proposals",
		class: "bg-gradient-to-r from-indigo-300 to-indigo-600  dark:from-gray-600 dark:to-indigo-800",
		icon: IconHeart,
	},
]

</script>

<svelte:head>
	<title>{$t("common.org_title")} | {$t("common.Home")}</title>
	<meta name="description" content="{$t('common.index_intro_text')}" />
</svelte:head>


<div class="mt-2 mb-32 flex flex-col items-center sm:flex-row">
	<div class="mx-auto w-2/5 sm:w-1/3 md:hidden">
		<img
			src="/img/logo/dbs_logo_title.svg"
			class="w-48 h-32 mx-auto max-w-xs dark:hidden"
			alt="Digital Bible Society" />
		<img
			src="/img/logo/dbs_logo_title_white.svg"
			class="hidden w-48 h-32 mx-auto max-w-xs dark:block"
			alt="Digital Bible Society" />
	</div>

	<div class="relative w-full pt-6">
		<div class="relative mx-auto max-w-4xl px-4 pt-4 pb-8 sm:px-6 lg:px-8">
			<h1 class="text-center text-2xl font-bold text-gray-800 md:text-3xl  ">
				<span class="dark:text-gray-200">{$t("common.Making Scripture")}</span>
				<span
					class="bg-clip-text pb-3 text-primary-500 dark:text-white sm:pb-5">
					{$t("common.Accessible")}
				</span>
			</h1>
			<p class="my-4 text-sm text-gray-700 dark:text-gray-300 sm:px-2 md:text-center md:text-base md:leading-5 lg:tracking-tight">
				<span class="text-bold text-primary-600 dark:text-white">
					{$t("common.org_title")}
				</span>
				{$t("common.index_caption")}
			</p>
		</div>
	</div>
</div>

<section
	class="relative z-10 mx-auto -mt-32 max-w-6xl pb-12 sm:px-8 lg:px-12"
	aria-labelledby="contact-heading">
	<div
		class="grid grid-flow-row auto-rows-max grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
		{#each projects as project}
			<a
				href="{project.url}"
				class="hover:text-sky-670 text-base font-medium text-primary-500 dark:text-gray-200 dark:hover:text-white">
				<div
					class="flex flex-col rounded-xl rounded-bl-xl rounded-br-xl drop-shadow-md
					 		border border-gray-400 bg-gray-300 dark:border-gray-500 dark:bg-gray-500 dark:hover:border-gray-300">
					<div
						class="relative flex items-center rounded-lg px-4  pt-1 pb-1 md:px-8 lg:rounded-none lg:rounded-tl-xl lg:rounded-tr-xl {project.class}">
						<div
							class="dark:text-invert absolute top-3 right-4 flex -translate-y-1/2 transform rounded-lg border border-gray-500
								bg-gray-600 p-1.5 dark:bg-gray-800 sm:p-2.5 md:rounded-xl">
							<span>
								<svelte:component this="{project.icon}" class="inline-block h-4 w-4 text-white sm:h-6 sm:w-6" />
							</span>
						</div>

						<div class=" mt-1 w-1/3 md:-mt-8">
							<img
								src="{project.picture}"
								alt="{project.title}"
								class="mx-auto md:drop-shadow-lg w-[100px] h-[80px] md:w-[125px] md:h-[95px]" />
						</div>

						<div class="w-2/3 p-1 pl-4">
							<h2
								class="text-base font-medium text-white dark:text-gray-200 md:text-lg">
								{project.title}
							</h2>
							<p
								class="mt-2 mb-1 text-xs xl:text-sm leading-tight text-white dark:text-gray-200 ">
								{@html project.description}
							</p>
						</div>
					</div>

					<div>
						<div
							class="hidden rounded-bl-xl rounded-br-xl bg-gray-100 p-3 text-right font-normal hover:bg-white  dark:bg-gray-500 md:px-8
							bg-[url('/img/bg-linen.png')] bg-blend-screen lg:block ">
							{project.action}
							<span aria-hidden="true">&rarr;</span>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<!--
<div class="lg:overflow-hidden lg:pb-14">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:gap-8">
			<div
				class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
				<div class="lg:py-24">
					<h1
						class="mt-4 text-center text-4xl font-extrabold text-gray-800 dark:text-gray-100 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
						<div>{$t("common.Making Scripture")}</div>
						<div class="pb-3 text-blue-500 dark:text-blue-400 sm:pb-5">
							{$t("common.Accessible")}
						</div>
					</h1>

					<p
						class="text-base text-gray-500 dark:text-gray-200 sm:text-xl lg:text-lg xl:text-xl">
						{$t("common.index_intro_text")}
					</p>

					<div class="mt-10 mb-8 flex flex-row justify-around sm:mt-12">
						<a class="button mx-4 w-1/2 pt-3 text-center" href="/bibles">
							{$t("common.Bibles")}
						</a>
						<a
							class="button-dark mx-4 w-1/2 text-center"
							href="/about/work">
							{$t("common.Projects")}
						</a>
					</div>
				</div>
			</div>
			<div class="mt-12 -mb-16 hidden lg:relative lg:m-0 lg:block">
				<div
					class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
					<img
						class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
						src="/img/characters/reading.svg"
						alt="Reading" />
				</div>
			</div>
		</div>
	</div>
</div>

-->
<div class="max-w-4xl px-8 md:px-12 mx-auto mb-12">
	<News />
</div>


<div class="max-w-4xl px-8 md:px-12 mx-auto">
	<MailingList />
</div>