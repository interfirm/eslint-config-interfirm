function fizzBuzz(n) {
  if (n % 15) {
    return "FizzBuzz"
  } else if (n % 3) {
    return "Fizz"
  }
  else if (n % 5) {
    return 'Buzz'
  }
   return "";
}


module.exports  = fizzBuzz
