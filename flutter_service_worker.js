'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7a2ae50030a32b31fa510e61ce2abdb7",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".git/COMMIT_EDITMSG": "be85e395c611e8b2707168d37c681b9b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "3de093045b817e090f88e631c179d4a0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/refs/heads/master": "9ffdc67c2b6cd932d76b5f0cccd64dab",
".git/refs/remotes/origin/master": "9ffdc67c2b6cd932d76b5f0cccd64dab",
".git/objects/75/7ef017c47477b041e4378d0224fe9314c91942": "557f5bb77ff7268cebf1f836bd81f14a",
".git/objects/7c/0c563dc87a69875548a698e9ea41e684513f0d": "e37866424829d0044b8e6ef74d28f6b6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/be/76028fc9f04bc521b643d6ad1c1e3faeacbd12": "71d6f852207314f875843cc1820ef5df",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/9c/679785bfa4304dd773a97d083c8296b43d63b6": "124c663d9513797b7cd21ef9c95dafff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/af/a643770e6bd7f24b472e7e8df06b342a785b8d": "fc2b377825f6ddf91152bf54c25109bf",
".git/objects/84/d603516eacad4cdbb1c7ae7dee7431dbecd1ce": "cc597a81d3ce5401514cbd12f163f920",
".git/objects/51/8f76a47938ca6d4f4da1189c01b07acfb98384": "103108ee54fae9db94a96d8ac55187c3",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/24/92c44a2de20b40ee64b10d8da1f8129227c78f": "073501c68e94efcd253bfbbb74e814d3",
".git/objects/a8/bfd01cd8990b2f26fe9d65d9f005950b46f152": "390b1cc2a3b939b90570ba8bb3d33a21",
".git/objects/79/5c8295ddfa833f06cb0077bfdeb8b27e675d0c": "5a559e1df959fc9c381292e1a891d9c3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/6d/99a38febd45cd4e20730751ef9cb2acb44a70a": "0884d1019d0a8266f514ab21cd0b3e9f",
".git/objects/f2/769db8989590d3243cb3949c37983f88ad62b7": "d102ebe957c2a70de0154e9d9aa8a44e",
".git/objects/f2/52976aeb0abc18c77a44b72e81ccea63fdd787": "da907760b4cd9c575713a199d2121d5c",
".git/objects/8b/c4f266f7be6167148473335cefef3ac748146c": "96eaebd68018c1b9ba2f022a736e80cb",
".git/objects/b9/6e7954b39f0232c92623513d3d090b7aaef12a": "ecfccf974ed8427f289ac1cf52cde439",
".git/objects/2a/7b90ce7095987bd53df9f7bf05aa704ce32b5e": "a689c6d1254bd87c542dd17555875c87",
".git/objects/dc/faa60ea5b61aee20ac88b5e3bc1c517460bac4": "2fb9d616e9fe334e9c738bd66725fdb3",
".git/objects/83/d4d5a69c8e0e407994a0cd16d99d047457993f": "1c4d507c913751829dd6e3cf56de804e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/47/ac25a99e311d45663e0ebb6a427b903f018e85": "2473b2e5743b62c323a3eefb2b42e0ac",
".git/objects/f1/578bbece4c8c67ea495c886185c785b89c7cd3": "fabdeb527ef09731c34cbae293dc858e",
".git/objects/36/5bd47f959c5840013ebde24e2cfb2fdaa57118": "4344593a1ebf3c7a0bcf05ad982ddc55",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/29/bfb63d5c1854529da2549b8c69dcb55a1db420": "aad57f9f2ce89e9751f9ed7bbbf7f58b",
".git/objects/cd/ef58978e2e1c27b76c96454435496f84c76192": "84aa6ec2cf579ff2b6dc92409110396d",
".git/objects/d5/91c8444906641222adc2609d8ec81774aaad95": "9b451bdfcb6dadde09d9abac0aee3273",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/logs/HEAD": "6907b79f51bdc4c6c1f0b7adf8ba4158",
".git/logs/refs/heads/master": "6907b79f51bdc4c6c1f0b7adf8ba4158",
".git/logs/refs/remotes/origin/master": "9fa19c9a25d6d44799d1307ad8c6e0f1",
".git/config": "7a3815fb0a7aa3488a2bb239f5cee479",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"manifest.json": "d8e3f9a73369682e88306434875329d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/balloons.png": "9a6758bde37e08a9bafc0a18b53ffb68",
"assets/assets/faq.json": "1d6467a0cf886a8150c8c940f4b86537",
"assets/assets/splash.jpg": "ce32a3217aa55a07db49b47f49ac871c",
"assets/assets/problems.txt": "f13d0f58cfa0b964bce0155f9b2608bd",
"assets/AssetManifest.json": "bc2bb455cf542db292fa5c420eb215c9",
"assets/fonts/Oswald/Oswald-ExtraLight.ttf": "309040b6e57cb05a6863228a4d395521",
"assets/fonts/Oswald/Oswald-SemiBold.ttf": "c8ff3929086488642de6b260f5c14e5b",
"assets/fonts/Oswald/Oswald-Light.ttf": "4be970a1b24aa834afff4b16842c8981",
"assets/fonts/Oswald/Oswald-Bold.ttf": "e991dea9f65ce799dd72095ab7ad6e88",
"assets/fonts/Oswald/Oswald-Medium.ttf": "351c498bd487b476454b8f09a34139a9",
"assets/fonts/Oswald/Oswald-Regular.ttf": "e1996192b98a516646ff9a8c0c0ca90c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "661d6f90d2479ab1c1aec0fe9ae10216",
"assets/FontManifest.json": "5ad31d8eed413a5a6e309bb7ca484c4a",
"main.dart.js": "e2b735ee4d9df1d218b8007706222588",
"index.html": "7d13a335111b945801aa1a5d54c6b59a",
"/": "7d13a335111b945801aa1a5d54c6b59a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
