<script>
import { t } from "$lib/Translations/index.js"
import MenuSubNav from "$lib/components/Navigation/MenuSubnav.svelte";
import MailingList from "$lib/components/Partials/MailingList.svelte"
import IconLocationMarker from "~icons/heroicons-solid/location-marker"
import IconPhone from "~icons/heroicons-solid/phone"
import IconMail from "~icons/heroicons-solid/mail"
import Banner from "$lib/components/Banner.svelte"
</script>

<svelte:head>
	<title>{$t("common.Contact")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("common.Contact")} 
	subtitle={$t("about.contact_tagline")}
	caption={$t("about.contact_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: '#', title: $t("common.Contact") },
	]}
	subnav={[
		{title:$t("common.Donate") + ' ' + $t("common.Online"),url:'/about/donate/'},
		{title:$t("about.donate_other"),url:'/about/donate/gifts'},
		{title:$t("common.Volunteer"),url:'/about/donate/volunteer'},
		{title:$t("common.Contact"),url:'/about/contact',selected:true},
	]} />

<div class="relative">
	<div class="relative mx-auto mb-24 max-w-7xl lg:grid lg:grid-cols-5">
		<div class=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 ">
			<div class="py-6 mx-6 text-center text-gray-500 dark:text-gray-200 border rounded-lg">
					<div class="pt-4 flex justify-center">
						<IconLocationMarker
							class=" mr-4 h-8 w-8 text-blue-500" />
						<div>
							P.O. Box 2881 <br />
							Conroe, TX. 77305
						</div>
					</div>
					<div class="pt-4 flex justify-center">
						<IconPhone class=" mr-4 h-8 w-8 text-blue-500 dark:text-gray-300" />
						<div>
							936-494-4442 <div class="text-sm text-gray-400 ">
								9:00am-5:00pm CST
							</div>
						</div>
					</div>
					<div class="pt-4 flex justify-center">
						<IconMail class=" mr-4 h-8 w-8 text-blue-500" />
						<div class="ml-3">info@dbs.org</div>
					</div>
			</div>
		</div>
		<div class="px-4 pt-16 sm:px-6 lg:col-span-3 lg:px-8 lg:pt-12 xl:pl-12">
			<div class="mx-auto max-w-lg ">
				<!-- svelte-ignore component-name-lowercase -->
				<form
					action="https://formspree.io/f/xleoznoq"
					method="POST"
					class="grid grid-cols-1 gap-y-6">
					<div>
						<input
							type="text"
							name="name"
							placeholder={$t('common.Name')}
							class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
					</div>
					<div>
						<label for="email" class="sr-only">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							placeholder={$t('common.Email')} />
					</div>
					<div>
						<input
							type="text"
							name="subject"
							placeholder={$t('common.Subject')}
							class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
					</div>
					<div>
						<label for="message" class="sr-only">Message</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							class="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							placeholder="$t('common.Message')">
						</textarea>
					</div>
					<div>
						<button
							type="submit"
							class="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-6 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
							{$t('common.Submit')}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<MailingList />
