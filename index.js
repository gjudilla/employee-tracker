import inquirer from 'inquirer';
import mysql from 'mysql2';

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'P4ulFrank!',
        database: 'business_db'
    },
    console.log(`Connected to the company_db database.`)
);

async function addDepartment() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:'
      }
    ]);
  
    await run(db, 'INSERT INTO department (name) VALUES (?)', [answers.name]);
    console.log('Department added successfully!');
  }
  
  // Function to handle adding roles
  async function addRole() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the role:'
      },
      {
        type: 'number',
        name: 'salary',
        message: 'Enter the salary for the role:'
      },
      {
        type: 'number',
        name: 'department_id',
        message: 'Enter the department ID for the role:'
      }
    ]);
  
    await run(db, 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, answers.department_id]);
    console.log('Role added successfully!');
  }
  
  // Function to handle adding employees
  async function addEmployee() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Enter the first name of the employee:'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Enter the last name of the employee:'
      },
      {
        type: 'number',
        name: 'role_id',
        message: 'Enter the role ID for the employee:'
      },
      {
        type: 'number',
        name: 'manager_id',
        message: 'Enter the manager ID for the employee:'
      }
    ]);
  
    await run(db, 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);
    console.log('Employee added successfully!');
  }
  
  // Main function to start the application
  async function main() {
    const choices = [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role'
    ];
  
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: choices
      }
    ]);
  
    switch (action) {
      case 'View all departments':
        // Query and display all departments
        break;
      case 'View all roles':
        // Query and display all roles
        break;
      case 'View all employees':
        // Query and display all employees
        break;
      case 'Add a department':
        await addDepartment();
        break;
      case 'Add a role':
        await addRole();
        break;
      case 'Add an employee':
        await addEmployee();
        break;
      case 'Update an employee role':
        // Functionality to update an employee role
        break;
      default:
        console.log('Invalid choice');
    }
  }
  
  // Call main function to start the application
  main().catch(console.error);