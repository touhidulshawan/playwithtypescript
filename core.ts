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

// array

let names: string[] = ["Mike", "Kai"];
// here names is array of string type
// we can not assign just string to this variable
// names = 'Mike' // Error
let numbers: Array<number>; // we can write array type this way.
numbers = [1, 3, 2];

// this is type alias
type ArrayProps = number | string | boolean;

// we can now store mix type like number, string, boolean in this array
let mixArray: Array<ArrayProps>;

mixArray = ["Mike", 20, true, "Kai", false, 25];
