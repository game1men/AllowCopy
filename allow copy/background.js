//$("body").append('Test');
//let changeColor = document.getElementById("changeColor");
/*
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
*/
//chrome.tabs.create({ url: chrome.extension.getURL('popup.html#window') });
//$("html").not("#page").remove();


//alert(one);
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: 'jquery.min.js'
    });
    chrome.tabs.executeScript({
        file: 'main.js'
    });
    //  $.ajax({ url: 'www.google.com', success: function(data) { chrome.tabs.create({ url: tab.url }) } });
});
//hrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked') });