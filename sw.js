importScripts('/cache-polyfill.js');
//adding the code to cache the images,js, css,html

self.addEventListener('install', function(event) {
 event.waitUntil(
   caches.open('mws-restaurant-stage-1-master-cache-v1').then(
    function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/manifest.json',
       '/css/styles.css',
       '/js/main.js',
       '/js/dbhelper.js',
       '/js/restaurant_info.js',
       'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
       'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
       //'/data/restaurants.json',
       'http://localhost:1337/restaurants',
       'restaurant.html?id=1',
       'restaurant.html?id=2',
       'restaurant.html?id=3',
       'restaurant.html?id=4',
       'restaurant.html?id=5',
       'restaurant.html?id=6',
       'restaurant.html?id=7',
       'restaurant.html?id=8',
       'restaurant.html?id=9',
       'restaurant.html?id=10',
       '/img/1.jpg',
       '/img/2.jpg',
       '/img/3.jpg',
       '/img/4.jpg',
       '/img/5.jpg',
       '/img/6.jpg',
       '/img/7.jpg',
       '/img/8.jpg',
       '/img/9.jpg',
       '/img/10.jpg',
       'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
       'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
       'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24639.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24640.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24639.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24640.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24639.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24640.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24646.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24647.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24648.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24646.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24647.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24648.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24646.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24647.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24648.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24641.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24642.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24641.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24642.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24641.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',
       'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24642.jpg70?access_token=pk.eyJ1IjoibmJlbmd0MTQiLCJhIjoiY2pqbXd1cjR3MTZlZDN2bWY3bXExN3h3eSJ9.c7bOXSuFkNWpA4GutuYkhw',        

     ]);
   })
 );
});
//code that fetches data from cache when offline
self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});

