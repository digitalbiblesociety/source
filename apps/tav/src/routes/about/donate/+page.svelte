<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"
import Endorsements from "./endorsements.svelte"
import IconExternalLink from "~icons/heroicons-outline/external-link"
import IconLockedClosed from "~icons/heroicons-outline/lock-closed"
</script>

<svelte:head>
	<title>{$t("about.donate_title")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("about.donate_title")} 
	subtitle=""
	caption={$t("about.donate_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: '#', title: $t('common.Donate') },
	]}
	subnav={[
		{title:$t("common.Donate") + ' ' + $t("common.Online"),url:'/about/donate/',selected:true},
		{title:$t("about.donate_other"),url:'/about/donate/gifts'},
		{title:$t("common.Volunteer"),url:'/about/donate/volunteer'},
		{title:$t("common.Contact"),url:'/about/contact'},
	]} />


<div class="lg:overflow-hidden ">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div
			class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center ">

				<div class="mt-1 mb-2 flex flex-row justify-around sm:mt-2 ">
					<div class="mt-4 mb-2 flex flex-row justify-around ">
						<form
							action="https://www.paypal.com/donate"
							method="post"
							target="_top"
							class="button mx-4 text-center">
							<input
								type="hidden"
								name="hosted_button_id"
								value="K2K2778FLZMSY" />
							<button
								type="submit"
								formtarget="_blank"
								class="space-between flex h-full items-center rounded-lg bg-gradient-to-r from-blue-400
									to-blue-600 px-2 py-1 text-center dark:bg-gray-800">
								{$t("about.donate_paypal")}
								<IconExternalLink class="ml-2 h-5 w-5" />
							</button>
							<img
								alt="Pixel"
								border="0"
								src="https://www.paypal.com/en_US/i/scr/pixel.gif"
								width="1"
								height="1" />
						</form>

						<a
							class="space-between mx-2 flex h-full items-center rounded-lg bg-gradient-to-r from-tahiti-500 to-tahiti-800 px-2 py-1 text-center text-white  dark:bg-gray-800"
							href="/about/donate/gifts">
							{$t("about.donate_mail")}
						</a>

						<a
							class="space-between mx-2 flex h-full items-center rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-700 px-2 py-2 text-center text-white dark:bg-gray-800"
							href="/about/donate/gifts">
							{$t("about.donate_stock")}
						</a>
						<a
							class="space-between mx-2 flex h-full items-center rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-700 px-2 py-2 text-center text-white dark:bg-gray-800"
							href="/about/donate/gifts">
							{$t("about.donate_crypto")}
						</a>
					</div>
				</div>

		</div>

		<div class="lg:ml-18 mt-12 -mb-16 md:ml-12">
			<p class="text-small text-center uppercase text-gray-500">
				<IconLockedClosed
					class="duration-50 -mt-1 mr-1 inline-block h-5 w-5 transition ease-in-out group-hover:text-gray-900" />
				<span
					class="ml-2text-sm mt-8 uppercase text-gray-500 dark:text-gray-200">
					{$t("about.donate_secure")}
				</span>
			</p>
			<div class="mx-auto max-w-lg rounded-lg border p-4 pr-6">
				<iframe
					src="https://donorbox.org/embed/digital-bible-society"
					name="donorbox"
					title="Donate Now"
					allowpaymentrequest="allowpaymentrequest"
					seamless="seamless"
					frameborder="0"
					scrolling="no"
					height="1200px"
					width="100%">
				</iframe>
			</div>
		</div>
	</div>
</div>

<Endorsements />
