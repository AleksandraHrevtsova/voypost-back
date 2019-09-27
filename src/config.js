"use strict";
const dotenv = require("dotenv");
require("dotenv").config();
const dbUser = process.env.DB_USER || "";
const dbPass = process.env.DB_PASS || "";

const config = {
  port: 6000,
  dbUrl: `mongodb+srv://${dbUser}:${dbPass}@cluster0-mqdnc.azure.mongodb.net/test?retryWrites=true&w=majority`,
  secret: "secret key"
};
module.exports = config;

// console.log("dbUrl: ", config.dbUrl);

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://hrevtsova:<password>@cluster0-mqdnc.azure.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("trips");
//   // perform actions on the collection object
//   client.close();
// });
// console.log(client);
