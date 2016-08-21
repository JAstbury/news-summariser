testy = new Testy();
stub(object, 'getNews');
// stub(object, 'readNews').returns([{webTitle: "News"}]);

describe('Homepage', function () {

  it('displays the headlines', function(title) {
    testy.isTrue(title, document.getElementById("headings") !== null );
  });

  it('has placeholder wording in clicked article section', function(title) {
    testy.isTrue(title, document.getElementById("selectedArticle")
    .textContent.indexOf('Click on an article to read a summary...') !== -1 );
  });

});
