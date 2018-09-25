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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    const coordinates = `${results.latitude},${results.longitude}`;
    weather.getCurrentTemperature(coordinates, (errorMessage, results) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(
          `It's currently ${results.temperature}, but it feels like ${
            results.apparentTemperature
          }`
        );
      }
    });
  }
});
