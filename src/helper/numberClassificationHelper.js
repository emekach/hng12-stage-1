exports.isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

exports.isPerfect = (num) => {
  if (num < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

exports.isArmstrong = (num) => {
  const digits = String(num).split('');
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === num;
};

exports.getDigitSum = (num) => {
  // Handle negative numbers by taking their absolute value
  const absoluteNum = Math.abs(num);
  return String(absoluteNum)
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);
};
