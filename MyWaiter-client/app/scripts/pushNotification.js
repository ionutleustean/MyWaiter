

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  // '/styles/main.css',
  // '/script/main.js'
];

console.log('Started', self);
self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'Confirmare comandă';
  var body = 'Comanda va fi livrata in cel mai scurt timp';
  var icon = '/images/icon-192x192.png';
  var tag = 'simple-push-demo-notification-tag';

  console.log(self);


  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});