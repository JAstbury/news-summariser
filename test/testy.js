function Testy(){}

  Testy.prototype.isTrue = function(testTitle, assertionToCheck) {
      if (!assertionToCheck) {
        console.log(testTitle + "%c is not quite there yet",'color: red');
        return false;
      } else {
        console.log(testTitle + "%c WOOO WE ARE AWESOME",'color: #bada55');
        return true;
      }
    };
