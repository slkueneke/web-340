// game-characters.js
/*
getCharacters method spawns a child process to run a script, captures the data game-characters-data.js sends back, and passes this data to a callback func

if there's an error while spawning the child process, this should be logged to console

if child process sends any data to stderr, this should be logged to the console and passed to the callback func
*/

const { spawn } = require("child_process");

class GameCharacters {
  constructor() {
    // TODO: Set the script file path
    const { join } = require("path");
    const dir = __dirname;
    this.CHARACTER_FILE = join(dir, "game-characters-data.js");
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn("node", [this.CHARACTER_FILE]);

    child.stdout.on("data", (data)=> {
      try {
        const charData = JSON.parse(data.toString());
        console.log(charData);
      callback(charData, null);
      } catch(err) {
        console.error("Failed to parse JSON", err);
        callback(null, err);
      }
    });

     child.on("error", (err) => {
       console.error("Cannot find file:", err);
       callback(null, err);
     });

    child.stderr.on("data", (data)=> {
      console.error("An error has been logged in stderr:", data.toString());
      callback(null, new Error(data.toString()));
    });
  }
}

module.exports = { GameCharacters };