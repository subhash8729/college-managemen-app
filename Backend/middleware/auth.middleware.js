import { verifyToken } from "../functions/controllers.functions.js";


export const protectRoute = (req,res)=>{
    try {
        const token = req.body.token;
        if(!token) res.status(400).json({message : "no token found"});
        const result =  verifyToken(token);
        if(!result) res.status(400).json({message:"mallesios token"});
        res.status(200).json({
            user:result.username,
            role:result.role
        });
    } catch (error) {
        console.log("Error in checkAuth controller ERROR- ",error.message)
        res.status(500).json({message:"Server Error"});
    }
}

export const verifyRole = (req,res,next) =>{
    try {
        const token = req.body?.token || null;
        if(!token) return res.status(400).json({message:"token not found"});
        const data = verifyToken(token)
        if(!data) return res.status(400).json({message:"!unauthorised token"});
        console.log(data);
        req.body.role = data.role;
        next();

    } catch (error) {
        console.log("Error in verifyToken middleware ERROR ->", error.message)
        res.status(500).json({message:"server error"})
    }
}