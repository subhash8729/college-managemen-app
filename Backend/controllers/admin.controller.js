import db from "../db.js"

export const add_class_controller = async (req, res) => {

    try {
        const { year, semester, classname, section, role } = req.body;
        console.log("the role is",role)
        if (role != "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!year || !semester || !classname || !section) return res.status(400).json({ "message": "blank fields" });
        if (year.length > 30 || semester.length > 30 || classname.length > 50 || section.length > 5) return res.status(400).json({ message: "input length is too high" })

        const [rows] = await db.execute(
            `SELECT * FROM classes WHERE year=? AND semester=? AND classname=? AND section=?`,
            [year.trim(), semester.trim(), classname.trim(), section.trim()]
        );

        if (rows.length > 0)
            return res.status(400).json({ message: "class with following details already exists" });



        await db.execute(`INSERT INTO classes 
  (year, semester, classname, section)
  VALUES (?, ?, ?, ?)`,
            [
                year.trim(),
                semester.trim(),
                classname.trim(),
                section.trim(),
            ]);

        return res.status(200).json({ "message": "class added success" })


    } catch (error) {
        console.log("error in add_class_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }

}

export const get_classes_controller = async(req, res) => {
    try {
        const role = req.body.role;
        if(role !== "admin") return res.status(400).json({message:"!Unauthorized Token Big Warning!"})
        const [rows] = await db.execute("select * from classes");
        return res.status(200).json(rows);
    } catch (error) {
        console.log("error in get_classes_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}