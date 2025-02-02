const { default: axios } = require('axios');

exports.getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
    return response.data.text;
  } catch (err) {
    return 'No fun fact available for this number.';
  }
};
