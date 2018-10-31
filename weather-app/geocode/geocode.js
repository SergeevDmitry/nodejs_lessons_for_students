const request = require('request');

const GA_KEY = 'AIzaSyDDn9DHeujNua08f9vT2N8lNScEYN3bPSI'

const geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GA_KEY}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitute: body.results[0].geometry.location.lng
      });
    }
  })
}

module.exports = {
  geocodeAddress
}