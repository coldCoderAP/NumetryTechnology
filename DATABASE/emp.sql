-- //===============================
-- feb 12==== Create a Library Management Database
-- authors table
create table authors(
    ->   authorId int primary key auto_increment,
    ->   authorName varchar(100),
    ->   country varchar(100)
    ->   );

alter table authors modify column authorname varchar(100) not null;

insert into authors values(1,"sadguru","india");
insert into authors values(2,"Robert greek","india");

update  authors set country="USA" where authorid=2;


-- book table foreign key with authors

create table books(
                bookid int primary key auto_increment,
                title varchar(100) not null,
                authorid int not null,
                ISBN varchar(20) unique,
                publishedYear INT,
                availableCopies int default 1,
                foreign key (authorid) references authors(authorid)
                );
                
                
insert into books values(1,"Games",1,"11111",2025,"10");
insert into books values(2,"inner enginerrings",1,"11112",2019,"5");
insert into books values(3,"Karma",1,"11113"2020,8);

                
         
update books set authorid=2 where bookid=1;




-- //members

create table members(
         memberid int primary key auto_increment,
         membername varchar(100) not null,
         email varchar(100) unique not null,
         phoneno varchar(20),
         joindate DATE default(CURRENT_DATE)
);

insert into members values(1,"Atharva","atharv.vpande@gmail.com","8087230310","2025-02-13");
 insert into members values(2,"Mandar","mandar@gmail.com","9834904899","2024-06-23");

-- //BorrowedBooks


create table borrowedbooks (
   borrowId int primary key auto_increment,
   bookid int not null,
   memberid int not null,
   borrowdate DATE default(CURRENT_DATE),
   returndate date null,
   foreign key (bookid) references books(bookid),
   foreign key (memberid) references members(memberid)
   );


insert into borrowedbooks values(1,1,2,"2025-01-01",null);
 
-- //==================================================================================================
-- //Feb 11
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




-- //departments
INSERT INTO Departments (department_name, location) 
VALUES 
('Human Resources', 'New York'),
('Finance', 'Chicago'),
('IT', 'San Francisco'),
('Marketing', 'Los Angeles');



-- //Employees
INSERT INTO Employees (name, email, position, department_id, salary) 
VALUES 
('Alice Johnson', 'alice@example.com', 'HR Manager', 1, 70000),
('Bob Smith', 'bob@example.com', 'Financial Analyst', 2, 80000),
('Charlie Brown', 'charlie@example.com', 'Software Engineer', 3, 90000),
('Diana White', 'diana@example.com', 'Marketing Coordinator', 4, 60000),
('Ethan Black', 'ethan@example.com', 'IT Support', 3, 55000);


-- //empsaleries
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


