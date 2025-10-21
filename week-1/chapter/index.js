//npm install chalk@4

const chalk = require("chalk");
const readline = require("readline");

//function to return the color msg based on the color selected
function colorMessage(color) {
  const output = "\nYour favorite color is "; //output string

  //switch statement to match the color to the color msg
  switch (color) {
    case "1":
      color = "blue";
      return chalk.blue(output + color);
    case "2":
      color = "red";
      return chalk.red(output + color);
    case "3":
      color = "green";
      return chalk.green(output + color);
    case "4":
      color = "yellow";
      return chalk.yellow(output + color);
    case "5":
      color = "orange";
      return chalk.orange(output + color);
    default:
      return "invalid color";
  }
}

function menu() {
  //display a menu with the available color options
  //blue,red,green,yellow,orange
  console.log("\nAvailable colors:");
  console.log("1. blue");
  console.log("2. red");
  console.log("3. green");
  console.log("4. yellow");
  console.log("5. orange");
}

function main() {
  //create a readline obj
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  menu(); //display menu

  //prompt user to select color
  rl.question("\nWhat is your fave color? ", function (answer) {
    console.log(colorMessage(answer)); //display color msg
    rl.close();
  });
}
main();
