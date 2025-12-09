"use strict";

// For promises:
const fs = require("fs").promises;
const { join } = require("path");
const dir = __dirname; 
const CHARACTER_FILE = join(dir, "character.txt");

async function createCharacter(charClass, charGender, charWeapon) { 
  try {
    const data = `Character is a ${charGender} ${charClass} who uses a ${charWeapon} to protect themselves.\n`;
    await fs.writeFile(CHARACTER_FILE, data/*, { flag: "a"}*/); //looked up that this can append values to the file, but I wasn't sure if we were supposed to do that or not. My tests work either way but left this in to be able to look back and find this flag for future 
  } catch(err) {
    console.error("Error writing character:", err);
    throw(err);
  }
}

async function getCharacters() {
  try {
    const data = await fs.readFile(CHARACTER_FILE, "utf8");
    const characters = data.split("\n").filter((char) => char.trim() !== "");
    return characters;
  } catch(err) {
    console.error("Error reading characters:", err);
    throw err;
  }
}


module.exports = { createCharacter, getCharacters }; // For promises
