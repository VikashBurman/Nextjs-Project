import mysql from "mysql2/promise"

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Vikash@123",
  database: "nextjs_learning" 
});

try {
    const connection = await db.getConnection();
    console.log("DB connected")
    connection.release();
} catch (error) {
    console.log("DB NOT connected");
    console.log(error);
}