// const cacheName = 'dabexPWA-v1';


// self.addEventListener('install', e => {
//     e.waitUntil((async () => {
//         const cache = await caches.open(cacheName);
//         await cache.addAll(cacheAssets);
//     })());
// })

// self.addEventListener('fetch', e => {
//     e.respondWith((async () => {
//         const r = await caches.match(e.request);
//         if(r) { return r; }
//         const response = await fetch(e.request);
//         const cache = await caches.open(cacheName);
//         cache.put(e.request, response.clone());
//         return response;
//     })());
// })

// caches.delete(cacheName);

// self.addEventListener('activate', (e) => {
//     e.waitUntil((async () => {
//       const keyList = await caches.keys();
//       await Promise.all(keyList.map((key) => {
//         if (key === cacheName) { return; }
//         await caches.delete(key);
//       }))
//     })());
//   });