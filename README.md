# Employee Management System

## Description

The Employee Management System is a command-line application designed to manage a company's employee database. It utilizes Node.js, Inquirer, and PostgreSQL to provide a comprehensive solution for handling various aspects of employee management, such as viewing departments, roles, and employees, as well as adding and updating employee information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-management-system.git
2. Navigate to the project directory:
    ```bash
    cd employee-management-system
3. Install the necessary dependencies:
    ```bash
    npm install
4. Set up the PostgreSQL database:

- Ensure you have PostgreSQL installed and running on your machine.
- Create a new database and user for the application.
- Update the database configuration in the .env file with your PostgreSQL credentials.

5. Start the application
    ```bash
    node index.js

## Usage
Start the application by running `node index.js` in your terminal.

You will be presented with a list of options to choose from:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

Follow the prompts to view or manage the employee database.


## Features
- **View Departments**: See a list of all departments with their IDs.
- **View Roles**: View all roles with their IDs, associated departments, and salaries.
- **View Employees**: View detailed employee information, including their roles and managers.
- **Add Department**: Add a new department to the database.
- **Add Role**: Add a new role with a specific salary and department.
- **Add Employee**: Add a new employee with role and manager details.
- **Update Employee Role**: Update the role of an existing employee.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits
[GitHub Repo](https://github.com/mmhilbert/sql-employee-tracker) <br>
[Application Video](https://drive.google.com/file/d/14k-lqb2DHIqXfdWqJw1bESBTiSnsjlhF/view?usp=sharing)






