const { default: axios } = require('axios');
const { isArmstrong } = require('./../helper/numberClassificationHelper');
exports.getFunFact = async (num) => {
  if (isArmstrong(num)) {
    const digits = String(num).split('');
    const explanation = digits.map((d) => `${d}^${digits.length}`).join(' + ');
    return `${num} is an Armstrong number because ${explanation} = ${num}`;
  }
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return 'No fun fact available.';
  }
};
