const inquirer = require("inquirer");
const {
  getRoles,
  getDepartments,
  getEmployees,
  insertEmployeeData,
  updateEmployeeRole
} = require("./utils/queries");

const initialQuestions = [
  {
    type: "list",
    name: "answer",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit",
    ],
  },
];

const employeeQuestions = [
  {
    type: "text",
    name: "name",
    message: "Add employee name:",
  },
];

const init = async () => {
  let isRunning = true;

  while (isRunning) {
    const answers = await inquirer.prompt(initialQuestions);
    switch (answers.answer) {
      case "View All Employees":
        // run query and display all employees table
        let viewEmployeeData = await getEmployees();
        console.table(viewEmployeeData)
        console.log("View All Employees");
        break;
      case "Add Employee":
        let roleList = await getRoles();
        let roleNames = roleList.map((role) => role.job_title);

        let employeeData = await getEmployees();

        let managerNames = employeeData.map(
          (manager) => `${manager.first_name} ${manager.last_name}`
        );


        // ask questions about employee (name, department, role, manager)
        const employeeQuestions = [
          {
            type: "text",
            name: "firstName",
            message: "Add employee first name:",
          },
          {
            type: "text",
            name: "lastName",
            message: "Add employee last name:",
          },
          {
            type: "list",
            name: "role",
            message: "Select employees role",
            choices: roleNames,
          },
          {
            type: "list",
            name: "manager",
            message: "Select employees manager",
            choices: ["None", ...managerNames],
          },
        ];

        const employeeAnswers = await inquirer.prompt(employeeQuestions);
        console.log(employeeAnswers);

        // const selectManager = employeeAnswers

        // add to database

        const selectedRole = roleList.find(
          role => role.job_title === employeeAnswers.role
        );

        // find employee object, see if employee name matches name selected from prompt
        const selectedManager = employeeData.find(employee => `${employee.first_name} ${employee.last_name}` === employeeAnswers.manager)

        // let manager = null

        // for (const employee in employeeData) {
        //    let employeeName = `${employee.first_name} ${employee.last_name}`
        //     if (employeeName === employeeAnswers.manager) {
        //         manager = employee
        //     }
        // }
    

        // employee
        const firstName = employeeAnswers.firstName;
        const lastName = employeeAnswers.lastName;
        const roleId = selectedRole.id;
        const managerId = selectedManager ? selectedManager.id : null


        await insertEmployeeData(firstName, lastName, roleId, managerId)

        console.log("Add Employee");
        break;
      case "Update Employee Role":
        // run a query to get employees
        // make list of employee names
        const employees = await getEmployees()
        let employeeNames = employees.map(
            employee => `${employee.first_name} ${employee.last_name}`);
        
        // run a query to select employee roles
        const roles = await getRoles()
        let roleTitles = roles.map(role => role.job_title)

        // prompt user to select from list of employees
        // prompt user to select role and update
        const updateEmployeeQuestions = [
            {
              type: "list",
              name: "employee",
              message: "Select employee to update",
              choices: employeeNames
            },
            {
              type: "list",
              name: "role",
              message: "Select employees new role",
              choices: roleTitles,
            }
          ];

          const updateEmployeeAnswers = await inquirer.prompt(updateEmployeeQuestions)

          // get selected employee from employees array based on prompt answer
          // get selected role from roles array based on prompt answer

          const selectEmployee = employees.find(employee => `${employee.first_name} ${employee.last_name}` === updateEmployeeAnswers.employee)

          const selectRole = roles.find(role => role.job_title === updateEmployeeAnswers.role)

          // run update query to update employee role_id where id = selected employee_id
          await updateEmployeeRole(selectEmployee.id, selectRole.id)


        console.log("Update Employee Role");
        break;
      case "View All Roles":
        // run query to select all roles
        const viewAllRoles = getRoles()

        // display as table (console.table)
        console.table(viewAllRoles)
        break;
      case "Add Role":
        // promt user about roles (role)
        // insert into roles table
        console.log("Add Role");
        break;
      case "View All Departments":
        // run a query to get departments
        const viewDepartments = await getDepartments()
        // console.table display departments
        console.table(viewDepartments)
        break;
      case "Add Department":
        // prompt user about department
        // insert department into department table
        console.log("Add Department");
        break;
      case "Quit":
        isRunning = false;
        console.log("Goodbye!");
        break;
      default:
        console.log("Please select a valid option");
        break;
    }
  }
};

init();
