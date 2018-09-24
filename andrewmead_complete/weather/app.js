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
    const {
      results: [
        {
          geometry: { location },
        },
      ],
    } = await res.json();
    console.log(JSON.stringify(location, undefined, 2));
  } catch (e) {
    console.log(`Error is: ${e}`);
  }
};

getLocation();
