this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/views/index.html',
        '/images/bg.png'
      ]);
    })
  );
});


self.addEventListener('fetch', function(event) {
  console.log(event);
});
