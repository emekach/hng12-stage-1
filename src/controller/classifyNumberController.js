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

  // Input Validation
  if (isNaN(number) || !Number.isInteger(Number(number))) {
    return res.status(400).json({
      number: number,
      error: true,
    });
  }

  const num = Number(number);

  // Calculate properties
  const prime = isPrime(num);
  const perfect = isPerfect(num);
  const armstrong = isArmstrong(num);
  const digitSum = getDigitSum(num);
  const funFact = await getFunFact(num);

  // Determine properties
  let properties = [];
  // Check Armstrong and odd/even properties
  if (isArmstrong(num)) properties.push('armstrong');
  properties.push(num % 2 === 0 ? 'even' : 'odd');

  // Send the response
  res.status(200).json({
    number: num,
    is_prime: prime,
    is_perfect: perfect,
    properties,
    digit_sum: digitSum,
    fun_fact: funFact,
  });
});
