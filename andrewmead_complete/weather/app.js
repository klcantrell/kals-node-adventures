const fetch = require('node-fetch');
const env = require('./env');

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=${process.env.API_KEY}`;

const getLocation = async () => {
  const res = await fetch(url);
  const { results: [ { geometry: { location } } ]  } = await res.json();
  console.log(JSON.stringify(location, undefined, 2));
};

getLocation();