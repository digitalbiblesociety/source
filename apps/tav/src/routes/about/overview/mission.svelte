<script xmlns="http://www.w3.org/1999/html">
import { t } from "$lib/translations/index.js"
import Banner from "$lib/components/Banner.svelte"

let about_quotes = [
	{
		name: "Robert Moffat",
		quote:
			"I have seen, at different times, the smoke of a thousand villages - villages whose people are without Christ, without God, and without hope in the world.",
		title: "Scottish missionary to Africa",
		image: "https://images.bible.cloud/web/quotables/quote_robertmoffit.png",
	},

	{
		name: "Johannes Gutenberg",
		quote:
			"God suffers in the multitude of souls whom His word can not reach. Religious truth is imprisoned in a small number of manuscript books which confine instead of spread the public treasure. Let us break the seal which seals up holy things and give wings to Truth in order that she may win every soul that comes into the world by her word no longer written at great expense by hands easily palsied, and multiplied like the wind by an untiring machine.",
		title: "Inventor of the Printing Press",
		image:
			"https://images.bible.cloud/web/quotables/quote_johannesgutenberg.png",
	},

	{
		name: "Hudson Taylor",
		quote:
			"It will not do to say that you have no special call to go to China. With these facts before you and with the command of the Lord Jesus to go and preach the gospel to every creature, you need rather to ascertain whether you have a special call to stay at home.",
		title: "Missionary to China",
		image: "https://images.bible.cloud/web/quotables/quote_hudsontaylor.png",
	},
]
</script>

<svelte:head>
	<title>{$t("common.Mission")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("about.mission_title")} 
	subtitle="" 
	caption={$t("about.mission_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: '#', title: $t('common.Mission') },
	]}
	subnav={[
		{title:$t("common.Background"),url:'/about/overview/'},
		{title:$t("common.Mission"),url:'/about/overview/mission',selected:true},
		{title:$t("common.History"),url:'/about/overview/history'},
		{title:$t("common.Values"),url:'/about/overview/values'},
		{title:$t("common.Beliefs"),url:'/about/overview/beliefs'},
	]} />

<section class="mt-12 flex h-full overflow-hidden pb-12">
	<div class="hidden flex-col content-between pt-8 pl-8 pr-2 md:block md:w-1/3">
		{#each about_quotes as quote}
			<div class="mr-6 p-6">
				<img
					src="{quote.image}"
					class="float-left ml-1 mr-2 w-16"
					alt="{quote.name}" />
				<span class="text-sm font-light italic leading-4 tracking-tight ">
					{quote.quote}
				</span>
				<h4 class="text-right">{quote.name}</h4>
				<p class="text-right text-xs text-gray-500 dark:text-gray-300">
					{quote.title}
				</p>
			</div>
		{/each}
		<div class="text-center text-xs underline">
			<a href="/about/quotes">
				{$t("common.More")}
				{$t("common.Bible")}
				{$t("common.Quotes")}
			</a>
		</div>
	</div>

	<div class="prose w-max leading-6 dark:prose-invert  md:w-2/3">
		<h3>{$t("about.mission_sub1")}</h3>
		<p>{$t("about.mission_p1")}</p>
		<p>{$t("about.mission_p2")}</p>

		<hr class="border-blue-400" />

		<h3>{$t("about.mission_sub2")}</h3>
		<p>{$t("about.mission_p3")}</p>
		<p>{$t("about.mission_p4")}</p>
		<p>{$t("about.mission_p5")}</p>
		<p class="text-center italic">{$t("about.mission_p6")}</p>

		<div
			class="relative border-2 border-double border-gray-300"
			style="padding-top: 56.25%">
			<iframe
				src="https://player.vimeo.com/video/159399573?h=02e67ddffc"
				title="About the Digital Bible Society"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
				class="absolute inset-0 h-full w-full p-1">
			</iframe>
		</div>
		<div class="mt-1 text-center text-gray-500 dark:text-gray-200">
			{$t("about.mission_video")}
			<span class="info">
				(5&nbsp;{$t("common.Minute")}&nbsp;{$t("common.Video")})
			</span>
		</div>
	</div>
</section>
