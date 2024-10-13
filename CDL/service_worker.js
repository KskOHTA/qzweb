// キャッシュファイルの指定
var CACHE_NAME = 'pwa-gcdl-caches';
var urlsToCache = [
    'styles.css',
    '【部内限り】cdl_ver1_01.html',
    '【部内限り】cdl_ver1_02.html',
    '【部内限り】cdl_ver1_03.html',
    '【部内限り】cdl_ver1_04.html',
    '【部内限り】cdl_ver1_05.html',
    '【部内限り】cdl_ver1_06.html',
    '【部内限り】cdl_ver1_07.html',
    '【部内限り】cdl_ver1_08.html',
    '【部内限り】cdl_ver1_09.html',
    '【部内限り】cdl_ver1_10.html',
    '【部内限り】cdl_ver1_11.html',
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
