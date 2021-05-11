// core types
/*
1. number
2. string
3. boolean
4. object
5. array
*/

// number

let firstNumber: number; // firstNumber is number type variable
// firstNumber = "10" //  can not assign string to number variable
firstNumber = 10;

// string

let firstName: string; // firstName is string type variable
// firstName = 10 // can not assign number to string variable
firstName = "Mike";

// boolean

let isRaining = false; // isRaining is boolean type variable
// isRaining = 40 ; isRaining = "Raining" // can not assign number or string into boolean type variable
isRaining = true;

// object
// const Person = {
//   name: "Mike",
//   age: 30,
// };

// here Person is object type variable where Person is

const Person: {
  name: string;
  age: number;
} = {
  name: "Mike",
  age: 30,
};
