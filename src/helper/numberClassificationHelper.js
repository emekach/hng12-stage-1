exports.isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

exports.isPerfect = (n) => {
  if (n <= 1) return false;

  let sum = 1;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum === n;
};

exports.isArmstrong = (num) => {
  const digits = num.toString().split('').map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

exports.getDigitSum = (num) => {
  return num
    .toString()
    .split('')
    .reduce((sum, d) => sum + Number(d), 0);
};
