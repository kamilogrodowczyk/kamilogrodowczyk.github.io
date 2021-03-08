// const URLS = [
//     '/kamilogrodowczyk.github.io/',
//     '/kamilogrodowczyk.github.io/index.html'
// ]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(["/", "css/home"])
        })
    );
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})

// self.addEventListener('install', e => {
//     e.waitUntil(
//         caches.open('static').then(cache => {
//             return cache.addAll(URLS)
//         })
//     );
// })