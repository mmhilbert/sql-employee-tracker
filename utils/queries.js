
const pool = require("../db/dbConnection");


const getRoles = async () => {
    try {
        const roles = await pool.query(`
        SELECT * FROM roles;
        `)
        return roles.rows
    } catch(err) {
        throw 'Error fetching roles'
    }
}

const getDepartments = async () => {
    try {
        const departments = await pool.query(`
        SELECT * FROM departments;
        `)
        return departments.rows
    } catch(err) {
        throw 'Error fetching departments'
    }
}

const getEmployees = async () => {
    try {
        const employees = await pool.query(`
        SELECT * FROM employees;
        `)
        return employees.rows
    } catch(err) {
        throw 'Error fetching roles'
    }
}

const insertEmployeeData = async (first_name, last_name, role_id, manager_id) => {
    try {
        const employeeData = await pool.query(`
        INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES ($1, $2, $3, $4);
    `, [first_name, last_name, role_id, manager_id])
    } catch {
        throw 'Error inserting employee data'
    }
}

const updateEmployeeRole = async (employee_id, role_id) => {
    try {
        const updateQuery = await pool.query(`
        UPDATE employees SET role_id = $1
            WHERE id = $2;
            `, [role_id, employee_id])
    } catch {
        throw 'Error updating employee'
    }
}


module.exports = { getRoles, getDepartments ,getEmployees ,insertEmployeeData, updateEmployeeRole }