"use strict";

const { spawnSync, spawn } = require("child_process");

const child = spawnSync("echo", ["hola", "mundo", "programar", "es", "divertido"], { encoding: "utf8" });

console.log("stdout:", child.stdout.toString());