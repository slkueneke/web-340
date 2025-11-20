/**
 * Author: Shannon Kueneke
 * Date: November 19, 2025
 * File Name: src/pie.js
 * Description: modules for pie-baker
 */
"use strict";

function bakePie(pieType, ingredients) {
  if (ingredients.includes("flour") && ingredients.includes("sugar") && ingredients.includes("butter")) {
    return (`${pieType} pie has been successfully baked!`);
  } else {
    process.emitWarning("An essential ingredient is missing and we can't bake a pie!");
    process.exit(1);
  }
}

module.exports = { bakePie };