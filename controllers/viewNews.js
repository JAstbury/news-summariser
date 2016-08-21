var url = "https://www.theguardian.com/world/2016/aug/21/offshore-detention-still-has-support-after-nauru-files-says-coalition-minister";
getNews();
getSummary(url);

setTimeout(function() {
  headings = readNews();
}, 1000);

setTimeout(function() {
  document.getElementById("headings").innerHTML = viewNewz(headings);
  console.log(headings);
}, 2000);

setTimeout(function() {
  articleSummary = readSummary();
}, 5000);

setTimeout(function() {
  console.log('**********');
  console.log(articleSummary);
}, 6000);
