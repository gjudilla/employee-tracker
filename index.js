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