
import mysql from "mysql2";

const connectDB = mysql.createConnection({
  host:localhost,
  user:root,
  password: Noniye2002$$,
  database: database,
});

console.log("Attempting to connect to MySQL database...");

connectDB.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message, err.stack);
    return;
  }
  console.log("DB is connected");
});

export default connectDB;
