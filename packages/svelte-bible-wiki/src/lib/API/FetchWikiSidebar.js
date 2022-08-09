export default async function FetchWikiSidebar(url, translation) {
	// Fetch the wikipedia page
	let wikiResponse = await fetch(`https://${translation}.wikipedia.org/w/api.php?origin=*&action=parse&format=json&prop=text&section=0&page=${url}`)
	let wiki = await wikiResponse.json();

	// Parse out the sidebar
	let sidebar
	let parser = new DOMParser();
	let doc = parser.parseFromString(wiki.parse.text["*"], 'text/html');
	sidebar = doc.querySelector("table.infobox")

	// Remove links
	sidebar.querySelectorAll("a").forEach(a => a.outerHTML = a.innerHTML)

	// Remove inline styles
	sidebar.querySelectorAll("*").forEach(el => el = el.removeAttribute("style"))

	// Remove annotations, comments and non-essential data
	sidebar.querySelectorAll(".noprint").forEach(el => el.outerHTML = "")

	return sidebar.innerHTML
}
