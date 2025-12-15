"use strict";

const { spawnSync, spawn } = require("child_process");

const child = spawnSync("node", ["superheroes.js"]);

console.log(child.stdout.toString());