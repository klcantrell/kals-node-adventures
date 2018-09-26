const yargs = require('yargs');
const env = require('./env');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    address: {
      describe: 'Address to fetch weather for',
      alias: 'a',
      string: true,
      demand: true,
    },
  })
  .help()
  .alias('help', 'h').argv;

geocode
  .geocodeAddress(argv.address)
  .then(res => {
    const coordinates = `${res.latitude},${res.longitude}`;
    return weather.getCurrentTemperature(coordinates);
  })
  .then(res => {
    console.log(
      `It's currently ${res.temperature}, but it feels like ${
        res.apparentTemperature
      }`
    );
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });
