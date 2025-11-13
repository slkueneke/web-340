/**
 * Author: Shannon Kueneke
 * Date:  November 12, 2025
 * File Name: taco-stand.spec.js
 * Description: TDD tests for taco-stand app
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand.js");
const tacoStand = new TacoStandEmitter();

function testServeCustomer() {
  const expectedValue = "Shannon";
  tacoStand.on("serve", (customer) => {
    try { 
      assert.strictEqual(customer, expectedValue);
      console.log("Passed testServeCustomer");
      return true;
    } catch (err) {
      console.error(`Failed testServeCustomer: ${err} `);
      return false;
    }
  });
  tacoStand.serveCustomer("Shannon");
}

function testPrepareTaco() {
  const expectedValue = "shrimp";
  tacoStand.on("prepare", (taco) => {
    try {
      assert.strictEqual(taco, expectedValue);
      console.log("Passed testPrepareTaco");
    } catch (err) {
      console.error(`Failed testPrepareTaco: ${err}`);
    }
  });
  tacoStand.prepareTaco("shrimp");
}

function testHandleRush() {
  const expectedValue = "lunch";
  tacoStand.on("rush", (rush) => {
    try {
      assert.strictEqual(rush, expectedValue);
      console.log("Passed testHandleRush");
    } catch (err) {
      console.error(`Failed testHandleRush: ${err}`);
    }
  });
  tacoStand.handleRush("lunch");
}


testServeCustomer();
testPrepareTaco();
testHandleRush();
