const CACHE_NAME = 'waie-practice-v3';
const ASSETS = [
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './slides/slide-01.png','./slides/slide-02.png','./slides/slide-03.png','./slides/slide-04.png','./slides/slide-05.png','./slides/slide-06.png','./slides/slide-07.png','./slides/slide-08.png','./slides/slide-09.png','./slides/slide-10.png','./slides/slide-11.png','./slides/slide-12.png','./slides/slide-13.png','./slides/slide-14.png','./slides/slide-15.png','./slides/slide-16.png','./slides/slide-17.png','./slides/slide-18.png','./slides/slide-19.png','./slides/slide-20.png','./slides/slide-21.png','./slides/slide-22.png','./slides/slide-23.png','./slides/slide-24.png','./slides/slide-25.png','./slides/slide-26.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.mode === 'navigate' || req.url.endsWith('/index.html')) {
    event.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(resp => resp || fetch(req).then(net => {
    const copy = net.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
    return net;
  })));
});
