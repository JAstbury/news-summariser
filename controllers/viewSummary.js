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
  getSummary(id);
    setTimeout(function() {
      sum = readSummary();
    }, 3000);
    setTimeout(function() {
      console.log('*******5******');
      document.getElementById("selectedArticle").innerHTML = viewSummaryz(sum.sentences, id);
    }, 5000);
}
