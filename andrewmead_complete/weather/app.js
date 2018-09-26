const fs = require('fs');
const yargs = require('yargs');
const env = require('./env');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const getDefaultAddress = () => {
  try {
    return JSON.parse(fs.readFileSync('default-address.json')).default;
  } catch (e) {
    return undefined;
  }
};

const argv = yargs
  .command(
    'set',
    'Set default address',
    {
      default: {
        describe: 'Set default address',
        alias: 'd',
        string: true,
        demand: true,
      },
    },
    argv => {
      fs.writeFileSync(
        'default-address.json',
        JSON.stringify({ default: argv.default })
      );
    }
  )
  .command('$0', 'Default command', {
    address: {
      describe: 'Address to fetch weather for',
      alias: 'a',
      string: true,
      demand: true,
      default: getDefaultAddress(),
    },
  })
  .help()
  .alias('help', 'h').argv;

const command = argv._[0];

if (!command) {
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
      console.log(errorMessage.message);
    });
}
