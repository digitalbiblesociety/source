<script>
import { t } from "$lib/Translations/index.js"

import IconCheck from "~icons/heroicons-outline/check"
import IconExternalLink from "~icons/heroicons-outline/external-link"

let endorsements = [
	{
		title: "ECFA",
		logo: "/img/logo/ecfa.svg",
		style: "mx-auto w-3/4 px-6 max-w-xs",
		link: "https://www.ecfa.org/MemberProfile.aspx?ID=44755",
		description: $t("about.donate_ecfa"),
	},
	{
		title: "Guidestar",
		logo: "/img/logo/guidestar_plat.svg",
		style: "mx-auto w-3/4 px-6 max-w-xs",
		link: "https://www.ecfa.org/MemberProfile.aspx?ID=44755",
		description: $t("about.donate_guidestar"),
	},
	{
		title: "Charity Navigator",
		logo: "/img/logo/charity-navigator.svg",
		style: "mx-auto w-full",
		link: "https://www.charitynavigator.org/ein/200612499",
		description: $t("about.donate_charity"),
	},
	{
		title: "Forum of Bible Agencies",
		logo: "/img/logo/fobai_logo.svg",
		style: "mx-auto w-full pt-12 py-16",
		link: "https://forum-intl.org/membership/members/",
		description: $t("about.donate_fobai"),
	},
]
</script>

<section class="mx-auto max-w-7xl px-4 pt-1 pb-4 sm:px-6  lg:px-8">
	<h2
		class="py-3 text-center text-xl font-semibold text-slate-800 dark:text-slate-100">
		{$t("about.donate_endorse")}
	</h2>
	<div
		id="endorsement"
		class="mt-2  grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 ">
		{#each endorsements as { title, logo, style, link, description }}
			<div
				class="relative rounded-xl border bg-white drop-shadow dark:border-stone-400 dark:bg-black">
				<a target="_blank" href="{link}">
					<img class="mx-auto p-2 {style}" src="{logo}" alt="{title}" />

					<div
						class="space-around inline-flex text-lg leading-6 text-stone-900">
						<IconCheck class="ml-2 h-6 w-6 text-blue-500" />
						<span class="ml-2 dark:text-stone-300">{title}</span>
					</div>
				</a>
				<p class="mt-2 flex pl-4 pr-1 text-sm text-stone-600 dark:text-stone-400">
					{description}
				</p>
				<a target="_blank" href="{link}" class="">
					<div class="p-2 text-right text-sm text-blue-400 underline">
						{$t("common.Visit Site")}
						<IconExternalLink
							class="float-right ml-1 h-5 w-5 text-blue-400" />
					</div>
				</a>
			</div>
		{/each}
	</div>
</section>
