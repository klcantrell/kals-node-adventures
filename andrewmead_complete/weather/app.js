const fetch = require('node-fetch');
const yargs = require('yargs');
const env = require('./env');

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

const addressURIComponent = encodeURIComponent(argv.address);
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURIComponent}&key=${
  process.env.API_KEY
}`;

const getLocation = async () => {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await res.json();
    if (body.status === 'ZERO_RESULTS') {
      return console.log('Unable to find that address');
    } else if (body.status === 'OK') {
      const {
        results: [data],
      } = body;
      console.log(data.formatted_address);
      console.log(data.geometry.location);
    }
  } catch (e) {
    console.log(`Unable to connect to Google servers ${e}`);
  }
};

getLocation();
