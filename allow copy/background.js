chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("blocking:", details.url);
        return { cancel: true };
    }, { urls: ["*/wp-content/plugins/wp-content-copy-protection/*"] }, ["blocking"]
);
