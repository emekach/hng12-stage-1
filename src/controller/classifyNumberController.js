const catchAsync = require('./../utils/catchAsync');

const {
  isPrime,
  isPerfect,
  isArmstrong,
  getDigitSum,
} = require('./../helper/numberClassificationHelper');

const { getFunFact } = require('./../helper/getFunFact');

exports.classifyNumber = catchAsync(async (req, res, next) => {
  // Extract the number from the query parameters
  const number = req.query.number;

  // Validate input: Check if the number is a valid integer
  if (isNaN(number)) {
    return res.status(400).json({
      number,
      error: true,
    });
  }

  // Calculate properties
  const prime = isPrime(num);
  const perfect = isPerfect(num);
  const armstrong = isArmstrong(num);
  const digitSum = getDigitSum(num);
  const funFact = await getFunFact(num, armstrong);

  // Determine properties
  let properties = [];
  // Check Armstrong and odd/even properties
  if (isArmstrong(num)) result.properties.push('armstrong');
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
