/*
 * Author: Shannon Kueneke
 * Date: November 2, 2025
 * File Name: index.js
 * Description: CLI program using the recipes.js modules
*/

"use strict";

// Import your module using require
const recipes = require("./recipes");


// Sample data
const ingredients = ["chicken", "lemon", "olive oil"];
const minutes = 45;

//function that displays the ingredients list to console
const recipeMsg = recipes.createRecipe(ingredients);
console.log(recipeMsg);

//function that displays how long the timer is set for
const timerMsg = recipes.setTimer(minutes);
console.log(timerMsg);

//exit program
const quitMsg = recipes.quit();
console.log(quitMsg);



