/**
 * Author: Shannon Kueneke
 * Date: November 19, 2025
 * File Name: test/pie.spec.js
 * Description: tdd unit testing for pie-baker
 */

"use strict";

const { bakePie } = require("../src/pie");

//const exit = jest.spyOn(process, "exit").mockImplementation((code) => code);

describe("Baking a pie requirements", () => {
  //let warn;

  beforeEach(() => {
    //warn = jest.spyOn(process, "emitWarning").mockImplementation(() => {});
    process.emitWarning = jest.fn();
    process.exit = jest.fn();
  });

  afterEach(() => {
    //warn.mockRestore();
    jest.clearAllMocks();
    jest.resetModules();
  });

  /*
use toBe or toEqual for assertions

call your functions in each test with the necessary arguments

use jest.fn() to create mock functions in your tests. follow format in plat-checker program
*/

  //successful pie
  describe("when all essential ingredients are present", () => {
    test("returns a success message for baking a pie", () => {
      let fn = bakePie("cherry", ["flour", "sugar", "butter"]);
      expect(fn).toBe("cherry pie has been successfully baked!");
      expect(process.emitWarning).not.toHaveBeenCalled();
      expect(process.exit).not.toHaveBeenCalled();
    });

    test("return value contains pie type", () => {
      let fn = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
      expect(fn).toContain("apple");
    });
  });

  //unsuccessful pie
  describe("when essential ingredients are missing", () => {
    test("triggers warning and exits", () => {
      bakePie("key lime", ["limes", "flour", "butter"]);
      expect(process.emitWarning).toHaveBeenCalledWith(
        "An essential ingredient is missing and we can't bake a pie!"
      );
      expect(process.exit).toHaveBeenCalledWith(1);
    });
  });
});
