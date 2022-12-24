function geoFindMe() {

    const status = document.querySelector('#status');
    const distance = document.querySelector('#distance');
  
    function success(position) {
      const userLatitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      const restauratnLatitude = 40.752440;
      const restauratnLongitude = -73.973780;
  
      status.textContent = '';
      let calculateDistance = Math.round(getDistanceFromLatLonInKm(userLatitude, longitude, restauratnLatitude, restauratnLongitude))
      distance.textContent = `Distance to the restaurant is ${calculateDistance} km`
    }

    // Haversine formula
    function getDistanceFromLatLonInKm(userLatitude, userLongitude, restaurantLatitude, restaurantLongitude) {
      var R = 6371; 
      var dLat = deg2rad(restaurantLatitude-userLatitude);  
      var dLon = deg2rad(restaurantLongitude-userLongitude); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(userLatitude)) * Math.cos(deg2rad(restaurantLatitude)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; 
      return d;
    }
    
    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Finding distance…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-distance').addEventListener('click', geoFindMe);
  