const express = require("express");
const mysql = require("mysql");

const app = express();

// Create a connection to the MySQL database.
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dpdQuizDB",
});

// Connect to the database.
connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Listen for requests on port 3000.
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
