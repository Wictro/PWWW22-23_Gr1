const restauratnLatitude = 40.752440;
const restauratnLongitude = -73.973780;
var userLatitude;
var userLongitude;

function findDistance() {
   if(userLatitude === undefined || userLongitude === undefined){
     alert("User coordinates not found, please try again!")
   }
   else {
    const distance = Math.round(getDistanceFromLatLonInKm(userLatitude, userLongitude, restauratnLatitude, restauratnLongitude))
    const showDistance = document.getElementById("distance-calculator")
    showDistance.innerHTML = "<h5 style='font-size: 18px;'>Distance to the restaurant is " + distance+" km</h5>"
   }
   
}

if (!navigator.geolocation) {
  alert('Geolocation is not supported by your browser');
} else {
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
  userLatitude = position.coords.latitude;
  userLongitude = position.coords.longitude;
}

function error() {
  console.log('Unable to retrieve your location');
}

// Haversine formula
function getDistanceFromLatLonInKm(userLatitude, userLongitude, restaurantLatitude, restaurantLongitude) {
  var R = 6371;
  var dLat = deg2rad(restaurantLatitude - userLatitude);
  var dLon = deg2rad(restaurantLongitude - userLongitude);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(userLatitude)) * Math.cos(deg2rad(restaurantLatitude)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

document.querySelector('#find-distance').addEventListener('click', findDistance);
