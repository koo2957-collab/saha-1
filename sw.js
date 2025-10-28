// FIRE SLOTBOARD Service Worker
// 캐시 버전 관리 - 배포 시 이 값만 변경하면 캐시 자동 갱신
const CACHE_VERSION = 'v2.1.0';
const CACHE_NAME = `fire-slotboard-${CACHE_VERSION}`;
const urlsToCache = [
  './',
  './index.html',
  './firebase-config.js',
  './manifest.json',
  './sw.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://via.placeholder.com/192x192/FF9900/FFFFFF?text=F',
  'https://via.placeholder.com/512x512/FF9900/FFFFFF?text=F'
];

// Service Worker 설치
self.addEventListener('install', function(event) {
  console.log(`Service Worker 설치 중... (버전: ${CACHE_VERSION})`);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log(`캐시 열기: ${CACHE_NAME}`);
        return cache.addAll(urlsToCache);
      })
  );
});

// Service Worker 활성화
self.addEventListener('activate', function(event) {
  console.log(`Service Worker 활성화 (버전: ${CACHE_VERSION})`);
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log(`이전 캐시 삭제: ${cacheName} (현재: ${CACHE_NAME})`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 네트워크 요청 가로채기
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // 캐시에서 찾은 경우
        if (response) {
          return response;
        }
        
        // 네트워크에서 가져오기
        return fetch(event.request).then(function(response) {
          // 유효한 응답인지 확인
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // 응답 복제 (스트림이므로)
          var responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(function() {
          // 네트워크 실패 시 오프라인 페이지 표시
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// 백그라운드 동기화 (선택사항)
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    console.log('백그라운드 동기화 실행');
    // 여기에 오프라인에서 저장된 데이터를 동기화하는 로직 추가
  }
});

// 푸시 알림 (선택사항)
self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: './manifest.json',
      badge: './manifest.json',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});
