// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: ["B", "r", "a", "v", "o", "2", "0", "2","2"].
// b) Verify and explain:'B', 'r', 'a', 'v','o', ' ', '2', '0','2', '2'.
//  .split takes the string "Bravo 2022" and splits into individual arrays.


// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, Learn Student"
// b) Verify and explain: undefined because name is not defined in the console.log return.


// --------------------3) What will this log?

// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:[ 8, 10, 12, 14, 16 ] because each number in the array will be multiplied by 2.


// --------------------4) What will this log?

// var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain:[ 11, 13, 15 ] because having the filter remove anything the is even, which is % by 2 and have no remainders be removed.


// --------------------5) What will this log?

// var myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer:["JavaScript", "Ruby"]
// b) Verify and explain: JavaScript because the zero at the end of the console log tells to only return the first value in the languages array.  


// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Bravo",
//     this.year = 2022
//   }
// }
// var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: student George,  cohort Bravo, year 2022
// b) Verify and explain: student: 'George', cohort: 'Bravo', year: 2022
// Geroge is plugged in as the new variable name. So in the log that name is returned in with the details of the class, cohort and year.
