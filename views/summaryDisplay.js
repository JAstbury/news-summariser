function viewSummaryz(sentences) {
var articleSum = "";
for(var i = 0; i < sentences.length;i++) {
  articleSum += "<br>" +
  sentences[i] + "<br/>";
}
return articleSum;
}
