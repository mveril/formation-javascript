function getWikiBaseUrl() {
  return new URL("https://fr.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*");
}

function getWikiSearchUrl(searchitem) {
  const url = getWikiBaseUrl();
  url.searchParams.set("srsearch", searchitem);
  return url
}

function createWikiItem(item) {
  const wikiItem = document.createElement("div");
  wikiItem.classList.add("card","col",
    "col-xl-2",
    "col-lg-4",
    "col-md-6",
    "col-sm-8",
    "col-12");
  const itemTitle = document.createElement("h2");
  itemTitle.innerText = item.title;
  const cardHeader=document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.appendChild(itemTitle);
  itemTitle.classList.add("card-title");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const snippet=document.createElement("p");
  snippet.classList.add("card-text");
  snippet.innerHTML = item.snippet;
  const itemLink = document.createElement("a");
  itemLink.classList.add("btn","btn-primary");
  itemLink.innerText = "Go to Wikipedia";
  const url = new URL("http://fr.wikipedia.org");
  url.searchParams.set("curid",item.pageid)
  itemLink.href = url.toString();
  cardBody.append(snippet,itemLink);
  wikiItem.append(cardHeader,cardBody);
  return wikiItem;

}


const searchBox = document.querySelector("#search_box");
const btnSubmit=document.querySelector("#btn_submit");
const ul_wiki=document.querySelector("#wiki_cards");
btnSubmit.addEventListener("click",(event)=>{
  event.preventDefault();
  ul_wiki.innerHTML="";
  axios
  .get(getWikiSearchUrl(searchBox.value).toString())
  .then(function (response) {
    console.log(response.data)
    for(let item of response.data.query.search){
      ul_wiki.appendChild(createWikiItem(item));
    }
  });
})