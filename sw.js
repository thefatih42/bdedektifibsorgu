self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Kurulum sırasında dosyaları önbelleğe ekleyin
    event.waitUntil(
        caches.open('static-cache-v1')
            .then(cache => cache.addAll([
                '/',
                '/index.html',
                'image1.png',
                'bimage/logo.svg',
                'bimage/algida.jpg',
                'bimage/Coca-Cola_logo.png',
                'bimage/fanta.png',
                'bimage/disney.png',
                'bimage/Koroplast_Logo.png',
                'bimage/Puma_Logo.png',
                'bimage/Sabon_logo_gold.png',
                'bimage/_SOCAR.png',
                'bimage/Sprite_Logo.svg.png',
                'bimage/Red-Bull-logo-design1-preview.jpg',
                'bimage/Pepsi_2023.svg.png',
                'bimage/Ülker_logo.svg.png',
                'bimage/Eti_logosu.jpg',
                'bimage/522_torku_logo.jpg',
                'bimage/A101_logo.svg.png',
                'bimage/kitapyurdu-793.webp',
                'bimage/0552e06a-bad1-4f29-b4b5-05d117e4cf04-47448.webp',
                'bimage/Purina_ONE_logo.png',
                'bimage/Philips_logo_new.svg.png',
                'bimage/626_kahvedunyasi.jpg'
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
