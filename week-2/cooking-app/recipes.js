/*
 * Author: Shannon Kueneke
 * Date: November 2, 2025
 * File Name: recipes.js
 * Description: modules for listing recipes ingredients, setting a timer and exiting the program
*/

"use strict";

// Define the createRecipe function
function createRecipe(ingredients) {
  let ingredientString = ingredients.join(', ');
  return "Recipe created with ingredients: " + ingredientString;
}

// Define the setTimer function
function setTimer(minutes) {
  return "Timer set for " + minutes + " minutes";
}

// Define the quit function
function quit() {
  return "Program exited";
}

// Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
};