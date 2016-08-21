getNews();

setTimeout(function() {
  headings = readNews();
}, 1000);

setTimeout(function() {
  document.getElementById("headings").innerHTML = viewNewz(headings);
}, 2000);
