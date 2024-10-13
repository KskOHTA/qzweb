// キャッシュファイルの指定
var CACHE_NAME = 'pwa-azada-caches';
var urlsToCache = [
    'styles.css',
    '【部内限り】ada_ver1_01.html',
    '【部内限り】ada_ver1_02.html',
    '【部内限り】ada_ver1_03.html',
    '【部内限り】ada_ver1_04.html',
    '【部内限り】ada_ver1_05.html',
    '【部内限り】ada_ver1_06.html',
    '【部内限り】ada_ver1_07.html',
    '【部内限り】ada_ver1_08.html',
    '【部内限り】ada_ver1_09.html',
    '【部内限り】ada_ver1_10.html',
    '【部内限り】ada_ver1_11.html',
    '【部内限り】ada_ver1_12.html',
    '【部内限り】ada_ver1_13.html',
    '【部内限り】ada_ver1_14.html',
    '【部内限り】ada_ver1_15.html',
    '【部内限り】ada_ver1_16.html',
    '【部内限り】ada_ver1_17.html',
    '【部内限り】ada_ver1_18.html',
    '000000.jpg',
    '000001.jpg',
    '000002.jpg',
    '000003.jpg',
    '000004.jpg',
    '000005.jpg',
    '000006.jpg',
    '000007.jpg',
    '000008.jpg',
    '000009.jpg',
    '000010.jpg',
    '000011.jpg',
    '000012.jpg',
    '000013.jpg',
    '000014.jpg',
    '000015.jpg',
    '000016.jpg',
    '000017.jpg',
    '000018.jpg',
    '000019.jpg',
    '000020.jpg',
    '000021.jpg',
    '000022.jpg',
    '000023.jpg',
    '000024.jpg',
    '000025.jpg',
    '000026.jpg',
    '000027.jpg',
    '000028.jpg',
    '000029.jpg',
    '000030.jpg',
    '000031.jpg',
    '000032.jpg',
    '000033.jpg',
    '000034.jpg',
    '000035.jpg',
    '000036.jpg',
    '000037.jpg',
    '000038.jpg',
    '000039.jpg',
    '000040.jpg',
    '000041.jpg',
    '000042.jpg',
    '000043.jpg',
    '000044.jpg',
    '000045.jpg',
    '000046.jpg',
    '000047.jpg',
    '000048.jpg',
    '000049.jpg',
    '000050.jpg',
    '000051.jpg',
    '000052.jpg',
    '000053.jpg',
    '000054.jpg',
    '000055.jpg',
    '000056.jpg',
    '000057.jpg',
    '000058.jpg',
    '000059.jpg',
    '000060.jpg',
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
