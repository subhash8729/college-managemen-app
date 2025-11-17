import mysql2 from "mysql2/promise"

const db = await mysql2.createConnection({
  host:"localhost",
  password:"Subhash@8729",
  user:"root",
  port:3306,
  database:"college_db"
})


export default db;