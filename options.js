function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        affiliateId: document.querySelector("#affiliateId").value
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#affiliateId").value = result.affiliateId || "";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }


    var getting = browser.storage.local.get("affiliateId");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
