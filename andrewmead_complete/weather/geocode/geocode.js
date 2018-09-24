const fetch = require('node-fetch');

const geocodeAddress = async (address, cb) => {
  const addressURIComponent = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURIComponent}&key=${
    process.env.API_KEY
  }`;

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await res.json();
    if (body.status === 'ZERO_RESULTS') {
      return cb('Unable to find that address');
    } else if (body.status === 'OK') {
      const {
        results: [data],
      } = body;
      cb(null, {
        address: data.formatted_address,
        latitude: data.geometry.location.lat,
        longitude: data.geometry.location.lng,
      });
    }
  } catch (e) {
    cb(`Unable to connect to Google servers: ${e}`);
  }
};

module.exports = {
  geocodeAddress,
};
