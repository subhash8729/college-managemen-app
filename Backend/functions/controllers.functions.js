import jwt from "jsonwebtoken"

export const verifyToken = (token) =>{
    try {
        const data = jwt.verify(token,process.env.JWT_SECRET)
        return data;
    } catch (error) {
        console.log("error in functions",error.message)
        return false;
    }
    
}

export const generateToken = (payload)=>{
    const token = jwt.sign(payload,process.env.JWT_SECRET);
    return token;
}