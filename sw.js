self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Kurulum sırasında dosyaları önbelleğe ekleyin
    event.waitUntil(
        caches.open('static-cache-v1')
            .then(cache => cache.addAll([
                '/',
                '/index.html',
                'image1.png',
                '/logo.svg'
            ]))
    );
});

self.addEventListener('fetch', event => {
    console.log('Service Worker fetching:', event.request.url);
    // Öncelikle önbelleği kontrol edin, eğer önbellekte yoksa ağdan yükleyin
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
