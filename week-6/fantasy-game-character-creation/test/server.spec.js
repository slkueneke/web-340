const http = require("http");
const server = require("../src/server");

afterAll(() => {
  server.close();
});

describe("Character lifecycle", () => {
  test("POST /submit saves character data", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/submit?charClass=mage&gender=female&funFact=sparkly",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        const body = JSON.parse(data);
        expect(body).toEqual({
          message: "Character submitted successfully.",
          queryParams: {
            charClass: "mage",
            gender: "female",
            funFact: "sparkly"
          },
          bodyData: "extraData=hello"
        });
        done();
      });
    });

    req.write("extraData=hello");
    req.end();
  });

  test("POST /confirm responds with creation confirmation", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("You have successfully created your female mage.");
        done();
      });
    });

    req.end();
  });

  test("GET /view shows character details", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/view",
      method: "GET"
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("You are a female mage. Fun fact: sparkly");
        done();
      });
    });

    req.end();
  });
});
