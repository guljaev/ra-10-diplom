"use strict";var precacheConfig=[["/ra-10-diplom/index.html","9d34e8ede8f2d35b4ac3ba5944390126"],["/ra-10-diplom/static/css/main.f665d44d.css","cb186fe84fb4f091f0d79c97ff947151"],["/ra-10-diplom/static/js/main.61670a3e.js","c5d7fa7bf5d9ab6b0527e4c86ceb1bef"],["/ra-10-diplom/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/ra-10-diplom/static/media/fontawesome-webfont.acf3dcb7.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/ra-10-diplom/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/ra-10-diplom/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/ra-10-diplom/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/ra-10-diplom/static/media/new-deals__product_1.98300308.jpg","98300308beffe1eac6cd27673f556928"],["/ra-10-diplom/static/media/new-deals__product_2.7cb85f96.jpg","7cb85f9610309ba9a830bd78a113b0b5"],["/ra-10-diplom/static/media/new-deals__product_active.929e12c3.jpg","929e12c36e07f6b35cfebff1797f9fe9"],["/ra-10-diplom/static/media/product-card__favourite-product-pic.7ba63a4b.png","7ba63a4bc8a50f813d11defeadee30e3"],["/ra-10-diplom/static/media/product-catalogue__overlooked-slider-item-1.f423f579.png","f423f579d1dd97c25a0c6585c906133b"],["/ra-10-diplom/static/media/product-catalogue__overlooked-slider-item-2.91cb383f.png","91cb383f3f1fb775254bf2e9d96f7f5e"],["/ra-10-diplom/static/media/product-catalogue__overlooked-slider-item-3.9f375324.png","9f375324f5dec4499d102cca7adbe753"],["/ra-10-diplom/static/media/product-catalogue__overlooked-slider-item-4.5e842c73.png","5e842c7301a612fb2632fdbcbcb5dee2"],["/ra-10-diplom/static/media/product-catalogue__overlooked-slider-item-5.350013cd.png","350013cd87b92b71a4e7adb49ee6bd09"],["/ra-10-diplom/static/media/sales-and-news__item_1.5e217ba5.jpg","5e217ba5253e6079c243bef0b195aabd"],["/ra-10-diplom/static/media/sales-and-news__item_2.57c5128c.jpg","57c5128c1752d71448ee3223b456e52e"],["/ra-10-diplom/static/media/sales-and-news__item_3.f53060a0.jpg","f53060a0f4f10f211dd12521c15b9fd4"],["/ra-10-diplom/static/media/sales-and-news__item_4.b11b7687.jpg","b11b7687a55b887bdd2ea3ea1eaa1687"],["/ra-10-diplom/static/media/slider.d613d452.jpg","d613d452bebe22d8b7d737ec12001e04"],["/ra-10-diplom/static/media/slider180deg.54638011.jpeg","54638011c75501dec7517369019fc591"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/ra-10-diplom/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});