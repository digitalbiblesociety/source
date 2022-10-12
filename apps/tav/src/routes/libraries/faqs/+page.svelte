<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"
</script>

<svelte:head>
	<title>
		{$t("common.FAQs")} - {$t("common.Libraries")} | {$t("common.org_title")}
	</title>
</svelte:head>


<Banner
		title={$t("common.Library") + " " + $t("common.FAQs")}
		subtitle=""
		caption={$t("libraries.faq_caption")}
		breadcrumbs={[
			{ link: `/libraries`, title: $t('common.Libraries') },
			{ link: '#', title: $t('common.FAQs') },
		]}
		subnav={[
			{title:$t("common.Overview"),url:'/libraries/'},
			{title:$t("common.Treasures Libraries"),url:'/libraries/treasures'},
			//{title:$t("common.Bible") + " " + $t("common.Libraries"),url:'/libraries/bible'},
			{title:$t("common.FAQs"),url:'/libraries/faqs',selected:true},
		]} />


<section id="container" class="mx-auto max-w-5xl">
	<div
		id="copy"
		class="prose  m-auto mt-8 max-w-none leading-tight text-gray-600 dark:prose-invert dark:text-gray-300">
		<h3 class="w-full bg-blue-400 px-2 text-white">
			{$t("libraries.faq_1")}
		</h3>

		<h4>{$t("libraries.faq_q1")}</h4>
		<p>{$t("libraries.faq_a1")}</p>

		<h4>{$t("libraries.faq_q2")}</h4>
		<p>{$t("libraries.faq_a2")}</p>

		<h4>{$t("libraries.faq_q3")}</h4>
		<p>{$t("libraries.faq_a3")}</p>

		<h4>{$t("libraries.faq_q4")}</h4>
		<p>{$t("libraries.faq_a4")}</p>

		<h4>{$t("libraries.faq_q5")}</h4>
		<p>{$t("libraries.faq_a5")}</p>

		<h3 class="w-full bg-blue-400 px-2 text-white">
			{$t("libraries.faq_2")}
		</h3>

		<h4>{$t("libraries.faq_q6")}</h4>
		<p>{$t("libraries.faq_a6")}</p>

		<h4>{$t("libraries.faq_q7")}</h4>
		<p>{$t("libraries.faq_a7")}</p>

		<h4>{$t("libraries.faq_q8")}</h4>
		<p>{$t("libraries.faq_a8")}</p>

		<h4>{$t("libraries.faq_q9")}</h4>
		<p>{$t("libraries.faq_a9")}</p>

		<h4>{$t("libraries.faq_q10")}</h4>
		<p>{$t("libraries.faq_a10")}</p>

		<h3 class="w-full bg-blue-400 px-2 text-white">
			{$t("libraries.faq_3")}
		</h3>

		<h4>{$t("libraries.faq_q11")}</h4>
		<p>{$t("libraries.faq_a11")}</p>

		<h4>{$t("libraries.faq_q12")}</h4>
		<p>{$t("libraries.faq_a12")}</p>

		<h4>{$t("libraries.faq_q13")}</h4>
		<p>{$t("libraries.faq_a13")}</p>

		<h4>{$t("libraries.faq_q14")}</h4>
		<p>{$t("libraries.faq_a14")}</p>

		<h4>{$t("libraries.faq_q15")}</h4>
		<p>{$t("libraries.faq_a15")}</p>

		<h4>{$t("libraries.faq_q16")}</h4>
		<p>{$t("libraries.faq_a16")}</p>

		<div
			class="relative mt-12 bg-gray-50 dark:bg-gray-600"
			style="padding-top: 56.25%">
			<iframe
				src="https://player.vimeo.com/video/124872117?h=02e67ddffc"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
				class="absolute inset-0 h-full w-full p-1">
			</iframe>
		</div>
		<div class="mt-1 text-center text-gray-500 dark:text-gray-200">
			{$t("about.work_libraries_video")}
			<span class="info">
				(6&nbsp;{$t("common.Minute")}&nbsp;{$t("common.Video")})
			</span>
		</div>
	</div>
</section>
