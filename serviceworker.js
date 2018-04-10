const CACHE_NAME = "born_cache";

var addCache = function(url) {
	caches.open(CACHE_NAME).then(function(cache) {
		return fetch(new Request(url)).then(function(response) {
			if (response.ok) {
//				console.log("ok!");
				var res2cache = response.clone();
				cache.put(response.url, rescache);
				evt.respondWith(response);
			} else {
//				console.log("NG...");
//				return Promise.reject('Invalid response. URL:' + response.url + ' Status: ' + response.status);
			}
		});
	});
};

self.addEventListener("fetch", function(evt) {
	var url = evt.request.url;
//	console.log("URL: " + url);
	var res = caches.match(evt.request, { cacheName: CACHE_NAME })
	if (res) {
//		console.log("cache hit!");
		evt.respondWith(res);
	} else {
//		console.log("no hit!");
		addCache(url);
	}
});
