//? TUPLE

//! tuple does not exists on javaScript
//tuple is a fixed length array in typescript

//* example

const Person: {
  name: string;
  age: number;
  role: [number, string]; // we fixed this as tuple //* fixed length array with fixed type.
} = {
  name: "Mike",
  age: 25,
  role: [1, "Admin"], // act as tuple now
};

// Person.role[0] = "Mike"; //! can`t assign string to number type

// push method is exceptional in tuple
Person.role.push("Kai"); //! does not give any error. but logically this is not correct.

// ! can not add third value here. because we declare that our tuple will contain only two elements type of number and string.
// Person.role = [3, "Author", "Assistant"]
