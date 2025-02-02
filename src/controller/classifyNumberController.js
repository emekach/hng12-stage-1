const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const {
  isPrime,
  isPerfect,
  isArmstrong,
  getDigitSum,
} = require('./../helper/numberClassificationHelper');

const { getFunFact } = require('./../helper/getFunFact');

exports.classifyNumber = catchAsync(async (req, res, next) => {
  const { number } = req.query;
  //   console.log(req.query);
  //   console.log(number);

  if (isNaN(number) || number === undefined) {
    return res.status(400).json({
      number: number,
      error: true,
    });
  }

  const num = Number(number);
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
