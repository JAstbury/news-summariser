var summary = 0;

function getSummary(url) {
  var srequest = new XMLHttpRequest();
  srequest.onreadystatechange = function() {
    if(srequest.readyState === 4 && srequest.status === 200) {
    summary = JSON.parse(srequest.responseText);
    }
  };
  srequest.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url);
  srequest.send();
  setTimeout(function() {
    console.log(summary);
    return summary;
  }, 2000);
}

function readSummary() {
  return summary.sentences[0];
}
