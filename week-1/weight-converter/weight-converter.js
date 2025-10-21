/**
 * Author: Shannon Kueneke
 * Date: October 21, 2025
 * File Name: weight-converter.js
 * Description: converts pounds to kilograms 
*/

"use strict";


function main() {
  //check if user has entered a number for pounds
  if (process.argv.length != 3) { //if user has not passed any arg
    console.error("Usage: node weight-converter.js <pounds>");
    process.exit(1);
  } else if (isNaN(process.argv[2])) { //if user has not passed a number as an arg
    console.error("Input must be a number");
    process.exit(1);
  } 
  const pounds = process.argv[2]; //get the number of lbs from the CLI args
  const kilos = (pounds * 0.45359237).toFixed(2); //convert pounds to kilos

  console.log(kilos);
  
}
main();