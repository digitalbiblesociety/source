<script>
import { t } from "$lib/Translations"

import IconGroup from "~icons/heroicons-outline/user-group"
import IconMap from "~icons/heroicons-outline/map"
import IconHeart from "~icons/heroicons-outline/heart"
import IconNewspaper from "~icons/heroicons-outline/newspaper"
import IconGlobe from "~icons/heroicons-outline/globe"
import IconVideo from "~icons/heroicons-outline/video-camera"
import IconUsers from "~icons/heroicons-outline/users"
import IconMail from "~icons/heroicons-outline/mail"

$: menu_about = [
	{
		link: `/about/overview`,
		title: $t("common.menu.about_ministry"),
		description: $t("common.menu.about_long_ministry"),
		icon: IconGroup,
		icon_class: "text-white bg-blue-400 border border-slate-500",
	},
	{
		link: `/about/work`,
		title: $t("common.menu.about_projects"),
		description: $t("common.menu.about_long_projects"),
		icon: IconMap,
		icon_class: "text-white bg-slate-700 border",
	},
	{
		link: `/about/donate`,
		title: $t("common.Donate"),
		description: $t("common.menu.about_long_donate"),
		icon: IconHeart,
		icon_class: "text-white bg-red-400 border border-red-700",
	},
	{
		link: `/about/projects`,
		title: $t("common.menu.about_news"),
		description: $t("common.menu.about_long_news"),
		icon: IconNewspaper,
		icon_class: "text-black bg-teal-600 border border-slate-400",
	},

	{
		link: `/about/projects/proposals`,
		title: $t("common.menu.about_proposals"),
		description: $t("common.menu.about_long_proposals"),
		icon: IconGlobe,
		icon_class: "text-white bg-yellow-500",
	},
	{
		link: `https://vimeo.com/549313705`,
		title: $t("common.Video"),
		description: $t("common.menu.about_long_videos"),
		icon: IconVideo,
		icon_class: "text-white bg-sky-400",
	},
	{
		link: `/about/community`,
		title: $t("common.menu.about_community"),
		description: $t("common.menu.about_long_community"),
		icon: IconUsers,
		icon_class: "text-white bg-indigo-400",
	},

	{
		link: `/about/contact`,
		title: $t("common.menu.about_contact"),
		description: $t("common.menu.about_long_contact"),
		icon: IconMail,
		icon_class: "text-white bg-green-400 border border-slate-400",
	},
]
</script>

<svelte:head>
	<title>{$t("common.About")} | {$t("common.org_title")}</title>
</svelte:head>

<div class="rounded-2xl px-4 pt-4 pb-6 sm:px-6 lg:px-8 lg:pt-12 lg:pb-14">
	<div class="flex items-center justify-around ">
		<div class="mr-12 w-6/12 sm:w-4/12 md:w-3/12">
			<img
				src="/img/logo/dbs_logo_title.svg"
				class="w-full max-w-xs dark:hidden"
				alt="Digital Bible Society" />
			<img
				src="/img/logo/dbs_logo_title_white.svg"
				class="hidden w-full max-w-xs dark:block"
				alt="Digital Bible Society" />
		</div>
		<div class="w-6/12 text-gray-700 dark:text-gray-300 sm:w-8/12 md:w-9/12">
			<h2 class="text-lg font-semibold sm:text-xl lg:text-2xl">
				{$t("common.menu.about_title")}
			</h2>
			<div class="mt-3 sm:mt-4">
				<p class="leading-5">
					{$t("common.menu.about_tagline")}
				</p>
			</div>
		</div>
	</div>
</div>

<div
	class="overflow-hidden px-6 py-1 pb-12 sm:grid sm:grid-cols-2 sm:gap-px md:gap-3 lg:grid-cols-3">
	{#each menu_about as page}
		<div
			class="delay-50 group relative m-1 rounded-lg border border-gray-300 bg-gray-50 p-3 drop-shadow-md
 				ease-in-out hover:border-blue-500 hover:transition-all dark:border-slate-600 dark:bg-slate-800 ">
			<div class="flex items-center">
				<div class="hidden sm:flex absolute top-12 md:top-4 left-3 -translate-y-1/2 transform rounded-lg border border-gray-500 p-2.5 md:rounded-xl dark:text-invert {page.icon_class}">
					<svelte:component this="{page.icon}" class="inline-block h-4 w-4 text-white sm:h-6 sm:w-6" />
				</div>
				<h3
					class="sm:pl-16 text-gray-900  dark:text-gray-300 sm:text-lg md:font-semibold lg:text-xl">
					{page.title}
				</h3>
			</div>
			<div class="mt-2">
				<h3 class="text-lg font-medium">
					<a href="{page.link}" class="cursor-pointer focus:outline-none">
						<!-- Extend touch target to entire panel -->
						<span class="absolute inset-0" aria-hidden="true"></span>
					</a>
				</h3>
				<p class="mt-3 sm:pl-16 md:pl-2 text-sm text-gray-500 dark:text-gray-300">
					{page.description}
				</p>
			</div>
		</div>
	{/each}
</div>
