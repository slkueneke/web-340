"use strict";

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');


function testInputIsntAPlanetError() {
  try {
    calculateDistance("Pluto", "Moon");
    assert.fail("Expected error was not thrown");
    return false;
  } catch(err) {
    assert.strictEqual(err.message, "Inputs must be a valid planet in the Milky Way.");  
    console.log("testInputIsntAPlanetError has passed!");
    return true;
  }
}

function testInputIsAValidPlanet() {
  try {
    assert.doesNotThrow(() => {
      calculateDistance("Earth", "Jupiter");
    });
    console.log("testInputIsAValidPlanet has passed!");
    return true;
  } catch(error) {
    console.error(`Failed testInputIsAValidPlanet: ${error.message}`);
    return false;
  }
}

function testVenusToMercury() {
  try {
    assert.strictEqual(calculateDistance("Venus", "Mercury"), "0.33 AU");
    console.log("testVenusToMercury has passed!");
    return true;
  } catch(error) {
    console.error(`Failed testVenusToMercury: ${error.message}`);
    return false;
  }
}



// Call your test functions here
testInputIsntAPlanetError();
testVenusToMercury();
testInputIsAValidPlanet();

