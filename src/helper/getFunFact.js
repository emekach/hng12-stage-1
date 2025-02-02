const { default: axios } = require('axios');

exports.getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
    let funFact = response.data.text;

    funFact = funFact.replace(/narcissistic number/i, 'Armstrong number');

    if (funFact.includes('Armstrong number')) {
      const digits = num.toString().split('');
      const sum = digits.reduce(
        (acc, digit) => acc + Math.pow(parseInt(digit), digits.length),
        0
      );
      funFact += ` because ${digits
        .map((d) => `${d}^${digits.length}`)
        .join(' + ')} = ${num}`;
    }

    return funFact;
  } catch (err) {
    return 'No fun fact available for this number.';
  }
};
