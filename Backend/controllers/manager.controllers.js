import db from "../db.js";
import { verifyToken } from "../functions/controllers.functions.js";

export const uploadImportantInfo = async (req, res) => {
   try {
    if(!req.body.token) return res.status(400).json({message:"Token not Found"})

    const value = verifyToken(req.body.token);
    if(!value) return res.status(400).json({message:"Unauthorised Token"})
      
    const {icon,heading,main,description,link1,link2,link3} = req.body;
    
    
    if(icon==undefined||icon==null||!heading||!main||!description||!link1){
      return res.status(400).json({message:"blank items found"})
    } 

   await db.execute(`INSERT INTO important_info 
  (icon, heading, main, description, link1, link2, link3)
  VALUES (?, ?, ?, ?, ?, ?, ?)`,
  [
    Number(icon),
    heading.trim(),
    main.trim(),
    description.trim(),
    link1?.trim() || null,
    link2?.trim() || null,
    link3?.trim() || null,
  ])
  res.status(200).json({message:"data sent success"})

   } catch (error) {
    console.log("Error in uploadImportantInfo controller", error.message)
    return res.status(500).json({message: "Server Error"})
   }
        

}