// let number = 100
const fizzBuzz = function (number) {
  return number
}

let number = 100

// for (let i = 0; i <= number; i++) {
// console.log(fizzBuzz(i))
// }

for (let i = 0; i <= number; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Fizz")
  } else if (i % 3 !== 0 && i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 15 === 0) {
    console.log("FizzBuzz")
  } else {
    console.log(fizzBuzz(i))
  }
}
