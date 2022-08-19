<script>
import { t } from "$lib/translations"
import Banner from "$lib/components/Banner.svelte"

const videos = [
	{
		title: "Introducing the Pearl Players",
		length: "4:01",
		caption:
			"The Pearl, Village Pearl, and Mini Pearl. Affordable, solar-powered audio players for your mission.",
		cover: "/img/video-covers/pearl-player-introduction.jpg",
		url: "https://www.youtube.com/embed/Bbq9Ke3Xszs",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "The Winds of Change - Audio Bibles in Malawi",
		length: "6:43",
		caption: "A move of God is impacting the chiefs of Malawi.",
		cover: "/img/video-covers/malawi-2018.jpg",
		url: "https://www.youtube.com/embed/2pzUEWUNjXo",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},

	{
		title: "Audio Bibles for Movements - Malawi 2019",
		length: "2:58",
		caption:
			"God is using Audio Bibles in Malawi to advance the great discipleship making movement among the Village Chiefs.",
		cover: "/img/video-covers/malawi-2019.jpg",
		url: "https://www.youtube.com/embed/chrjUwiEF9w",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},

	{
		title: "There's a cry coming out of Venezuela",
		length: "6:13",
		caption:
			"Venezuela needs help!  People are crying out for support. Will you respond to the need?",
		cover: "/img/video-covers/venezuela3.jpg",
		url: "https://www.youtube.com/embed/MuNY5hfUEgQ",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "Audio Bibles for Myanmar",
		length: "2:31",
		caption:
			"Audio Bibles for Myanmar (Burma) sponsored in part by Northwest Bible Church, Spring, Texas.",
		cover: "/img/video-covers/myanmar4.jpg",
		url: "https://www.youtube.com/embed/PuwSBhI6Dwc",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "World Race (Bolivia) Megan Gabrielse",
		length: "4:34",
		caption:
			"Megan Gabrielse traveling to Bolivia to share the Gospel through Audio Bibles provided by Digital Bible Society..",
		cover: "/img/video-covers/world-race1.jpg",
		url: "https://www.youtube.com/embed/Hm7Gc3PqIUI",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "Preparing Audio Bibles for Mexico",
		length: "1:48",
		caption:
			"A short video highlighting the planning, preparation, production and delivery of 4000 Audio Bibles for Mexico.",
		cover: "/img/video-covers/mexico8.jpg",
		url: "https://www.youtube.com/embed/yc0cjs1ot4I",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "The House Started to Sink - T.J. Wainerdi in the Amazon",
		length: "9:43",
		caption:
			" T.J. Wainerdi was in our office to talk about the amazing things he saw on his trip to the Amazon, including a house that began to sink when he played God’s Word!",
		cover: "/img/video-covers/mexico8.jpg",
		url: "https://www.youtube.com/embed/nXSKinUeLIE",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "Ukraine: How We Will Distribute 100K+",
		length: "5:45",
		caption:
			"We met with Sergey Khripunov, to find out more about the ministry and talk about how digital Bibles will be shared.",
		cover: "/img/video-covers/ukraine_1.jpg",
		url: "https://www.youtube.com/embed/eTgS2Dj0wKY",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "Dr. Martin Gonzalez - The Word of God is Flowing",
		length: "2:29",
		caption:
			"A thank you sent to sponsors of the Audio Bibles for Mexico Project",
		cover: "/img/video-covers/mexico2.jpg",
		url: "https://www.youtube.com/embed/LGhWrae-W3I",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: '"Beaten to the Point of Death" (Audio Bibles in Chiapas).',
		length: "4:01 ",
		caption:
			"See the powerful impact of God's Word amongst the persecuted Church in Chiapas, Mexico.",
		cover: "/img/video-covers/mexico3.jpg",
		url: "https://www.youtube.com/embed/uRiO12zziUE",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "Reaching out with Hope",
		length: "3:37",
		caption:
			"Join with us as we help those in hospitals who are in desperate need of Hope by giving them the living Word of God..",
		cover: "/img/video-covers/reaching-out-with-hope.jpg",
		url: "https://www.youtube.com/embed/QOLcliKY1w8",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "WoodsEdge Church Serving COVID victims.",
		length: "2:14",
		caption:
			"WoodsEdge Church teams up with Digital Bible Society to deliver Audio Bibles to Houston hospitals.",
		cover: "/img/video-covers/reaching-out-with-hope.jpg",
		url: "https://www.youtube.com/embed/p3EMqSSXdrc",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
	{
		title: "Raúl Ponce Testimony (Spanish)",
		length: "2:27",
		caption:
			"Raul Ponce talks about distribution of Audio Bibles from Digital Bible Society in from around the world.",
		cover: "/img/video-covers/mexico7.jpg",
		url: "https://www.youtube.com/embed/pNqFS0c64z8",
		class: "bg-gradient-to-r from-sky-300 to-blue-600 dark:bg-gray-800",
	},
]
</script>

<svelte:head>
	<title>
		{$t("common.Audio Bible")}
		{$t("common.Stories")} | {$t("common.org_title")}
	</title>
</svelte:head>

<Banner
		title={$t("bible.audio_player_videos")}
		subtitle=""
		caption={$t("bible.audio_player_videos_caption")}
		breadcrumbs={[
			{ link: `/bibles/`, title: $t('common.Bibles') },
			{ link: `/bibles/audio/`, title: $t('common.Audio Bibles') },
			{ link: '#', title: $t('common.Videos') },
	]}
		subnav={[
		{title:$t("common.Background"),url:'/bibles/audio/'},
		{title:$t("bible.audio_player_pearls"),url:'/bibles/audio/pearls'},
		{title:$t("bible.audio_player_megavoice"),url:'/bibles/audio/megavoice'},
		{title:$t("common.Video"),url:'/bibles/audio/videos',selected:true},
	]} />


<section class="my-16">
	<div class="mx-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
		{#each videos as project}
			<div
				class="w-full rounded-xl border border-gray-300 bg-gray-200 text-center
                            text-gray-800 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100">
				<h3 class="overflow:hidden my-2 text-sm font-medium text-gray-800">
					{project.title}
				</h3>
				<div class="relative mx-auto mt-2 w-full" style="padding-top: 56.25%">
					<iframe
						width="748px"
						height="334px"
						class="absolute inset-0 h-full w-full py-1"
						src="{project.url}"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen>
					</iframe>
					<div
						class="t-2 info relative float-right mr-4 text-xs drop-shadow-lg ">
						{project.length}
					</div>
				</div>

				<div class="mx-auto w-72 py-2 text-center md:w-64 lg:w-72">
					<div
						class="max-h-16 p-2 text-xs font-normal leading-tight text-gray-800 ">
						{@html project.caption}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
