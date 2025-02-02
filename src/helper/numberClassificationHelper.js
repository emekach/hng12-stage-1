exports.isPrime = (num) => {
  if (num < 2) return false;

  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
    // console.log(num);
  }

  return true;
};

exports.isPerfect = (num) => {
  if (num < 2) return false;

  let sum = 1;

  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i) {
      sum += i;
      if (i != num / i) sum += num / i;
    }
  }

  return sum === num;
};

exports.isArmstrong = (num) => {
  if (num < 0) return false; // Add check for negative numbers
  const digits = String(num).split('');
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), power),
    0
  );
  return sum === num;
};

exports.getDigitSum = (num) => {
  return String(num)
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);
};
