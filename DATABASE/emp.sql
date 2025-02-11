create table employees(  
empid int auto_increment primary key,
     name varchar(100) not null,
      email varchar(100) unique not null,
      position varchar(100),
      department_id int ,
    salery decimal(10,2) check(salery>0),
      foreign key (department_id) references departments(department_id) ON DELETE SET NULL
      );

    
    
 CREATE TABLE Depatments(
           department_id int auto_increment primary key,
           department_name varchar(100) unique not null,
           location varchar(150) not null
        );


 create table empsaleries(
    salery_id serial primary key,
     empid int not null,
    amount decimal(10,2) not null check(amount > 0),
     salery_date DATE DEFAULT(CURRENT_DATE),
      foreign key(empid) references employees(empid) on delete cascade
     );




//departments
INSERT INTO Departments (department_name, location) 
VALUES 
('Human Resources', 'New York'),
('Finance', 'Chicago'),
('IT', 'San Francisco'),
('Marketing', 'Los Angeles');



//Employees
INSERT INTO Employees (name, email, position, department_id, salary) 
VALUES 
('Alice Johnson', 'alice@example.com', 'HR Manager', 1, 70000),
('Bob Smith', 'bob@example.com', 'Financial Analyst', 2, 80000),
('Charlie Brown', 'charlie@example.com', 'Software Engineer', 3, 90000),
('Diana White', 'diana@example.com', 'Marketing Coordinator', 4, 60000),
('Ethan Black', 'ethan@example.com', 'IT Support', 3, 55000);


//empsaleries
INSERT INTO EmpSalaries (empid, amount, salary_date) 
VALUES 
(1, 7000, '2024-01-01'),
(2, 8000, '2024-01-01'),
(3, 9000, '2024-01-01'),
(4, 6000, '2024-01-01'),
(5, 5500, '2024-01-01'),
(1, 7000, '2024-02-01'),
(2, 8000, '2024-02-01'),
(3, 9000, '2024-02-01'),
(4, 6000, '2024-02-01'),
(5, 5500, '2024-02-01');


