<script>
import {Disclosure,DisclosureButton,DisclosurePanel,Transition} from "@rgossiaux/svelte-headlessui"
import { t } from "$lib/Translations/index.js"
import Search from "../Search.svelte"

import I18n from "../i18n.svelte"
import CartButton from "$lib/components/Navigation/CartButton.svelte"

import Logo from "../Partials/Logo.svelte"
import DesktopMenu from "./MenuDesktop.svelte"

import IconX from "~icons/heroicons-outline/x"
import IconMenu from "~icons/heroicons-outline/menu"
import IconBookmarkAlt from "~icons/heroicons-outline/bookmark-alt"
import IconCloudDownload from "~icons/heroicons-outline/cloud-download"
import IconLibrary from "~icons/heroicons-outline/library"
import IconVolumeUp from "~icons/heroicons-outline/volume-up"
import IconBookOpen from "~icons/heroicons-outline/book-open"
import IconSearch from "~icons/heroicons-outline/search"
import IconGlobe from "~icons/heroicons-outline/globe"
import IconUsers from "~icons/heroicons-outline/users"
import IconUserGroup from "~icons/heroicons-outline/user-group"
import IconHeart from "~icons/heroicons-outline/heart"
import IconMap from "~icons/heroicons-outline/map"
import IconNewspaper from "~icons/heroicons-outline/newspaper"
import IconMail from "~icons/heroicons-outline/mail"
import MobileMenu from "./MenuMobile.svelte"
import { mobileMenuOpen } from "$lib/store.js"

$: pages = [
	{
		title: $t("common.Bibles"),
		href: `/bibles`,
		heading: $t("common.menu.bibles_title"),
		//head_icon: IconLibrary,
		nested: [
			{
				title: $t("common.Bibles Online"),
				long: $t("common.menu.bibles_long_cloud"),
				href: `/bibles`,
				icon: IconCloudDownload,
				class: "text-white bg-slate-500 border",
			},
			//				{
			//					title: $t("common.menu.bibles_listen"),
			//					long: $t("common.menu.bibles_long_listen"),
			//					href: `#`,
			//					icon: "play",
			//					class: "text-white bg-purple-600 border",
			//				},
			{
				title: $t("common.menu.bibles_players"),
				long: $t("common.menu.bibles_long_players"),
				href: `/bibles/audio/pearls`,
				icon: IconVolumeUp,
				class: "text-white bg-cyan-600 border",
			},
			{
				title: $t("common.menu.bibles_inscript"),
				long: $t("common.menu.bibles_long_inscript"),
				href: `https://inscript.org/`,
				icon: IconBookmarkAlt,
				class: "text-white bg-blue-400 border",
				target: "_blank",
			},
			{
				title: $t("common.Bibles in Print"),
				long: $t("common.menu.bibles_long_print"),
				href: `/bibles/print`,
				icon: IconBookOpen,
				class: "text-white bg-yellow-500 border",
			},
		],
		floor: [
			{
				title: $t("common.Find a Bible"),
				long: "",
				href: `http://find.bible/`,
				icon: IconSearch,
				class: "text-white bg-teal-400 border-teal-600",
				tag: "Find.Bible",
				target: "_blank",
			},
			{
				title: $t("common.menu.bibles_watch"),
				long: "",
				href: `/about/work/research`,
				icon: IconGlobe,
				class: "text-white bg-red-400 border-red-600",
				tag: "Coming Soon",
			},
		],
	},
	{ title: $t("common.Libraries"), href: `/libraries/treasures/` },
	{
		title: $t("common.About"),
		href: `/about`,
		heading: $t("common.menu.about_title"),
		//head_icon: "information-circle",
		nested: [
			{
				title: $t("common.menu.about_ministry"),
				long: $t("common.menu.about_long_ministry"),
				href: `/about/overview`,
				icon: IconUserGroup,
				class: "text-white bg-blue-400 border border-teal-500",
			},
			{
				title: $t("common.Donate"),
				long: $t("common.menu.about_long_donate"),
				href: `/about/donate`,
				icon: IconHeart,
				class: "text-white bg-red-500 border border-red-700",
			},

			{
				title: $t("common.menu.about_projects"),
				long: $t("common.menu.about_long_projects"),
				href: `/about/work/biblecloud`,
				icon: IconMap,
				class: "text-white bg-sky-800 border",
			},
			{
				title: $t("common.menu.about_news"),
				long: $t("common.menu.about_long_news"),
				href: `/about/projects`,
				icon: IconNewspaper,
				class: "text-white bg-teal-600 border border-slate-400",
			},
			{
				title: $t("common.menu.about_community"),
				long: $t("common.menu.about_long_community"),
				href: `/about/community`,
				icon: IconUsers,
				class: "text-white bg-indigo-400",
			},
			{
				title: $t("common.Project Proposals"),
				long: $t("common.menu.about_long_proposals"),
				href: `/about/projects/proposals`,
				icon: IconGlobe,
				class: "text-white bg-amber-500",
			},
			{
				title: $t("common.Contact"),
				long: $t("common.menu.about_long_contact"),
				href: `/about/contact`,
				icon: IconMail,
				class: "text-white bg-green-400",
			},
		],
		floor: [
			{
				title: $t("common.menu.about_videos"),
				href: `https://vimeo.com/549313705`,
				//icon: "video-camera",
				class: "text-white bg-sky-300 border border-sky-500",
				tag: "Vimeo",
				target: "_blank",
			},
			{
				title: $t("common.Github"),
				long: "",
				href: "https://github.com/digitalbiblesociety",
				//icon: "cog",
				class:
					"text-slate-500 dark:text-stone-200 bg-slate-200 dark:bg-slate-600 border border-slate-400",
				tag: "Repo",
				target: "_blank",
			},
			{
				title: $t("common.menu.about_contact"),
				long: "",
				href: `/about/contact`,
				//icon: "mail",
				class: "text-white bg-stone-400 border border-stone-500",
				tag: $t("common.Connecting"),
				target: "",
			},
		],
	},
	{ title: $t("common.Store"), href: `/store` },
	{ title: $t("common.Donate"), href: `/about/donate/` },
]
</script>

<header class="bg-stone-900 pb-32 dark:bg-black">
	<div
		class="mx-auto max-w-7xl px-4 md:divide-y md:divide-stone-500 dark:md:divide-stone-800">
		<div class="relative flex h-16 justify-between">
			<Logo />
			<Search />
			
			<div class="relative z-10 flex items-center justify-between">
				<I18n />
				<CartButton />
				<button
					type="button"
					class="ml-2.5 inline-flex items-center justify-center rounded-md bg-blue-400 p-1 text-stone-100 hover:text-white focus:outline-none
					focus:ring-2 focus:ring-inset focus:ring-stone-600 dark:bg-stone-800 dark:focus:ring-black md:hidden"
					on:click="{() => mobileMenuOpen.set(!$mobileMenuOpen)}"
					aria-controls="mobile-menu"
					aria-label="Mobile Menu"
					aria-expanded="{mobileMenuOpen ? 'true' : 'false'}">
					<span class="sr-only">Open menu</span>
					{#if $mobileMenuOpen}
						<IconX />
					{:else}
						<IconMenu />
					{/if}
				</button>
			</div>
		</div>
		<DesktopMenu pages="{pages}" />
	</div>

	<MobileMenu pages="{pages}" />
</header>
