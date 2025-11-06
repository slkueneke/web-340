const indexFunc = require('../src/index');

test("adds 5+5 to equal 10", () => {
  expect(5 + 5).toBe(10); //toBe is a matcher
});

test("array contains admin", () => {
  const roles = ["admin", "user", "guest"];
  expect(roles).toContain("admin"); //toContain is a matcher
});

test("converts a string to uppercase", () => {
  const str = "web 340 node.js";
  const uppercase = str.toUpperCase();
  expect(uppercase).toBe("WEB 340 NODE.JS");
});

test("object assignment", () => {
  const book = { title: "Pragmatic Node.js" };
  book.author = "Professor Krasso";
  expect(book).toEqual({
    title: "Pragmatic Node.js",
    author: "Professor Krasso",
  });
});

test("boolean assignment", () => {
  const is2025 = true;
  expect(is2025).toBeTruthy();
});

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("Inputs must be a number");
  }
  return a + b;
}

test("adds 2 + 2 to equal 4", () => {
  expect(add(2, 2)).toBe(4);
});

test("throws an error when a non-number is used", () => {
  expect(() => add("2", 2)).toThrow("Inputs must be a number");
});
