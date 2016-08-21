// var thumbnails = [];
//
// function getNews() {
//   var request = new XMLHttpRequest();
//   request.onreadystatechange = function() {
//     if(request.readyState === 4 && request.status === 200) {
//     thumbnails.push(JSON.parse(request.responseText));
//       }
//   };
//   request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target?show-fields=thumbnail');
//   request.send();
//   console.log(thumbnails);
//   return headings;
// }
//
// getNews();
//
// setTimeout(function() {
//   console.log(thumbnails);
// }, 3000);
