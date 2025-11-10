import db from "../db.js"

export const getImportantInfo = async (req, res) => {
    //get data from db
    //send back to client

    try {
        const [rows] = await db.query("select * from important_info")
        res.status(200).json(rows);
    } catch (error) {
        console.log("error at getImpInfo controller, ERROR - ",error.message)
        res.status(500).json({message:"Server Error"})
    }

}
