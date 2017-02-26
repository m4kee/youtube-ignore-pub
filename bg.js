chrome.tabs.onUpdated.addListener(function() {
	chrome.tabs.query({
		url: 'https://www.youtube.com/watch?v=*'
	}, function(tabs) {
		for(var i  = 0; i < tabs.length; i++) {
			var tab = tabs[i];
			chrome.tabs.executeScript(tab.id, {
				"file": "app.js"
			}, function() {

			});
		}
	});
});
