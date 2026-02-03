const CACHE_NAME = 'petrovalv-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './Petrovalvula.png.png'
];

// Instala e salva os arquivos no celular
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responde mesmo quando estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
