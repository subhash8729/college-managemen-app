import db from "../db.js"

export const add_class_controller = async (req, res) => {

    try {
        const { year, semester, classname, section, role } = req.body;
        console.log("the role is", role)
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

export const get_classes_controller = async (req, res) => {
    try {
        const role = req.body.role;
        if (role !== "admin") return res.status(400).json({ message: "!Unauthorized Token Big Warning!" })
        const [rows] = await db.execute("select * from classes");
        return res.status(200).json(rows);
    } catch (error) {
        console.log("error in get_classes_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}

export const add_employee_controller = async (req, res) => {

    try {
        const { employee_name, role, employee_year, employee_role } = req.body;
        if (role != "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!employee_name || !employee_role || !employee_year ) return res.status(400).json({ "message": "blank fields" });
        if (employee_name.length > 20 || employee_role.length > 30 || employee_year.length > 30) return res.status(400).json({ message: "input length is too high" })


        try {
            await db.execute(`INSERT INTO employees_id 
            (employee_name, employee_role, employee_year)
            VALUES (?, ?, ?)`,
                [
                    employee_name.trim(),
                    employee_role.trim(),
                    employee_year.trim(),
                ]);
        } catch (error) {
            console.log("db error ERROR ->", error.message)
            return res.status(400).json({ message: "Database Error" })
        }

        return res.status(200).json({ "message": "employee added success" })


    } catch (error) {
        console.log("error in add_class_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }

}

export const edit_employee_controller = async (req, res) => {

    try {
        const { employees_year, role } = req.body;
        if (role != "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if ( !employees_year ) return res.status(400).json({ "message": "blank fields" });
        if ( employees_year.length > 30 ) return res.status(400).json({ message: "input length is too high" })


        try {
            const [rows] = await db.execute(`select * from employees_id where employee_year = ?`,[employees_year]);
            return res.status(200).json(rows)
        } catch (error) {
            console.log("db error ERROR ->", error.message)
            return res.status(400).json({ message: "Database Error" })
        }

    } catch (error) {
        console.log("error in edit_class_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }

}

export const add_branch_controller = async (req, res) => {

    try {
        const { branch_name, role } = req.body;
        if (role !== "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!branch_name ) return res.status(400).json({ "message": "blank fields" });
        if (branch_name.length > 60) return res.status(400).json({ message: "input length is too high" })


        try {
            await db.execute(`INSERT INTO branches_main 
            (branch_name)
            VALUES (?)`,
                [
                    branch_name.trim()
                ]);
        } catch (error) {
            console.log("db error ERROR ->", error.message)
            return res.status(400).json({ message: "Database Error" })
        }

        return res.status(200).json({ "message": "branch added success" })


    } catch (error) {
        console.log("error in add_branch_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }

}