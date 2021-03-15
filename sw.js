// const cacheName = 'dabexPWA-v2';
// const cacheAssets = [
//     '/index.html',
//     '/css/home/style.css',
//     '/index.js'
// ]

// // cacheAssets.push('/modules/zoomPhoto.js');

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

// caches.delete('dabexPWA-v1');

// // self.addEventListener('activate', (e) => {
// //     e.waitUntil((async () => {
// //       const keyList = await caches.keys();
// //       await Promise.all(keyList.map((key) => {
// //         if (key === cacheName) { return; }
// //         await caches.delete(key);
// //       }))
// //     })());
// //   });