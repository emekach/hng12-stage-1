const catchAsync = require('./../utils/catchAsync');

const {
  isPrime,
  isPerfect,
  isArmstrong,
  getDigitSum,
} = require('./../helper/numberClassificationHelper');

const { getFunFact } = require('./../helper/getFunFact');

exports.classifyNumber = catchAsync(async (req, res, next) => {
  const { number } = req.query;

  // Input validation
  if (!number || !/^-?\d+$/.test(number)) {
    return res.status(400).json({
      number: number || 'null',
      error: true,
    });
  }

  const num = parseInt(number, 10);

  const prime = isPrime(num);
  const perfect = isPerfect(num);
  const armstrong = isArmstrong(num);
  const digitSum = getDigitSum(num);
  const funFact = await getFunFact(num);

  let properties = [];
  if (armstrong) properties.push('armstrong');
  if (num % 2 === 0) properties.push('even');
  else properties.push('odd');

  res.status(200).json({
    number: num,
    is_prime: prime,
    is_perfect: perfect,
    properties,
    digit_sum: digitSum,
    fun_fact: funFact,
  });
});
