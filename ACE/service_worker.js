// キャッシュファイルの指定
var CACHE_NAME = 'pwa-gace-caches';
var urlsToCache = [
    './styles.css',
    './【部内限り】ace_ver1_01.html',
    './【部内限り】ace_ver1_02.html',
    './【部内限り】ace_ver1_03.html',
    './【部内限り】ace_ver1_04.html',
    './【部内限り】ace_ver1_05.html',
    './【部内限り】ace_ver1_06.html',
    './【部内限り】ace_ver1_07.html',
    './【部内限り】ace_ver1_08.html',
    './【部内限り】ace_ver1_09.html',
    './【部内限り】ace_ver1_10.html',
    './【部内限り】ace_ver1_11.html',
    './【部内限り】ace_ver1_12.html',
    './【部内限り】ace_ver1_13.html',
    './【部内限り】ace_ver1_14.html',
    './【部内限り】ace_ver1_15.html',
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
	        return cache.addAll(urlsToCache);
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
