-- Insert departments
INSERT INTO departments (name) VALUES
('Engineering'),
('Sales'),
('Marketing');

-- Insert roles
INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 75000.00, 1),
('Sales Manager', 80000.00, 2),
('Marketing Coordinator', 50000.00, 3);

-- Insert employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Mike', 'Johnson', 3, 2);
