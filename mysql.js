import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE
});

connection.connect();

connection.query("select * from test", function(err, rows, fields) {
  if (!err) console.log("The solution is: ", rows);
  else console.log("Error while performing Query.", err);
});

connection.end();
