// game-characters.spec.js
"use strict";

const { GameCharacters } = require("../src/game-characters");
const { join } = require("path");
const dir = __dirname;

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((data, err) => {
      expect(err).toBeNull();

      expect(data).toEqual([
        { class: "Warrior", gender: "male", weapon: "sword" },
        { class: "Mage", gender: "female", weapon: "wand" },
        { class: "Rogue", gender: "other", weapon: "knife" }
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    gameCharacters.CHARACTER_FILE = join(dir, "fake-file.js");

    gameCharacters.getCharacters((data, err)=> {
      expect(data).toBeNull();
      expect(err).toBeInstanceOf(Error);
      done();
    })

  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    gameCharacters.CHARACTER_FILE = join(dir, "failing-script.js");

    gameCharacters.getCharacters((data, err)=> {
      expect(data).toBeNull();
      expect(err).toBeInstanceOf(Error);
      done();
    });
  });
});
