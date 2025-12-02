"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.answers = [];
    this.char = [];
  }

  _write(chunk, encoding, callback) {
    // Convert input to string and split by commas
    const parts = chunk
      .toString()
      .toLowerCase()
      .split(",")
      .map((p) => p.trim());
    const [charClass, gender, funFact] = parts;
    

    if (!!charClass && charClass.length > 0 && charClass.match(/mage|warrior|rogue/g)) {
      this.answers.push(charClass);
      this.char.push(`Your character class is a ${charClass}.`);
    } else {
      throw new Error("Your character class must be mage, warrior, or rogue.");
    }

    if (!!gender && gender.length > 0 && gender.match(/male|female|other/g)) {
      this.answers.push(gender);
      this.char.push(`Your gender is ${gender}.`);
    } else {
      throw new Error("Your character gender must be male, female, or other.");
    }

    if (!!funFact && funFact.length > 0) {
      this.answers.push(funFact);
      this.char.push(`Your fun fact is ${funFact}.`);
    } else {
      throw new Error("Please enter a fun fact.");
    }

    callback();
  }

  _read(size) {
    while (this.char.length > 0) {
      this.push(this.char.shift() + "\n");
    }
    this.push(null);
  }


  
}

/*const charCreator = new CharacterCreator();
let output = "";
charCreator.on("data", (chunk) => {
  console.log(chunk.toString());
  output += chunk;
});

charCreator.write("mage, female, cool");*/

module.exports = CharacterCreator;
