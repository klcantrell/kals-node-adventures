const fetch = require('node-fetch');

const getCurrentTemperature = async coordinates => {
  const url = `https://i34eo8f73h.execute-api.us-east-2.amazonaws.com/darksky/your-current-weather/${coordinates}`;
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (data.error) {
      throw Error(data.error);
    } else if (res.ok && res.status === 200) {
      return {
        temperature: data.currently.temperature,
        apparentTemperature: data.currently.apparentTemperature,
      };
    }
  } catch (e) {
    throw e.name === 'Error'
      ? e
      : Error('Unable to connect to Dark Sky servers');
  }
};

module.exports = {
  getCurrentTemperature,
};
