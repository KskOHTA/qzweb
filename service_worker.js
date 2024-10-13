// キャッシュファイルの指定
var CACHE_NAME = 'pwa-gcdl-caches';
var urlsToCache = [
    './CDL/styles.css',
    './CDL/【部内限り】cdl_ver1_01.html',
    './CDL/【部内限り】cdl_ver1_02.html',
    './CDL/【部内限り】cdl_ver1_03.html',
    './CDL/【部内限り】cdl_ver1_04.html',
    './CDL/【部内限り】cdl_ver1_05.html',
    './CDL/【部内限り】cdl_ver1_06.html',
    './CDL/【部内限り】cdl_ver1_07.html',
    './CDL/【部内限り】cdl_ver1_08.html',
    './CDL/【部内限り】cdl_ver1_09.html',
    './CDL/【部内限り】cdl_ver1_10.html',
    './CDL/【部内限り】cdl_ver1_11.html',
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
	        return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
