<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"

let birthday =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>'
let treasure_icon =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" /></svg>'
let gov =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
let heart =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>'
let search =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>'
let book =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
let home =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>'

let events = [
	{
		year: "2001",
		month: "May",
		action: "Formed",
		title: "Digital Bible Society",
		icon: birthday,
		color: "text-blue-600",
	},
	{
		year: "2001",
		month: "September",
		action: "Started the",
		title: "Chinese Treasures 1.0",
		icon: treasure_icon,
		color: "text-red-600",
	},
	{
		year: "2002",
		month: "March",
		action: "Partnered with",
		title: "CCIM",
		icon: heart,
		color: "text-red-600",
	},
	{
		year: "2003",
		month: "December",
		action: "Obtained",
		title: "501c.3 Status",
		icon: gov,
		color: "text-green-600",
	},
	{
		year: "2004",
		month: "October",
		action: "Started the",
		title: "Chinese Treasures 3.0",
		icon: treasure_icon,
		color: "text-red-600",
	},
	{
		year: "2005",
		month: "April",
		action: "Started the",
		title: "Chinese Treasures 4.0",
		icon: treasure_icon,
		color: "text-red-600",
	},
	{
		year: "2008",
		month: "January",
		action: "Joined the",
		title: "Forum of Bible Agencies",
		icon: heart,
		color: "text-red-600",
	},
	{
		year: "2008",
		month: "August",
		action: "Started the",
		title: "Arabic Treasures Project",
		icon: treasure_icon,
		color: "text-red-600",
	},
	{
		year: "2009",
		month: "January",
		action: "Started the",
		title: "Chinese Treasures 5.0",
		icon: treasure_icon,
		color: "text-red-600",
	},
	{
		year: "2011",
		month: "March",
		action: "Published",
		title: "Arabic and Persian Treasures",
		icon: treasure_icon,
		color: "text-red-600",
	},
	{
		year: "2012",
		month: "July",
		action: "Formed",
		title: "Digital Bible Alliance",
		icon: heart,
		color: "text-red-600",
	},
	{
		year: "2013",
		month: "January",
		action: "Published",
		title: "Treasure Libraries in 10 Languages",
		icon: treasure_icon,
		color: "text-red-600",
	},
	{
		year: "2013",
		month: "February",
		action: "Started the",
		title: "Find a Bible Project",
		icon: search,
		color: "text-red-600",
	},
	{
		year: "2014",
		month: "February",
		action: "Published",
		title: "Treasure Libraries in 20 Languages",
		icon: treasure_icon,
		color: "text-red-600",
	},
	{
		year: "2014",
		month: "February",
		action: "Delivered",
		title: "Bibles in over a 1000 languages with inScript",
		icon: book,
		color: "text-red-600",
	},
	{
		year: "2015",
		month: "May",
		action: "Published",
		title: "Find a Bible Project 3.0",
		icon: search,
		color: "text-red-600",
	},
	{
		year: "2015",
		month: "October",
		action: "Built",
		title: "A New Office",
		icon: home,
		color: "text-red-600",
	},
	{
		year: "2016",
		month: "September",
		action: "Delivered",
		title: "Over 700 bible downloads",
		icon: book,
		color: "text-red-600",
	},
	{
		year: "2017",
		month: "March",
		action: "Founded ",
		title: "Sociedad Bíblica Digital in Ecuador",
		icon: heart,
		color: "text-red-600",
	},
	{
		year: "2017",
		month: "April",
		action: "Started the",
		title: "Print on Demand Project",
		icon: book,
		color: "text-red-600",
	},
]
</script>

<svelte:head>
	<title>{$t("common.History")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("about.history_title")} 
	subtitle=""
	caption={$t("about.history_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: '#', title: $t('common.History') },
	]}
	subnav={[
		{title:$t("common.Background"),url:'/about/overview/'},
		{title:$t("common.Mission"),url:'/about/overview/mission'},
		{title:$t("common.History"),url:'/about/overview/history',selected:true},
		{title:$t("common.Values"),url:'/about/overview/values'},
		{title:$t("common.Beliefs"),url:'/about/overview/beliefs'},
	]} />

<section class="mt-12 flex h-full overflow-hidden pb-24">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="relative px-4 sm:px-6 lg:px-8">
			<div
				class="mx-auto mt-8 grid w-full grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl
						lg:grid-flow-col-dense lg:grid-cols-3">
				<section aria-labelledby="timeline-title" class="lg:col-span-1">
					<div class="bg-white px-4 py-5 dark:bg-black sm:rounded-lg sm:px-6">
						<h2
							id="timeline-title"
							class="text-lg text-stone-900 dark:text-stone-200">
							Timeline
						</h2>

						<!-- Activity Feed -->
						<div class="mt-6 flow-root">
							<ul class="-mb-8">
								{#each events as event, i}
									<li>
										<div class="relative lg:py-16">
											{#if i + 1 !== events.length}
												<span
													class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-stone-200 dark:bg-stone-700"
													aria-hidden="true">
												</span>
											{/if}
											<div class="relative flex space-x-3">
												<div>
													<span
														class="h-8 w-8 rounded-full bg-stone-100 dark:bg-stone-600 {event.color} flex items-center justify-center">
														{@html event.icon}
													</span>
												</div>
												<div
													class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
													<div>
														<p class="text-sm text-stone-500 dark:text-stone-400">
															{event.action}
															<span
																class="text-stone-900 dark:text-stone-200">
																{event.title}
															</span>
														</p>
													</div>
													<div
														class="whitespace-nowrap text-right text-sm text-stone-500 dark:text-stone-400">
														<time datetime="2020-09-20">
															{event.month} - {event.year}
														</time>
													</div>
												</div>
											</div>
										</div>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</section>

				<section aria-labelledby="timeline-title" class="lg:col-span-2">
					<div
						class="prose prose-lg prose-blue mx-auto mt-6 text-stone-500 dark:text-stone-300">
						<h3 class="dark:text-stone-300">{$t("about.history_sub1")}</h3>
						<p>{$t("about.history_p1")}</p>
						<p>{$t("about.history_p2")}</p>
						<p>{$t("about.history_p3")}</p>
						<p>{$t("about.history_p4")}</p>
						<p>{$t("about.history_p5")}</p>
						<p>{$t("about.history_p6")}</p>
						<p>{$t("about.history_p7")}</p>
						<p>{$t("about.history_p8")}</p>
						<p>{$t("about.history_p9")}</p>
						<p>{$t("about.history_p10")}</p>

						<h3 class="dark:text-stone-300">{$t("about.history_sub2")}</h3>
						<p>{$t("about.history_p21")}</p>
						<p>{$t("about.history_p22")}</p>
						<p>{$t("about.history_p23")}</p>

						<div
							class="relative rounded-lg border-2 border-double border-stone-200 bg-white"
							style="padding-top: 56.25%">
							<iframe
								src="https://player.vimeo.com/video/42558544?h=02e67ddffc"
								title="In the Beginning"
								allow="autoplay; fullscreen; picture-in-picture"
								allowfullscreen
								class="absolute inset-0 h-full w-full p-1">
							</iframe>
						</div>
						<div class="mt-1 text-center text-stone-500 dark:text-stone-200">
							{$t("about.history_video")}
							<span class="info">
								(4&nbsp;{$t("common.Minute")}&nbsp;{$t("common.Video")})
							</span>
						</div>

						<h3 class="dark:text-stone-300">{$t("about.history_sub3")}</h3>
						<p>{$t("about.history_p31")}</p>
						<p>{$t("about.history_p32")}</p>
						<p>{$t("about.history_p33")}</p>
						<p>{$t("about.history_p34")}</p>

						<h3 class="dark:text-stone-300">{$t("about.history_sub4")}</h3>
						<p>{$t("about.history_p41")}</p>
						<p>{$t("about.history_p42")}</p>
						<p>{$t("about.history_p43")}</p>
					</div>
				</section>
			</div>
		</div>
	</div>
</section>
