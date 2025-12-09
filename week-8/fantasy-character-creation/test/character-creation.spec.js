"use strict";

// For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    jest.spyOn(fs, "readFile").mockImplementation(()=> Promise.resolve("Character is a female mage who uses a wand to protect themselves."));
    jest.spyOn(fs, "writeFile").mockImplementation(()=> Promise.resolve());
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // 1. Test that createCharacter writes a new character to the file
  test("createCharacter writes a new character to the file", async()=> {
    await expect(createCharacter(["female", "mage", "wand"])).resolves.toBeUndefined();
  });
  // 2. Test that getCharacters reads characters from the file
  test("createCharacter reads characters from the file", async () => {
    const chars = await getCharacters();
    expect(chars).toEqual(
      ["Character is a female mage who uses a wand to protect themselves."]
    );
  });
  // 3. Test that createCharacter handles errors when writing to the file
  test("createCharacter handles errors when writing to the file", async()=> {
    fs.writeFile.mockImplementationOnce(()=> Promise.reject(new Error("File not found")));

    await expect(createCharacter()).rejects.toThrow("File not found");
  });
});