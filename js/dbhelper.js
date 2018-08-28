
/**
 * Common database helper functions.
 */
class DBHelper {

  /**
   * Database URL.
   * Change this to restaurants.json file location on your server.
   */
  static openDB(){
  var dbPromise = idb.open('restaurant-db', 1, function(upgradeDb) {
    var restStore = upgradeDb.createObjectStore('restStore',{keyPath: 'id'});
  });
  return dbPromise;
  }
  /*
  Open Indexed DB and store the data to Indexed DB
  */
  static storeRestDataDB(restData){
      return DBHelper.openDB().then(db => {
      if(!db) return;
      const transaction = db.transaction('restStore', 'readwrite');
      const restStore = transaction.objectStore('restStore');
      restData.forEach(restaurant => {
        restStore.put(restaurant);
      });
      return transaction.complete;
    }).then(() => {
      console.log('Restaurants Saved to IndexedDB');
    });
}

  static get DATABASE_URL() {
    //const port = 8000 // Change this to your server port
    //return `http://localhost:${port}/data/restaurants.json`;
    const port = 1337 // Change this to your server port from where data is fetch
    return `http://localhost:${port}/restaurants`;
  }
  /*
  Fetch the data from Indexed DB
  */
  static dbRestaurantData(){
    let restData = DBHelper.openDB().then(db => {
        if (db){
          return db.transaction('restStore').objectStore('restStore').getAll();
            }
          });
    return restData;
  }
  /*
  Fetch the data from API which is deployed at 1337 and 
  then store that data to Indexed DB
  */
  static apiRestaurantData(){
    let url = `${DBHelper.DATABASE_URL}`;
    let restData = fetch(url).then((restaurant_data) =>{
          return restaurant_data.json();
    }).then((data)=>{
        //console.log('api data', data);
        DBHelper.storeRestDataDB(data);
        return data;
    })
    return restData;
  }

  /**
   * Fetch all restaurants.
   */
  static fetchRestaurants(callback) {
      return DBHelper.dbRestaurantData().then(restaurants => {
      if(restaurants.length) {
        return Promise.resolve(restaurants);
      } else {
        return DBHelper.apiRestaurantData();
      }
    }).then(restaurants => {
      callback(null, restaurants);
    }).catch(error => {
      callback(error, null);
    })
  };

  /**
   * Fetch a restaurant by its ID.
   */
  static fetchRestaurantById(id, callback) {
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const restaurant = restaurants.find(r => r.id == id);
        if (restaurant) { // Got the restaurant
          callback(null, restaurant);
        } else { // Restaurant does not exist in the database
          callback('Restaurant does not exist', null);
        }
      }
    });
  }

  /**
   * Fetch restaurants by a cuisine type with proper error handling.
   */
  static fetchRestaurantByCuisine(cuisine, callback) {
    // Fetch all restaurants  with proper error handling
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given cuisine type
        const results = restaurants.filter(r => r.cuisine_type == cuisine);
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by a neighborhood with proper error handling.
   */
  static fetchRestaurantByNeighborhood(neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given neighborhood
        const results = restaurants.filter(r => r.neighborhood == neighborhood);
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by a cuisine and a neighborhood with proper error handling.
   */
  static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        let results = restaurants
        if (cuisine != 'all') { // filter by cuisine
          results = results.filter(r => r.cuisine_type == cuisine);
        }
        if (neighborhood != 'all') { // filter by neighborhood
          results = results.filter(r => r.neighborhood == neighborhood);
        }
        callback(null, results);
      }
    });
  }

  /**
   * Fetch all neighborhoods with proper error handling.
   */
  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)
        // Remove duplicates from neighborhoods
        const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  /**
   * Fetch all cuisines with proper error handling.
   */
  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
        callback(null, uniqueCuisines);
      }
    });
  }

  /**
   * Restaurant page URL.
   */
  static urlForRestaurant(restaurant) {
    return (`./restaurant.html?id=${restaurant.id}`);
  }

  /**
   * Restaurant image URL.
   */
  static imageUrlForRestaurant(restaurant) {
    restaurant.photograph = `${restaurant.id}`+'.jpg';
    return (`/img/${restaurant.photograph}`);
  }

  /**
   * Map marker for a restaurant.
   */
   static mapMarkerForRestaurant(restaurant, map) {
    // https://leafletjs.com/reference-1.3.0.html#marker  
    const marker = new L.marker([restaurant.latlng.lat, restaurant.latlng.lng],
      {title: restaurant.name,
      alt: restaurant.name,
      url: DBHelper.urlForRestaurant(restaurant)
      })
      marker.addTo(newMap);
    return marker;
  } 
  /* static mapMarkerForRestaurant(restaurant, map) {
    const marker = new google.maps.Marker({
      position: restaurant.latlng,
      title: restaurant.name,
      url: DBHelper.urlForRestaurant(restaurant),
      map: map,
      animation: google.maps.Animation.DROP}
    );
    return marker;
  } */

}
