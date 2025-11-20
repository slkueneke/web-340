//set the db username, pw, and server as env vars
process.env.DB_USERNAME = process.env.DB_USERNAME || "admin";
process.env.DB_PASSWORD = process.env.DB_PASSWORD || "s3cret";
process.env.DB_SERVER = process.env.DB_SERVER || "devMongoServer";

//display the db username, pw, and server
console.log(`Database username: ${process.env.DB_USERNAME}`);
console.log(`Database password: ${process.env.DB_PASSWORD}`);
console.log(`Database server: ${process.env.DB_SERVER}`);

console.log(`Process platform is ${process.platform}`);