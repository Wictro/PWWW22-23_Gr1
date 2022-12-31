self.addEventListener('message', event => {
    const data = event.data;
    const userLatitude = data.userLatitude;
    const userLongitude = data.userLongitude;
    const pointLatitude = data.pointLatitude;
    const pointLongitude = data.pointLongitude;
  
    const distance = getDistanceFromLatLonInKm(userLatitude, userLongitude, pointLatitude, pointLongitude);
  
    self.postMessage(distance);
  });
  
  function getDistanceFromLatLonInKm(userLatitude, userLongitude, pointLatitude, pointLongitude) {
    var R = 6371; 
    var dLat = deg2rad(pointLatitude-userLatitude);  
    var dLon = deg2rad(pointLongitude-userLongitude); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(userLatitude)) * Math.cos(deg2rad(pointLatitude)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; 
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  
