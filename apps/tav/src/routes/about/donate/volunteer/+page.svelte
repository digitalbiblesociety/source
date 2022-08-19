<script>
import { t } from "$lib/translations/index.js"
import Endorsements from "../endorsements.svelte"
import Banner from "$lib/components/Banner.svelte"
</script>

<svelte:head>
	<title>{$t("common.Volunteer")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("about.donate_title")} 
	subtitle=""
	caption={$t("about.donate_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: `/about/donate`, title: $t('common.Donate') },
		{ link: '#', title: $t('common.Volunteer') },
	]}
	subnav={[
		{title:$t("common.Donate") + ' ' + $t("common.Online"),url:'/about/donate/'},
		{title:$t("about.donate_other"),url:'/about/donate/gifts'},
		{title:$t("common.Volunteer"),url:'/about/donate/volunteer',selected:true},
		{title:$t("common.Contact"),url:'/about/contact'},
	]} />

<div
	class="m-4 rounded-2xl border border-gray-300 bg-gray-200 py-8 dark:border-gray-500 dark:bg-blue-800 lg:overflow-hidden ">
	<div class="mx-auto max-w-5xl lg:px-8">
		<div class="md:grid md:grid-cols-2 lg:gap-8">
			<div class="hidden md:relative md:block lg:m-0">
				<img src="/img/characters/version_control.svg" alt="Version Control" />
			</div>
			<div class="lg:relative lg:m-0">
				<div
					class="mx-auto mt-24 max-w-md px-8 sm:max-w-2xl sm:p-6 lg:max-w-none lg:px-0">
					<h2
						class="text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-gray-200">
						{$t("common.index_volunteer_subtitle")}
					</h2>
					<p
						class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
						{$t("common.index_volunteer_title")}
					</p>
					<p
						class="mx-auto mt-5 max-w-prose text-xl text-gray-500 dark:text-gray-300">
						{$t("common.index_volunteer_description")}
					</p>

					<div class="mt-8 grid grid-cols-2 gap-8">
						<a
							href="https://github.com/digitalbiblesociety"
							class="button-dark w-full"
							target="_blank"
							rel="noopener noreferrer">
							{$t("common.Github")}
						</a>
						<a
							href="/about/donate"
							class="button-dark w-full"
							target="_blank"
							rel="noopener noreferrer">
							{$t("common.Donate")}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Endorsements />
