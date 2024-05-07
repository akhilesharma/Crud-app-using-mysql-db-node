const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = mysql.createPool({
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

dbConnect.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = dbConnect;
