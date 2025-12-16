import db from "../db.js"

export const add_class_controller = async (req, res) => {
    //getting branch_id and making a table with branch_code and cse+c= cse-c with assigning the unique id to classname

    try {
        const { branches_id, section, role } = req.body;
        if (role != "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!branches_id || !section) return res.status(400).json({ "message": "blank fields" });
        if (branches_id.length > 30 || section.length > 5) return res.status(400).json({ message: "input length is too high" })

        const numBranch_id = Number(branches_id.trim())
        const [rows] = await db.execute(`SELECT branches_alias FROM branches_details where branches_id = ?`, [numBranch_id])
        if (rows.length != 1) return res.status(400).json({ message: "could not find branch with given detials" })
        const branch_alias = rows[0].branches_alias;

        const class_name = branch_alias + "-" + section.trim();
        console.log(class_name)
        await db.execute(`INSERT INTO classes_main 
  (branches_id, class_name )
  VALUES (?, ?)`,
            [
                numBranch_id,
                class_name.trim()
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
        const [rows] = await db.execute("select * from classes_main");
        return res.status(200).json(rows);
    } catch (error) {
        console.log("error in get_classes_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}
export const get_subject_controller = async (req, res) => {
    try {
        const role = req.body.role;
        if (role !== "admin") return res.status(400).json({ message: "!Unauthorized Token Big Warning!" })
        const [rows] = await db.execute("select * from subject_main");
        return res.status(200).json(rows);
    } catch (error) {
        console.log("error in get_subject_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}

export const add_employee_controller = async (req, res) => {

    try {
        const { employee_name, role, employee_year, employee_role } = req.body;
        console.log(employee_name, role, employee_role, employee_year);
        if (role != "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!employee_name || !employee_role || !employee_year) return res.status(400).json({ "message": "blank fields" });
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
            console.log("db error at add_employee_controller ERROR ->", error.message)
            return res.status(400).json({ message: "Database Error" })
        }

        return res.status(200).json({ "message": "employee added success" })


    } catch (error) {
        console.log("error in add_class_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }

}

export const add_subject_controller = async (req, res) => {
    try {
        const { subject_name, role, subject_year, subject_alias } = req.body;
        console.log(subject_name, role, subject_alias, subject_year);
        if (role != "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!subject_name || !subject_alias || !subject_year) return res.status(400).json({ "message": "blank fields" });
        if (subject_name.length > 100 || subject_alias.length > 30 || subject_year.length > 30) return res.status(400).json({ message: "input length is too high" })


        try {
            await db.execute(`INSERT INTO subject_main
            (subject_name, subject_alias, subject_year)
            VALUES (?, ?, ?)`,
                [
                    subject_name.trim(),
                    subject_alias.trim(),
                    subject_year.trim(),
                ]);
        } catch (error) {
            console.log("db error at add_subject_controller ERROR ->", error.message)
            return res.status(400).json({ message: "Database Error" })
        }

        return res.status(200).json({ "message": "subject added success" })


    } catch (error) {
        console.log("error in add_class_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}

export const edit_employee_controller = async (req, res) => {

    try {
        const { employees_year, role } = req.body;
        if (role != "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!employees_year) return res.status(400).json({ "message": "blank fields" });
        if (employees_year.length > 30) return res.status(400).json({ message: "input length is too high" })


        try {
            const [rows] = await db.execute(`select * from employees_id where employee_year = ?`, [employees_year]);
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
        if (!branch_name) return res.status(400).json({ "message": "blank fields" });
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

export const get_branches_controller = async (req, res) => {
    try {
        const role = req.body.role;
        if (role !== "admin") return res.status(400).json({ message: "!Unauthorized Token Big Warning!" })
        const [rows] = await db.execute("select * from branches_main");
        return res.status(200).json(rows);
    } catch (error) {
        console.log("error in get_branches_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}

export const get_branches_details_controller = async (req, res) => {
    try {
        const role = req.body.role;
        if (role !== "admin") return res.status(400).json({ message: "!Unauthorized Token Big Warning!" })
        const [rows] = await db.execute("select * from branches_details");
        return res.status(200).json(rows);
    } catch (error) {
        console.log("error in get_branches_details_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}

export const update_branch_controller = async (req, res) => {
    try {
        const { branches_id, branches_alias, branches_desc, branches_seats, role } = req.body;
        if (role !== "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!branches_id || !branches_alias) return res.status(400).json({ "message": "blank fields" });
        console.log(branches_desc.length, branches_alias.length)
        if (branches_alias.length > 7 || (branches_desc?.length || 0) > 200) return res.status(400).json({ message: "input length is too high" })

        try {
            await db.execute(`UPDATE branches_details
                SET branches_alias = ?,
                branch_desc =?,
                branch_seats = ? 
                WHERE branches_id = ?`,
                [
                    branches_alias.trim(),
                    branches_desc?.trim() || null,
                    Number(branches_seats) || null,
                    Number(branches_id),
                ]);

                var [rows] = await db.execute(`SELECT * FROM branches_details`);

        } catch (error) {
            console.log("db error at update_branch_controller ERROR ->", error.message)
            return res.status(400).json({ message: "Database Error" })
        }

        return res.status(200).json(rows)


    } catch (error) {
        console.log("error in update_branch_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}

export const update_subject_controller = async (req, res) => {
    try {
        const { subject_id, subject_alias, subject_year, role } = req.body;
        if (role !== "admin") return res.status(400).json({ message: "!unauthorised token big warning" });
        if (!subject_id || !subject_alias || !subject_year) return res.status(400).json({ "message": "blank fields" });
        if ( subject_alias.length > 20 || subject_year.length > 50) return res.status(400).json({ message: "input length is too high" })

        try {
            await db.execute(`UPDATE subject_main
                SET subject_alias = ?,
                subject_year = ?
                WHERE subject_id = ?`,
                [
                    subject_alias.trim(),
                    subject_year?.trim() || null,
                    Number(subject_id),
                ]);

        } catch (error) {
            console.log("db error at update_subject_controller ERROR ->", error.message)
            return res.status(400).json({ message: "Database Error" })
        }

        return res.status(200).json({ "message": "subject updated success" })


    } catch (error) {
        console.log("error in update_subject_controller ERROR ->", error.message)
        return res.status(500).json({ message: "server Error" })
    }
}