function viewSummaryz(sentences, id) {
var articleSum = "";
articleSum += "<h2>" + headings[id].webTitle + "</h2>";
for(var i = 0; i < sentences.length;i++) {
  articleSum += "<br>" +
  sentences[i] + "<br/>";
}
return articleSum;
}
