fetch(
	import.meta.env.VITE_LULU_URL + "auth/realms/glasstree/protocol/openid-connect/token",
	{
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: "Basic " + import.meta.env.VITE_LULU_BASE64,
		},
		body: "grant_type=client_credentials",
	}
).then((res) => res.json())