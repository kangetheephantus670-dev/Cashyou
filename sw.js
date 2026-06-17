const CACHE_NAME = 'cashyou-v1';
const urlsToCache = [
  './',
  'cashyou-client.html',
  'cashyou-admin.html',
  'offline.html',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('offline.html'))
  );
});
