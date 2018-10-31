const request = require('request');

const DARKSKY_KEY = 'b185a96a4f76cf580aa716e484570780'

const getWeather = (latitude, longitute, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${DARKSKY_KEY}/${latitude},${longitute}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to DarkSky servers.');
    } else if (body.code === 400) {
      callback('Unable to find that location.');
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        summary: body.currently.summary,
        visibility: body.currently.visibility
      });
    }
  })
}

//https://api.darksky.net/forecast/b185a96a4f76cf580aa716e484570780/37.8267,-122.4233

module.exports = {
  getWeather
}
