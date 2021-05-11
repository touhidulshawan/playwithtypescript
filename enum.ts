//* Enum automatically create global constants identifiers.

enum Role {
  ADMIN,
  TEACHER,
  STUFF,
}

const Person = {
  name: "Mike",
  age: 28,
  isEmployed: true,
  jobRole: Role.ADMIN,
};

const Person2 = {
  name: "Kai",
  age: 38,
  isEmployed: true,
  jobRole: Role.TEACHER,
};

Person.jobRole = Role.STUFF;
