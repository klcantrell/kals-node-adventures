const yargs = require('yargs');
const fetch = require('node-fetch');
const env = require('./env');

const geocode = require('./geocode/geocode');

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

const getCurrentTemperature = async (coordinates, cb) => {
  const url = `https://i34eo8f73h.execute-api.us-east-2.amazonaws.com/darksky/your-current-weather/${coordinates}`;
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (data.error) {
      cb(data.error);
    } else if (res.ok && res.status === 200) {
      cb(`${data.currently.temperature}\u00B0F`);
    }
  } catch (e) {
    console.log('Unable to connect to Dark Sky servers');
  }
};

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    const coordinates = `${results.latitude},${results.longitude}`;
    getCurrentTemperature(coordinates, (errorMessage, results) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(results);
      }
    });
  }
});
