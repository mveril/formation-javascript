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
  const itemLink = document.createElement("a");
  itemLink.innerText = item.title;
  const url = new URL("http://fr.wikipedia.org");
  url.searchParams.set("curid",item.pageid)
  itemLink.href = url.toString();
  const snippet=document.createElement("p");
  snippet.innerHTML = item.snippet;
  wikiItem.append(itemLink,snippet);
  return wikiItem;

}


const searchBox = document.querySelector("#search_box");
const btnSubmit=document.querySelector("#btn_submit");
const ul_wiki=document.querySelector("#ul_wiki");
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