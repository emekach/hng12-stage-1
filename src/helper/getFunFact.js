const { default: axios } = require('axios');

exports.getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (err) {
    return 'No fun fact available for this number.';
  }
};
