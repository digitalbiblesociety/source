<h2 id="contact-heading" class="sr-only">Contact us</h2>
<div class="py-12">
	<h3 class="text-warm-gray-900 text-lg font-medium">Send us a message</h3>
	<form
		action="https://formspree.io/f/xgerrbpe"
		method="POST"
		class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
		<div>
			<label for="name" class="text-warm-gray-900 block text-sm font-medium">
				First name
			</label>
			<div class="mt-1">
				<input
					type="text"
					name="name"
					id="name"
					autocomplete="name"
					class="text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm" />
			</div>
		</div>
		<div>
			<label for="email" class="text-warm-gray-900 block text-sm font-medium">
				Email
			</label>
			<div class="mt-1">
				<input
					id="email"
					name="_replyto"
					type="email"
					autocomplete="email"
					class="text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm" />
			</div>
		</div>
		<div class="sm:col-span-2">
			<div class="flex justify-between">
				<label
					for="message"
					class="text-warm-gray-900 block text-sm font-medium">
					Message
				</label>
				<span id="message-max" class="text-warm-gray-500 text-sm">
					Max. 500 characters
				</span>
			</div>
			<div class="mt-1">
				<textarea
					id="message"
					name="body"
					rows="4"
					class="text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 block w-full rounded-md border py-3 px-4 shadow-sm"
					aria-describedby="message-max">
				</textarea>
			</div>
		</div>
		<div class="sm:col-span-2 sm:flex sm:justify-end">
			<button type="submit" class="button w-full">Submit</button>
		</div>
	</form>
</div>

<div></div>
