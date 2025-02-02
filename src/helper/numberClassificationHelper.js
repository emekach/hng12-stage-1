exports.isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

exports.isPerfect = (num) => {
  if (num < 2) return false;

  let sum = 1; // Start with 1 as it's a proper divisor of all integers > 1

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i; // Add the complementary divisor
    }
  }

  return sum === num;
};

exports.isArmstrong = (num) => {
  const digits = String(num).split(''); // Convert number to a string to access each digit
  const power = digits.length; // Number of digits
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), power),
    0
  );
  return sum === num; // Return true if the sum equals the number
};

exports.getDigitSum = (num) => {
  return String(num)
    .split('') // Convert the number to an array of its digits
    .reduce((acc, digit) => acc + Number(digit), 0); // Sum the digits
};
