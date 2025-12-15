// TODO: Implement this script
/*
GameCharacters class will use this script to retrieve the characters
This script should log a JSON stringified array of game characters to console
*/
"use strict";

const characters = [
  {
    "class": "Warrior",
    "gender": "male",
    "weapon": "sword"
  },
  {
    "class": "Mage",
    "gender": "female",
    "weapon": "wand"
  },
  {
    "class": "Rogue",
    "gender": "other",
    "weapon": "knife"
  }
];

console.log(JSON.stringify(characters));