<style>
.enabled .bionic {
	@apply text-stone-500;
}
</style>

<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"

let bionic_enabled = false
</script>

<Banner 
	title="The BET Bible"
	subtitle="(<b>Bion</b>ic <b>Enhan</b>ced <b>Tex</b>t)"
	caption={$t("about.work_bibles_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: `/about/work/`, title: $t('common.Our Work') },
		{ link: '#', title: 'common.The BET Bible' },
	]} />


<div class="relative overflow-hidden bg-stone-100 pt-16 pb-32 dark:invert">
	<div
		class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-4 lg:px-8">
		<div
			class="mx-auto max-w-xl rounded-xl bg-white px-4 shadow-xl sm:px-6 lg:mx-0 lg:max-w-none lg:py-12">

				<div class="mt-6">

					<p class="mt-4 text-lg text-stone-500">
						Because Humans tend to remember the shape of learned words you just
						need to see a few letters for your brain to guess the upcoming word.
						Bionic Reading takes advantage of your brain's extra processing
						power and highlights the parts of a word that your brain will most
						likely need to guess the whole of it. To learn more about the
						process check out
						<a
							target="_blank"
							rel="no-referrer"
							class="underline"
							href="https://bionic-reading.com/">
							Bionic's Website
						</a>
					</p>
					<div class="mt-6 flex justify-around">
						<span class="button-dark p-4 opacity-50">Coming Soon</span>
					</div>
				</div>
				<div class="mt-8 border-t border-stone-200 pt-6">
					<blockquote>
						<div>
							<p class="text-stone-500">
								“Your tool [Bionic] is gorgeous, It’s helping me a lot. My sight
								is reduced because one of my transplanted corneas has become
								opaque and Bionic Reading is helping me a lot to read easier and
								comprehend faster.”
							</p>
						</div>
						<footer class="mt-3 text-stone-700">
							Nestor
						</footer>
					</blockquote>
				</div>

		</div>
		<div class="mt-12 sm:mt-16 lg:mt-0">
			<div
				class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
				<div
					class="w-full overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none">
					<div class="mx-auto mt-12 flex w-3/4 items-center justify-between">
						<span class="flex flex-grow flex-col">
							<span
								class="text-sm text-stone-900"
								id="availability-label">
								Test Out the Bionic Bible Effect
							</span>
							<span class="text-sm text-stone-500" id="availability-description">
								Click the Toggle to the BET Bible Enhancement
							</span>
						</span>
						<button
							type="button"
							class:bg-indigo-600="{bionic_enabled}"
							class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-stone-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							role="switch"
							aria-checked="false"
							aria-labelledby="availability-label"
							aria-describedby="availability-description"
							on:click="{() => {
								bionic_enabled = !bionic_enabled
							}}">
							<span
								aria-hidden="true"
								class:translate-x-5="{bionic_enabled}"
								class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
							</span>
						</button>
					</div>

					<div
						class:enabled="{bionic_enabled}"
						class="justify prose prose-xl py-12 px-4 text-stone-400">
						<!-- prettier-ignore -->
						<section id="scripture"><sup>1</sup><b class="b bionic">I</b>f I <b class="b bionic">spe</b>ak <b class="b bionic">wit</b>h <b class="b bionic">th</b>e <b class="b bionic">languag</b>es <b class="b bionic">o</b>f <b class="b bionic">me</b>n <b class="b bionic">an</b>d <b class="b bionic">o</b>f <b class="b bionic">ange</b>ls, <b class="b bionic">bu</b>t <b class="b bionic">do</b>n&#x2019;t <b class="b bionic">hav</b>e <b class="b bionic">lov</b>e, I <b class="b bionic">hav</b>e <b class="b bionic">beco</b>me <b class="b bionic">soundi</b>ng <b class="b bionic">bra</b>ss, <b class="b bionic">o</b>r a <b class="b bionic">clangi</b>ng <b class="b bionic">cymb</b>al.<sup>2</sup><b class="b bionic">I</b>f I <b class="b bionic">hav</b>e <b class="b bionic">th</b>e <b class="b bionic">gif</b>t <b class="b bionic">o</b>f <b class="b bionic">prophe</b>cy, <b class="b bionic">an</b>d <b class="b bionic">kno</b>w <b class="b bionic">al</b>l <b class="b bionic">mysteri</b>es <b class="b bionic">an</b>d <b class="b bionic">al</b>l <b class="b bionic">knowled</b>ge; <b class="b bionic">an</b>d <b class="b bionic">i</b>f I <b class="b bionic">hav</b>e <b class="b bionic">al</b>l <b class="b bionic">fai</b>th, <b class="b bionic">s</b>o <b class="b bionic">a</b>s <b class="b bionic">t</b>o <b class="b bionic">remo</b>ve <b class="b bionic">mountai</b>ns, <b class="b bionic">bu</b>t <b class="b bionic">do</b>n&#x2019;t <b class="b bionic">hav</b>e <b class="b bionic">lov</b>e, I <b class="b bionic">a</b>m <b class="b bionic">nothi</b>ng.<sup>3</sup><b class="b bionic">I</b>f I <b class="b bionic">giv</b>e <b class="b bionic">awa</b>y <b class="b bionic">al</b>l <b class="b bionic">m</b>y <b class="b bionic">goo</b>ds <b class="b bionic">t</b>o <b class="b bionic">fee</b>d <b class="b bionic">th</b>e <b class="b bionic">poo</b>r, <b class="b bionic">an</b>d <b class="b bionic">i</b>f I <b class="b bionic">giv</b>e <b class="b bionic">m</b>y <b class="b bionic">bod</b>y <b class="b bionic">t</b>o <b class="b bionic">b</b>e <b class="b bionic">burn</b>ed, <b class="b bionic">bu</b>t <b class="b bionic">do</b>n&#x2019;t <b class="b bionic">hav</b>e <b class="b bionic">lov</b>e, <b class="b bionic">i</b>t <b class="b bionic">profi</b>ts <b class="b bionic">m</b>e <b class="b bionic">nothi</b>ng.<sup>4</sup><b class="b bionic">Lov</b>e <b class="b bionic">i</b>s <b class="b bionic">patie</b>nt <b class="b bionic">an</b>d <b class="b bionic">i</b>s <b class="b bionic">kin</b>d. <b class="b bionic">Lov</b>e <b class="b bionic">doe</b>sn&#x2019;t <b class="b bionic">env</b>y. <b class="b bionic">Lov</b>e <b class="b bionic">doe</b>sn&#x2019;t <b class="b bionic">bra</b>g, <b class="b bionic">i</b>s <b class="b bionic">no</b>t <b class="b bionic">pro</b>ud,<sup>5</sup><b class="b bionic">doe</b>sn&#x2019;t <b class="b bionic">beha</b>ve <b class="b bionic">itse</b>lf <b class="b bionic">inappropriat</b>ely, <b class="b bionic">doe</b>sn&#x2019;t <b class="b bionic">see</b>k <b class="b bionic">it</b>s <b class="b bionic">ow</b>n <b class="b bionic">wa</b>y, <b class="b bionic">i</b>s <b class="b bionic">no</b>t <b class="b bionic">provok</b>ed, <b class="b bionic">tak</b>es <b class="b bionic">n</b>o <b class="b bionic">accou</b>nt <b class="b bionic">o</b>f <b class="b bionic">evi</b>l;<sup>6</sup><b class="b bionic">doe</b>sn&#x2019;t <b class="b bionic">rejoi</b>ce <b class="b bionic">i</b>n <b class="b bionic">unrighteousn</b>ess, <b class="b bionic">bu</b>t <b class="b bionic">rejoic</b>es <b class="b bionic">wit</b>h <b class="b bionic">th</b>e <b class="b bionic">tru</b>th;<sup>7</sup><b class="b bionic">bea</b>rs <b class="b bionic">al</b>l <b class="b bionic">thin</b>gs, <b class="b bionic">believ</b>es <b class="b bionic">al</b>l <b class="b bionic">thin</b>gs, <b class="b bionic">hop</b>es <b class="b bionic">al</b>l <b class="b bionic">thin</b>gs, <b class="b bionic">an</b>d <b class="b bionic">endur</b>es <b class="b bionic">al</b>l <b class="b bionic">thin</b>gs.<sup>8</sup><b class="b bionic">Lov</b>e <b class="b bionic">nev</b>er <b class="b bionic">fai</b>ls. <b class="b bionic">Bu</b>t <b class="b bionic">whe</b>re <b class="b bionic">the</b>re <b class="b bionic">ar</b>e <b class="b bionic">propheci</b>es, <b class="b bionic">the</b>y <b class="b bionic">wil</b>l <b class="b bionic">b</b>e <b class="b bionic">don</b>e <b class="b bionic">awa</b>y <b class="b bionic">wit</b>h. <b class="b bionic">Whe</b>re <b class="b bionic">the</b>re <b class="b bionic">ar</b>e <b class="b bionic">vario</b>us <b class="b bionic">languag</b>es, <b class="b bionic">the</b>y <b class="b bionic">wil</b>l <b class="b bionic">cea</b>se.</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
