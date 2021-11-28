'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ecf1568a65f2b6869ece25cdc9ce719b",
"assets/assets/font/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/font/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/font/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/font/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/font/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/image/about_us.png": "11f2ecbd5af451a85c7074d9e65f7bd0",
"assets/assets/image/app_logo.png": "dd16b8112f73da139260d3183c2f5d5b",
"assets/assets/image/box.png": "cc60bc199b4645875544df0fa0150147",
"assets/assets/image/call.png": "ae84d046565aa31c08222352d7509974",
"assets/assets/image/camera.png": "44c4b08813fde5dfb024a46bd4fa20b5",
"assets/assets/image/cart.png": "b4c77c6c415f4816e723d234dd825003",
"assets/assets/image/chat.png": "496d5e586db38fd1516ddff572d3897e",
"assets/assets/image/close_lock.png": "f0c62d0c763d92243543de6b56aa2edb",
"assets/assets/image/coupon.png": "5bbd4e9296b8f7682eba7282874ee14a",
"assets/assets/image/coupon_bg.png": "2f714385adf51ff950665503605f40b0",
"assets/assets/image/delivery_boy_marker.png": "23db36f009d20c53d0bd02daf048eb7e",
"assets/assets/image/destination_marker.png": "4b0a22e632ef1eae30a04e8ff4f32347",
"assets/assets/image/email_with_background.png": "60b9a4ba3c326e939783b7057cc1d8ca",
"assets/assets/image/group_14230.png": "3d80b96c2485efdcbd5f51300cf7b1c2",
"assets/assets/image/home.png": "0b1bd9e31948919f837f9c47a331b5b9",
"assets/assets/image/icon_feather_shopping_bag.png": "4ee18032cfd2d4700b536be8f4fd9053",
"assets/assets/image/line.png": "9321aad2eef1075c395c5581731caaa0",
"assets/assets/image/list.png": "48d9d25190610b7543349d83ff9c8fe3",
"assets/assets/image/location.png": "4aad82c9d0bf60395b8b0531068e6ef4",
"assets/assets/image/logo.png": "e1c47fe05010a40ac549b7f8f9b53781",
"assets/assets/image/log_out.png": "39d12483676fb938cb3f1d9efd2c24ea",
"assets/assets/image/more_icon.png": "9c6640681bac83def6cdae46b3088f0d",
"assets/assets/image/not_found.png": "f7bdb7060158634f8fb977df0b9e2fc3",
"assets/assets/image/on_boarding_1.png": "7757e9c3bb43ebf7c6e6481aa01ff027",
"assets/assets/image/on_boarding_2.png": "003524c6184bd1b2d248cbba7752f029",
"assets/assets/image/on_boarding_3.png": "2d738103b09dd5db43bb44571ecacf49",
"assets/assets/image/open_lock.png": "43a9fa242acd95a606733e55bf510a3b",
"assets/assets/image/order_bag.png": "9c418103314d50eb0ffec459798d90a0",
"assets/assets/image/order_list.png": "4ce8dbbbaac361be276aa08863ff8f8e",
"assets/assets/image/order_placed.png": "3cf99674ef6ccc9e10c0a09555fc4900",
"assets/assets/image/percentage.png": "14191fb2e8b6fe14946b7b97aa28bca0",
"assets/assets/image/placeholder.jpg": "81abc0d9b59a9aba9191102834f2d978",
"assets/assets/image/privacy.png": "9e2a01c48663c520cfad9eadb279360a",
"assets/assets/image/restaurant_marker.png": "d769637bda1ddc31f953f943220bf2aa",
"assets/assets/image/settings.png": "669febfabc30889de5c9185c67e212f6",
"assets/assets/image/shopping_cart.png": "7bc4e6ae017bf290d2a44b1fa7f40e9d",
"assets/assets/image/terms_and_conditions.png": "20f9885536de0681c3b9a987089d8517",
"assets/assets/image/unselected_restaurant_marker.png": "744d669976c02ce7166d879f1c0e787e",
"assets/assets/image/wallet.png": "744631e17632317ce0f3676e51008ef3",
"assets/assets/language/ar.json": "16e5a3361fe1e5ca78dcef2eec8c8e30",
"assets/assets/language/en.json": "6ce99ae68d20db15f0349a9fab2331a9",
"assets/FontManifest.json": "629ba9bbaf205c46b34a5c1c1eb7d013",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "69d58c4f5b6b1b1aa1d9b82cee81f889",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "dd16b8112f73da139260d3183c2f5d5b",
"firebase-messaging-sw.js": "179ba9aeff24dc68df18fe8978348430",
"icons/app_logo.png": "dd16b8112f73da139260d3183c2f5d5b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/logo.png": "e1c47fe05010a40ac549b7f8f9b53781",
"index.html": "c1af21dfb4ca88d6b884d563e7b5b749",
"/": "c1af21dfb4ca88d6b884d563e7b5b749",
"loading.gif": "d71d8ccb7264fb1ca4a4ec9a871849d1",
"logo.png": "e1c47fe05010a40ac549b7f8f9b53781",
"main.dart.js": "df8b5edf31c80e943092e45fbbf75fe0",
"manifest.json": "3bee7f9d9a77418bbc52ca695a4fff6e",
"style.css": "f4e3e2e37e5fca9ae52bdb43534fff83",
"version.json": "dd24faeef7842bf6c24fdb320b26bb47"
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
