const graderModule = require("./grader");

function main() {
  //demonstrate the usage of our module
  console.log("Your letter grade for 100 is " + graderModule.getLetterGrade(100));
  console.log("Your letter grade for 89 is " + graderModule.getLetterGrade(89));
  console.log("Your letter grade for 72 is " + graderModule.getLetterGrade(72));
  console.log("Your letter grade for 61 is " + graderModule.getLetterGrade(61));
  console.log("Your letter grade for 59 is " + graderModule.getLetterGrade(59));
}
main();


/*
class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivideByZero";
  }
}

function divide(x, y) {
  if (y===0) {
    throw new DivideByZeroError("Cannot divide by zero");
  }
  return x/y;
}

function main(a, b) {
  try {
    const result = divide(a, b);
    console.log("The result is: " + result);
  } catch (err) {
    console.error("An error has occurred: " + err.message);
  }
}
  */