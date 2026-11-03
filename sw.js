// 홈 화면 앱으로 설치되게 하는 최소 장치. 아무것도 저장(캐시)하지 않고 그대로 인터넷에서 불러옵니다.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
