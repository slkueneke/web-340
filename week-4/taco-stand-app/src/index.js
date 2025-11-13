/**
 * Author: Shannon Kueneke
 * Date:  November 12, 2025
 * File Name: index.js
 * Description: CLI program 
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("../src/taco-stand.js");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//event listeners
tacoStand.on("serve", (customer) => {
  console.log(` Taco Stand serves: ${customer}. `);
});

tacoStand.on("prepare", (taco) => {
  console.log(` Taco Stand prepares: ${taco} taco. `);
});

tacoStand.on("rush", (rush) => {
  console.log(` Taco Stand handles rush: ${rush} `);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const arg = args.join(" "); 

  switch (command) {
    case "serve":
      tacoStand.serveCustomer(arg);
      break;
    case "prepare":
      tacoStand.prepareTaco(arg);
      break;
    case "rush":
      tacoStand.handleRush(arg);
      break;
    default:
      console.log("Unknown command. Try 'serve', 'prepare', or 'rush'.");
  }
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);