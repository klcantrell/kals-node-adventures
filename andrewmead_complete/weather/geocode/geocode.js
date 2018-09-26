const fetch = require('node-fetch');

const geocodeAddress = async address => {
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
      throw Error('Unable to find that address');
    } else if (body.status === 'OK') {
      const {
        results: [data],
      } = body;
      return {
        address: data.formatted_address,
        latitude: data.geometry.location.lat,
        longitude: data.geometry.location.lng,
      };
    }
  } catch (e) {
    throw e.name === 'Error' ? e : Error(`Unable to connect to Google servers`);
  }
};

module.exports = {
  geocodeAddress,
};
