const { default: axios } = require('axios');
const { isArmstrong } = require('./../helper/numberClassificationHelper');

exports.getFunFact = async (num, isArmstrong) => {
  if (isArmstrong) {
    const digits = String(num).split('');
    const explanation = digits.map((d) => `${d}^${digits.length}`).join(' + ');
    return `${num} is an Armstrong number because ${explanation} = ${num}`;
  }
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch {
    return 'No fun fact available.';
  }
};
