const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIp('50.92.220.11', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

const coords = { 
  latitude: '49.2827291', 
  longitude: '-123.1207375' 
};

fetchISSFlyOverTimes(coords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

console.log('It worked! Returned flyover times:', passTimes);
});
