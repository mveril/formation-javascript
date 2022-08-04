export function getWikiSearchUrl(searchitem) {
  const url = new URL("https://fr.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*");
  url.searchParams.set("srsearch", searchitem);
  return url
}

export function getWikiPageUrl(pageId) {
  const url = new URL("http://fr.wikipedia.org");
  url.searchParams.set("curid", pageId);
  return url;
}