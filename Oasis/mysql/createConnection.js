/**
 * createConnection.js    - A program to create a connection to MySQL connection.
 * @author        Ratna Lama
 * @author
 * @author
 * @date          4/11/2019
 *
 * @description
 *
 */

const mysql = require("mysql");

function createConnection() {
  // Create a database Connection
  let connection = mysql.createConnection({
    // AWS RDS
    host: "",
    user: "",
    password: "",
    database: ""
  });

  // Connect to MySQL
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL database successfully...");
  });
  return connection;
} // end createConnection()

// Export Module
module.exports = createConnection;
