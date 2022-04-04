// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// leave test and something commented in

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.
// a) Create a test with expect statements for each of the variables provided.

describe ("multBy3", () => {
    it("takes in an array of numbers and returns an array with all the numbers multipled by 3", () => {
     const numbersArray1 = [6, 7, 8, 9, 10]
     const numbersArray2 = [24, 27, 30, 33, 36]
      expect(multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
// ReferenceError : multby3 in not defined 

const multBy3 = (array) => {
    return array.map(value => value * 3)
 } 

// b) Create the function that makes the test pass.
// PASS: ✓ takes in an array of numbers and returns an array with all the numbers multipled by 3.

// Input will be an arraay of numbers 
// Iterate on the array
// Use .map to iterate 
// Multiply the value inside of the map by 3 
// Return the result
// Output an array with all numbers multiplied





// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.


const numberDivisibleBy3 = (number) => {
    if (number === 0){
      return "you cannot divide by zero"
    } else if(number % 3 === 0 ){
    return " is divisible by 3"
     } else {
        return "is not divisible by three"
    }
  }
const num1 = 15
const num2 = 0
const num3 = -7
console.log(numberDivisibleBy3(num1))
console.log(numberDivisibleBy3(num2))
console.log(numberDivisibleBy3(num3))
describe("numberDivisibleBy3", () => {
    it("takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {
        expect(numberDivisibleBy3("is divisible by three")).toEqual("is not divisible by three")
        const num1 = 15
        const num2 = 0
        const num3 = -7
    })
  }) 
 
//Input numberDivisibleBy3 into the function
// Create an equastion that takes the number and divids it by 3 to see if it is divisible.
//PASS  ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (1 ms)

// a) Create a test with expect statements for each of the variables provided.

// create a if and if else statment to tell weather a number plugged in is divs by 3 or not.
//plug in 15 ,0, -7 to see if when run through the function they are divisible by 3.
// console.log the numbers plugged in to see if they are plugged into the function properly.

// const num1 = 15
// Expected output: "15 is divisible by three"
// const num2 = 0
// Expected output: "0 is divisible by three"
// const num3 = -7
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Fill in the numbers properly to make sure the fuctions runs all the numbers and passess as well.




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// create a function to capitalize all the first letters by selecting all of the arrays with map
// then select the first character with charAt0
//then uppercase that character with .toUpperCase
// then set the value to 1 and lower case to every character after 0 is lowercased.

// a) Create a test with expect statements for each of the variables provided.

// input the appropriate functions for expect statments; it, and expect(upperCase(randomNouns1)),expect(upperCase(randomNouns2)).

// b) Create the function that makes the test pass.

// Connect the function to the expect statments and run jest test.

// PASS takes in an array of words and returns an array with all the words capitalized. (1 ms)

// describe("upperCase", () => {
//     it("takes in an array of words and returns an array with all the words capitalized.", () => {
//       const randomWord1 = []
//       const randomWord2 = []
//       expect(upperCase(randomWord1))
//       expect(upperCase(randomWord2))
//     })
//   })

// const upperCase = (string) => {
//   return string.map(value=> {
//     return value.charAt(0).toUpperCase() + value.substring(1);
//   })
// }

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// Write a function and within in that function identify all vowel letters
// itereate through each vowel letter 
// Using iteration sort through the words to identify all vowel letters and use push to remove the first vowel of the strings iterated on.
// a) Create a test with expect statements for each of the variables provided.
// connect describe and expect statments to the function created  to "takes in a string and logs the index of the first vowel"
// b) Create the function that makes the test pass.
// Run the test and if Fail appeares make fail error and try to get to pass.
// FAIL ● Test suite failed to run
// Jest encountered an unexpected token
// Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.


describe("vowelSpotter", () => {
    it("takes in a string and logs the index of the first vowel", () => {
      const vowelRun1 = []
      const vowelRun2 = []
      const vowelRun3 = []
      expect(vowelIdentify(vowelRun1))
      expect(vowelIdentify(vowelRun2))
      expect(vowelIdentify(vowelRun3))
    })
  const vowels = ['a', 'e', 'i', 'o', 'u'];
const vowelIdentify = (value) => {
  let foundSpots = []
  for(let i = 0; i < value.length ; i++) {
    if (vowels.indexOf(value[i]) > -1){
        foundSpots.push(i);
    }
  } 
  return foundSpots.sort()[0]
}