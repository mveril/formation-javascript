import { WikiCard } from "./components/WikiCard.js";
import { getWikiSearchUrl } from "./WikiLinks.js";


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
      ul_wiki.appendChild(WikiCard(item));
    }
  });
})