function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var affiliateId = "";
  if (item.affiliateId) {
    affiliateId = item.affiliateId;
  }

  var asinElement = document.querySelector('#ASIN, input[name="idx.asin"], input[name="ASIN.0"]');
  if (asinElement) {
      var path = "/dp/" + asinElement.value;

      if (affiliateId != "") {
          path = path + "/?tag=" + affiliateId;
      }

      window.history.pushState({}, "", path);
  };
}

var getting = browser.storage.local.get("affiliateId");
getting.then(onGot, onError);
