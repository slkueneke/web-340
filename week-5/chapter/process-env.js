//set the env
process.env.NODE_ENV = process.env.NODE_ENV || "development";

//display a msg based on env
if (process.env.NODE_ENV === "development") {
  console.log("Running in dev mode");
} else if (process.env.NODE_ENV === "production") {
  console.log("Running in prod mode");
} else {
  console.log(` Running in ${process.env.NODE_ENV} mode`);
}