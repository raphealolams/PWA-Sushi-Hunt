// var urlsToCache = [
//   '/',
//   '/feed',
//   '/stylesheets/main.css',
//   '/images/sushi.svg',
//   '/images/pin.svg',
//   '/images/star.svg',
//   '/images/direction.svg',
//   '/images/back.svg',
//   '/javascripts/main.js'
// ];
//
// version = 'v1';
//
// self.addEventListener('install', function(event) {
//   console.log('[ServiceWorker] Installed version', version);
//   event.waitUntil(
//     caches.open('sushi-v1')
//       .then(function(cache) {
//       console.log("opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });
//
// self.addEventListener('fetch', function(event){
//   event.respondWith(
//     caches.match(event.request)
//     .then(function(response){
//       if(response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });
//
// self.addEventListener('activate', function(event) {
//
//   var cacheWhitelist = ['sushi-v1'];
//
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

var urlsToCache_ = [
  '/',

  '/stylesheets/main.css',
  '/images/sushi.svg',
  '/images/pin.svg',
  '/images/star.svg',
  '/images/direction.svg',
  '/images/back.svg',
  '/javascripts/main2.js'
];

version = 'v2';

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Installed version', version);
  event.waitUntil(
    caches.open('sushi-v2')
      .then(function(cache) {
      console.log("opened cache");
      return cache.addAll(urlsToCache_);
    })
  );
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request)
    .then(function(response){
      if(response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['sushi-v2'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if('sushi-v2') {
            return;
          }
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleted old cache');
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
