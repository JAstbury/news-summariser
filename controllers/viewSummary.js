articleClick();

function articleClick(){
  window.addEventListener("hashchange", selectClickedArticle);
}

function selectClickedArticle(){
showArticle(getArticleFromURL(window.location));
}

function getArticleFromURL(location){
  return location.hash.split("#")[1];
}

function showArticle(id){
  document.getElementById("selectedArticle").innerHTML = getSummary(id);
}
