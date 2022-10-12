<script xmlns="http://www.w3.org/1999/html">
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"

// import 

let about_quotes = [
	{
		name: "John Locke",
		quote:
			"The Bible is one of the greatest blessings bestowed by God on the children of men. It has God for its author; salvation for its end, and truth without any mixture for its matter. It is all pure, all sincere; nothing too much; nothing wanting.",
		title: "English philosopher and physician",
		image: "https://images.bible.cloud/web/quotables/quote_johnlocke.png",
	},

	{
		name: "Hudson Taylor",
		quote:
			"It will not do to say that you have no special call to go to China. With these facts before you and with the command of the Lord Jesus to go and preach the gospel to every creature, you need rather to ascertain whether you have a special call to stay at home.",
		title: "Missionary to China",
		image: "https://images.bible.cloud/web/quotables/quote_hudsontaylor.png",
	},

	{
		name: "Patrick Henry",
		quote:
			'Patrick Henry, once interrupted while engaged in Bible reading, held up his Bible and said: "The Bible is worth all other books which have ever been printed, and it has been my misfortune that I have never found time to read it with the proper attention and feeling till lately. I trust in the mercy of Heaven that it is not yet too late."',
		title: "American Orator and Revolutionary",
		image: "https://images.bible.cloud/web/quotables/quote_patrickhenry.png",
	},

	{
		name: "Noah Webster",
		quote:
			"The Bible must be considered as the great source of all the truth by which men are to be guided in government as well as in all social transactions. \"Education is useless without the Bible. The Bible was America's basic text book in all fields. God's Word, contained in the Bible, has furnished all necessary rules to direct our conduct.\"",
		title:
			"American lexicographer, textbook pioneer, English-language spelling reformer, political writer, editor, and prolific author.",
		image: "https://images.bible.cloud/web/quotables/quote_noahwebster.png",
	},

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
		name: "Bernard Ramm",
		quote:
			"A thousand times over, the death knell of the Bible has been sounded, the funeral procession formed, the inscription cut on the tombstone, and committal read. But somehow the corpse never stays put.",
		title: "Baptist Theologian",
		image: "https://images.bible.cloud/web/quotables/quote_bernardramm.png",
	},

	{
		name: "William P. White",
		quote:
			"The Bible is a harp with a thousand strings. Play on one to the exclusion of its relationship to the others, and you will develop discord. Play on all of them, keeping them in their places in the divine scale, and you will hear heavenly music all the time.",
		title: "English Composer",
		image: "https://images.bible.cloud/web/quotables/quote_williamwhite.png",
	},

	{
		name: "William Tyndale",
		quote:
			'Despite the invention of printing in the mid-15th century, there was still no printed version of the Bible in English at the beginning of the 16th century . This lack disturbed William Tyndale, who was keenly aware of the resistance of scholars and church officials to translating scripture - to whom he declared: "If God spare my life, ere many years I will cause a boy that driveth the plough shall know more scripture than thou dost."',
		title: "Reformer and Bible Translator",
		image: "https://images.bible.cloud/web/quotables/quote_williamtyndale.png",
	},

	{
		name: "John Quincy Adams",
		quote:
			"You ask me what Bible I take as the standard of my faith—the Hebrew, the Samaritan, the old English translation, or what? I answer, the Bible containing the Sermon on the Mount—any Bible that I can … understand. The New Testament I have repeatedly read in the original Greek, in the Latin, in the Geneva Protestant, in Sacy’s Catholic French translations, in Luther’s German translation, in the common English Protestant, and in the Douay Catholic translations.",
		title: "Sixth President of the United States",
		image: "https://images.bible.cloud/web/quotables/quote_johnquincyadams.png",
	},

	{
		name: "Brother Andrew",
		quote:
			"And so, for the first of many times, I said the Prayer of God’s Smuggler: ‘Lord, in my luggage I have Scripture that I want to take to Your children across this border. When You were on earth, You made blind eyes see. Now, I pray, make seeing eyes blind. Do not let the guards see those things You do not want them to see.",
		title: "Founder of OpenDoors International",
		image: "https://images.bible.cloud/web/quotables/quote_brotherandrew.png",
	},

	{
		name: "Abraham Lincoln",
		quote:
			"In regards to this great Book [the Bible], I have but to say it is the best gift God has given to man. All the good the Savior gave to the world was communicated through this Book. But for it we could not know right from wrong. All things most desirable for man's welfare, here and hereafter, are found portrayed in it. I am busily engaged in the study of the Bible. I believe it is God's word because it finds me where I am.",
		title: "16th President of the United States",
		image: "https://images.bible.cloud/web/quotables/quote_abrahamlincoln.png",
	},

	{
		name: "Corrie Ten Boom",
		quote:
			"I’ve experienced His presence in the deepest darkest hell that men can create. I have tested the promises of the Bible, and believe me, you can count on them. I know that Jesus Christ can live in you, in me, through His Holy Spirit. You can talk with Him; you can talk with Him out loud or in your heart when you are alone, as I was alone in solitary confinement. The joy is that He hears each word.",
		title: "Christian Writer and Speaker",
		image: "https://images.bible.cloud/web/quotables/quote_corrietenboom.png",
	},

	{
		name: "Mary Jones",
		quote:
			"In 1792, a little peasant girl in Llanfilhangel, Wales, named Mary Jones, became intrigued with the Bible and longed to read it. As her parents were too poor to afford one, she went to a neighbor’s house and borrowed a New Testament. Her eyes fell on three words: Search the Scriptures. Mary determined to purchase a Bible of her own, and for the next several years, toiled to earn enough money to purchase her own copy of the Scriptures. Times were very difficult, pennies were hard to come by, and books were expensive. But in the spring of 1800, Mary walked 25 miles, barefoot, Bala, Gwynedd, carrying her hard-earned money. She arrived there late in the day and found lodging with the local Methodist minister, but she could hardly sleep from the excitement of having a Bible of her own. Early the next morning, she proceeded to the house of Rev. Thomas Charles who was reported to have Bibles for sale. Imagine her sorrow to learn that his stock of Bibles was exhausted. Her inconsolable grief so moved Charles that he said, “My dear child, I see that you must have a Bible. It is impossible to refuse you.” Finding a copy that had been promised to another, he gave it to her. Rev. Charles developed a burning determination to do everything in his power to make the Bible available to any who desired it. He laid plans, garnered support, and in 1894 the British and Foreign Bible Society was formed, the “granddaddy” of all the world’s Bible societies.",
		title: "Morgan, R. J. (1998). Thomas Nelson Publishers",
		image: "https://images.bible.cloud/web/quotables/quote_maryjones.png",
	},
	{
		name: "Sir Isaac Newton",
		quote:
			"We account the Scriptures of God to be the most sublime philosophy. I find more sure marks of authenticity in the Bible than in any profane history whatsoever. … Worshipping God and the Lamb in the temple: God, for his benefaction in creating all things, and the Lamb, for his benefaction in redeeming us with his blood.",
		title:
			"English mathematician, physicist, astronomer, alchemist, theologian, and author.",
		image: "https://images.bible.cloud/web/quotables/quote_isaacnewton.png",
	},
]
</script>
<svelte:head>
	<title>{$t("about.quotes_title")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("about.quotes_title")} 
	subtitle=""
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: '#', title: $t('common.Quotes') },
	]}
	subnav={[
		{title:$t("common.Background"),url:'/about/overview/'},
		{title:$t("common.Mission"),url:'/about/overview/mission'},
		{title:$t("common.History"),url:'/about/overview/history'},
		{title:$t("common.Values"),url:'/about/overview/values'},
		{title:$t("common.Beliefs"),url:'/about/overview/beliefs'},
		{title:$t("common.Privacy"),url:'/about/overview/privacy'},
	]} />

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
		<div class="w-6/12 sm:w-8/12 md:w-9/12">
			<h2 class="text-lg  font-semibold sm:text-xl lg:text-2xl">
				{$t("about.quotes_title")}
			</h2>
			<div class="mt-3 sm:mt-4">
				<p class="text-l text-gray-500 dark:text-gray-300">
					{$t("about.quotes_tagline")}
				</p>
			</div>
		</div>
	</div>
</div>

<div
	class="grid overflow-hidden px-6 py-1 pb-12 sm:gap-px md:grid-cols-2 md:gap-3 lg:grid-cols-3">
	{#each about_quotes as quote}
		<div
			class="delay-50 group  relative m-1 flex-col rounded-lg border-2  border-slate-50 bg-white p-3 shadow-md
  				ease-in-out hover:border-blue-500 hover:transition-all dark:border-slate-600 dark:bg-slate-800 ">
			<div class="mt-2">
				<p class="">{quote.quote}</p>
			</div>
			<div class="flex justify-end">
				<img src="{quote.image}" alt="{quote.name}" class="my-2 ml-24 h-20" />
				<div>
					<h3
						class="pl-5     text-gray-900 dark:text-gray-300 sm:text-lg md:font-semibold">
						{quote.name}
					</h3>
					<p class=" px-5 text-sm text-gray-500 dark:text-gray-300">
						{quote.title}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
