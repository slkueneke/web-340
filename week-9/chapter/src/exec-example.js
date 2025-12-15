"use strict";

const { exec } = require("child_process");

exec("node joke.js", (err, stdout, stderr)=> {
  if (err) {
    console.log("exec error:", err);
    return;
  } 

  console.log("stdout:", stdout);
});