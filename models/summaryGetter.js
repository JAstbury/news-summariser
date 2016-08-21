var summary = 0;

function getSummary(id) {
  var srequest = new XMLHttpRequest();
  var url = headings[id].webUrl;
  srequest.onreadystatechange = function() {
    if(srequest.readyState === 4 && srequest.status === 200) {
    summary = JSON.parse(srequest.responseText);
    }
  };
  srequest.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url);
  srequest.send();
  setTimeout(function() {
    console.log(summary);
    console.log('*****2*******');
    return summary;
  }, 1000);
}

function readSummary() {
  console.log('***************');
  return summary;
}
