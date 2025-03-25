const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
    '/',
    '/projects/',
    '/about/',
    '/contact/',
    '/tictactoe/',
    '/css/style.css',
    '/css/custom.css',
    '/js/main.js',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png'
];

// Install service worker and cache resources
self.addEventListener('install', event =>
{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache =>
            {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', event =>
{
    event.waitUntil(
        caches.keys().then(cacheNames =>
        {
            return Promise.all(
                cacheNames.map(cacheName =>
                {
                    if (cacheName !== CACHE_NAME)
                    {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch resources from cache or network
self.addEventListener('fetch', event =>
{
    event.respondWith(
        caches.match(event.request)
            .then(response =>
            {
                // Return cached response if found
                if (response)
                {
                    return response;
                }

                // Clone the request because it can only be used once
                const fetchRequest = event.request.clone();

                // Make network request and cache the response
                return fetch(fetchRequest).then(response =>
                {
                    // Check if response is valid
                    if (!response || response.status !== 200 || response.type !== 'basic')
                    {
                        return response;
                    }

                    // Clone the response because it can only be used once
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache =>
                        {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
    );
}); 