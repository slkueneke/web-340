//file: gardener-returns-home.js

"use strict";

let gardener = {
  name: "Art Moze",
  location: "Rose Garden"
};


function returnToHouse() {
  console.log(`${gardener.name} has finished tending to the ${gardener.location}.`);
  //process.exit();
  //nonExistentFunction();
  setTimeout(()=> {
    console.log(`${gardener.name} returns to the house.`);
    cleanTools();
  },4000);
}

function cleanTools() {
  console.log(`${gardener.name} is cleaning his tools.`);
}

process.on("beforeExit", () => {
  console.log(`${gardener.name} is going to rest.`);
});

process.on("exit", ()=> {
  console.log(`${gardener.name} has returned to the house. Good job, Art!`);
});

process.on("uncaughtException", (err)=> {
  console.log(`An error has occurred: ${err.message}`);
  console.log(`${gardener.name} will return to the house to recover.`);
  process.exit(1);
})

setTimeout(returnToHouse, 2000);