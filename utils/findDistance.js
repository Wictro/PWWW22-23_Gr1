const worker = new Worker('worker.js');

navigator.geolocation.getCurrentPosition(position => {
  const userLatitude = position.coords.latitude;
  const userLongitude = position.coords.longitude;
});

const pointLatitude = 40.752440;
const pointLongitude = -73.973780;

worker.postMessage({
  userLatitude,
  userLongitude,
  pointLatitude,
  pointLongitude
});

worker.addEventListener('message', event => {
  const distance = event.data;
  document.querySelector('#distance').innerHTML = `Distance from your location to the specified point is ${distance}`;
});
