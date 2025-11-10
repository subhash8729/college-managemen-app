import db from "../db.js";
import { generateToken } from "../functions/controllers.functions.js";

export const Login = async(req, res) => {
    try {
        const { username, password, role } = req.body || {};
        if(!username||!password || !role) return res.status(400).json({message:"blank details"})
        const [rows] =await db.execute("select * from users where username=? AND password=? AND role=?", [username, password, role])
        if(rows.length==0) return res.status(400).json({message:"Incorrect Username or Password or Role"});
        
        const token = generateToken({username,role})
        return res.status(200).json({
            username:rows[0].username,
            role: rows[0].role,
            token: token,

        })
        
       //destructuring username pass and role
       //getting data from sql
       //if not responding with 400
       //if yes generating token
       //sending response with body username role and a token 
    } catch (error) {
        console.log("Error in login controller ERROR -", error.message)
        return res.status(400).json({ message: "Server Error" })
    }

}