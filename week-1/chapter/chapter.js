//Array of recipes
const recipes = [
  {name: "Pasta", ingredients: "Noodles, Tomato Sauce"},
  {name: "Salad", ingredients: "Lettuce, Tomato, Cucumber"},
  {name: "Soup", ingredients: "Broth, Vegetables"}
];

//main function for the program
//displays the recipe name and ingredients in console
function main() {
  for (let i=0; i<recipes.length; i++) {
    console.log("Recipe: " + recipes[i].name + "\nIngredients: " + recipes[i].ingredients);
    console.log(""); //new line
  }
}
//call the main function
//main();

//to run through CLI, nav to folder where file is, then run command prompt = node fileName.js

function main2() {
  const nodeExecutable = process.argv[0];
  const fileBeingExecuted = process.argv[1];

  console.log("Node Executable: " + nodeExecutable);
  console.log("File being executed: " + fileBeingExecuted);
}
//main2();


function main3() {
  //check if user has entered a recipe name
  if (process.argv.length != 3) {
    console.error("Usage: node recipe-cli.js<recipe>"); //display error message
    process.exit(1); //exit with a non-zero error code
  }

  const recipe = process.argv[2]; //get the recipe from the cli args

  console.log("Recipe: " + recipe); //display the recipe name
}
//main3();


function main4() {
  //file: recipe-cli-extended.js

  //check if the user entered a recipe name and ingredients
  if (process.argv.length != 4) {
    console.error("Usage: node recipe-cli-extended.js <recipe> <ingredients>"); //display error msg
    process.exit(1); //exit program
  }

  const recipe = process.argv[2]; //get the recipe name from CLI args
  const ingredients = process.argv[3]; //get ingredients fro cli args

  console.log("Recipe: " + recipe); //display recipe name
  console.log("Ingredients: " + ingredients); //display ing
}
//main4();

const readline = require("readline"); //import readline modules

function main5() {
  //create readline interface object
  const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
  });

  //prompt the user to input a recipe name and ing
  rl.question("enter a recipe name: ", function(name) {
    rl.question("enter the ing: ", function(ing) {
      console.log(` Recipe name: ${name}`); //display name
      console.log(` Ing: ${ing}`); //display ing
      rl.close(); //close the readline obj
    });
  });
}
//main5();

function main6() {
  //create readline interface obj
  const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
  });

  //prompt user to input an ing and its quantity in tbsp
  rl.question("enter an ing: ", function(ing) {
    rl.question("enter how many tbsp: ", function(tbsp) {
      //check if input is a num
      if (isNaN(tbsp)) {
        console.error("input must be a num");
        process.exit(1);
      }
      const cups = (tbsp/16).toFixed(2);

      console.log(`For ${ing}, ${tbsp} tbsp = ${cups} cups.`);
      rl.close();
    });
  });
}
main6();