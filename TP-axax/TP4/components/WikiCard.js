import { getWikiPageUrl } from "../WikiLinks.js";

 export function WikiCard(item) {
  const wikiItem = document.createElement("div");
  wikiItem.classList.add("card", "col",
    "col-xl-2",
    "col-lg-4",
    "col-md-6",
    "col-sm-8",
    "col-12");
  const cardHeader = CardHeader(item);
  const cardBody = CardBody(item);
  wikiItem.append(cardHeader, cardBody);
  return wikiItem;

}
function CardBody(item) {
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const snippet = CardSnippet(item);
  const itemLink = WikiLink(item);
  cardBody.append(snippet, itemLink);
  return cardBody;
}

function WikiLink(item) {
  const itemLink = document.createElement("a");
  itemLink.classList.add("btn", "btn-primary");
  itemLink.innerText = "Aller sur wikipedia";
  const url=getWikiPageUrl(item.pageid);
  itemLink.href = url.toString();
  return itemLink;
}

function CardSnippet(item) {
  const snippet = document.createElement("p");
  snippet.classList.add("card-text");
  snippet.innerHTML = item.snippet;
  return snippet;
}

function CardHeader(item) {
  const itemTitle = document.createElement("h2");
  itemTitle.innerText = item.title;
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.appendChild(itemTitle);
  itemTitle.classList.add("card-title");
  return cardHeader;
}

