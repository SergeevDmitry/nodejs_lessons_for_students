const request = require('request');
const yargs = require('yargs');

const GA_KEY = 'AIzaSyDDn9DHeujNua08f9vT2N8lNScEYN3bPSI'
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);

// 1301 lombard street

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GA_KEY}`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Google servers.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find that address.');
  } else {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitute: ${body.results[0].geometry.location.lng}`);
  }
})
