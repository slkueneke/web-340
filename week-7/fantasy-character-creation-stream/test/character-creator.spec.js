const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    characterCreator.on("finish", () => {
      expect(characterCreator.answers).toEqual(["mage", "female", "super fun"]);
      done();
    });

    characterCreator.write("mage, female, super fun");
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", () => {
    expect(() => {
      characterCreator.write("mage, female"); // missing fun fact
    }).toThrow("Please enter a fun fact.");
  });

  test("should transform data correctly when written to", (done) => {
    let output = "";
    characterCreator.on("data", (chunk) => {
      output += chunk.toString();
    });

    characterCreator.on("end", () => {
      expect(output).toEqual(
        "Your character class is a mage.\nYour gender is female.\nYour fun fact is super fun.\n"
      );
      done();
    });

    characterCreator.write("mage, female, super fun");
    characterCreator.end();
  });
});
