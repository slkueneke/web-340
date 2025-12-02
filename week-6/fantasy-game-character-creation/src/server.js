const http = require('http');
const url = require('url');

// starting null value before submit
let characterData = null;

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  let query = parsedURL.query;
  let pathname = parsedURL.pathname;
console.log(query);
  if (req.method === "POST" && pathname === "/submit") {
    // Save params in memory
    characterData = {
      charClass: query.charClass,
      gender: query.gender,
      funFact: query.funFact
    };

    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", () => {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: `Character submitted successfully.`,
          queryParams: characterData,
          bodyData: data
        })
      );
    });
  } else if (req.method === "POST" && pathname === "/confirm") {
    if (characterData) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(
        `You have successfully created your ${characterData.gender} ${characterData.charClass}.`
      );
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("No character data found. Please submit first.");
    }
  } else if (req.method === "GET" && pathname === "/view") {
    if (characterData) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(
        `You are a ${characterData.gender} ${characterData.charClass}. Fun fact: ${characterData.funFact}`
      );
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("No character data found. Please submit first.");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;
