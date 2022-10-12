<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"

let features = [
	{ id: "art", name: "Full Art Library", description: "" },
	{ id: "search-document", name: "Searchable", description: "" },
	{ id: "book", name: "Commentaries", description: "" },
	{
		id: "map",
		name: "Maps",
		description:
			"A library of over 1200 high-resolution, remastered Biblical images and maps.",
	},
	{ id: "folder-open", name: "Media", description: "" },
	{ id: "document-duplicate", name: "Parallels", description: "" },
	{
		id: "arrows-horizontal",
		name: "Scripture Comparison",
		description:
			"Side-by-side text comparison in almost every language with synced scrolling.",
	},
	{
		id: "audio",
		name: "Audio Bibles",
		description: "Play audio bibles from the chapter you are reading",
	},
	{ id: "chart", name: "Quick Statistics", description: "" },
	{ id: "deaf", name: "Deaf Bibles", description: "" },
	{ id: "night", name: "Dark Mode", description: "" },
	{ id: "options", name: "Accessibility Options", description: "" },
	{ id: "eye-off", name: "Distraction Free", description: "" },
	{ id: "film", name: "Films", description: "" },
	{ id: "offline", name: "Offline Support", description: "" },
	{
		id: "hebrew",
		name: "Strong's Dictionary",
		description:
			"View Greek and Hebrew definitions and display a wide variety of morphological information.",
	},
]
</script>

<svelte:head>
	<title>Sophia | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
title={$t("about.sophia_title")}
subtitle=""
caption={$t("about.sophia_caption")}
breadcrumbs={[
	{ link: `/about/`, title: $t('common.About') },
	{ link: `/about/projects`, title: $t('common.Our Work') },
	{ link: '#', title: $t('common.Sophia') },
]}
subnav={[
	{title:$t("common.Bibles"),url:'/about/work/biblecloud'},
	{title:$t("common.Libraries"),url:'/about/work/libraries'},
	{title:$t("common.Audio"),url:'/about/work/audio-bibles'},
	{title:$t("common.Print"),url:'/about/work/print'},
	{title:$t("common.Study Bible"),url:'/about/work/sophia',selected:true},
	{title:$t("common.Research"),url:'/about/work/research'},
	{title:$t("common.Proposals"),url:'/about/work/proposals'}
]} />

<div class="relative flex flex-row">
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="mt-8 overflow-hidden rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 shadow-xl dark:from-blue-600 dark:to-blue-900 lg:grid lg:grid-cols-2 lg:gap-4">
			<div
				class="px-6 pt-10 pb-6 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
				<div class="lg:self-center">
					<h2
						class="text-3xl font-extrabold text-white dark:text-slate-200 sm:text-4xl">
						<span class="block">The Sophia Bible App</span>
					</h2>
					<p class="mt-4 text-lg leading-6 text-blue-50 dark:text-slate-300">
						A ad-free multi column offline/online bible reader app with full
						Greek and hebrew lexicons.
					</p>
					<a
						href="http://biblewebapp.com"
						class="mt-8 inline-flex items-center rounded-md border border-transparent bg-blue-100 py-3 px-6 text-blue-600 shadow hover:text-blue-500">
						Check it out
					</a>
				</div>
			</div>
			<div class="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
				<img
					class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
					src="/img/screens/biblewebapp.png"
					alt="App screenshot" />
			</div>
		</div>
	</div>
</div>

<div class="overflow-hidden py-8 px-12">
	<div class="prose mx-auto max-w-max dark:prose-invert lg:max-w-7xl">
		<p>
			Sophia is an open-source, multi-lingual, free-to-access Bible delivery
			system. It is easy to use, secure, browser-based, and can be used online
			and off. Sophia does not require installed software. Sophia supports a
			variety of browsers, and can run off of various media such as thumb
			drives, DVDs, and micro SD chips. Sophia is included in all the latest
			Digital Bible Society Treasures Libraries and includes numerous resources
			that can be freely copied and distributed.
		</p>
		<p>
			As an open source Bible project, Sophia promotes free and widespread
			distribution and is specifically designed for restricted access countries
			and regions. We invite you to not only share this resource, but to help
			Sophia continue to expand its content and functionality. Contact us to get
			involved.
		</p>
	</div>
</div>

<div class="w-full">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:py-12 lg:px-8">
		<dl
			class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
			{#each features as feature}
				<div class="relative">
					<dt>
						<div class="absolute h-6 w-6 text-blue-600">
							<img
								class="dark:invert"
								alt="{feature.name}"
								src="/img/icons/{feature.id}.svg" />
						</div>
						<p
							class="ml-9 text-lg leading-6 text-gray-900 dark:text-slate-200">
							{feature.name}
						</p>
					</dt>
					<!--
						<dd class="mt-2 ml-9 text-gray-500">{ feature.description }</dd>
						-->
				</div>
			{/each}
		</dl>
	</div>
</div>
