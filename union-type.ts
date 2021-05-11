// * UNION TYPE

const concat = (firstInput: number | string, secondInput: number | string) => {
  if (typeof firstInput === "number" && typeof secondInput === "number") {
    return firstInput + secondInput;
  }

  return firstInput.toString() + secondInput.toString();
};

// here //* number | string *// is called union type
