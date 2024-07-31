//Leap Year Checker:

function checkLeapYear(year) {
  return year % 4 === 0 || year % 100 !== 0 || year % 400 === 0
    ? `${year} is leap year`
    : `${year} is not leap year`;
}

console.log(checkLeapYear(2024));

// age ticket
function ticketChecker(age) {
  return age <= 10
    ? "price is 10$ "
    : age > 12 && age < 18
    ? "price is 15$"
    : "price is 18$";
}

console.log(ticketChecker(9));

//Fibonacci Sequence
const fibonacci = function (n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(7));

//Palindrome string
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str.at(str.length - 1)) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("madam"));
