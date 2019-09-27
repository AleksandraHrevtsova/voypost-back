const startServer = require("./src/server");
const { port, dbUrl } = require("./src/config");
const connectionToDB = require("./src/db/connectToDB");

startServer(port);
connectionToDB(dbUrl);
