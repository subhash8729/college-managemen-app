import mysql2 from "mysql2/promise"

const db = await mysql2.createConnection({
  host:"sql12.freesqldatabase.com",
  password:"Fb9ejpxhhe",
  user:"sql12806285",
  port:3306,
  database:"sql12806285"
})


export default db;