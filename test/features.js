testy = new Testy();

describe('Homepage', function () {

  it('displays the headlines', function(title) {
    testy.isTrue(title, document.getElementById("headings") !== null );
  });

});
