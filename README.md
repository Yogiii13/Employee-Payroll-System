# Employee Payroll System

## Overview
This is a simple web-based Employee Payroll System that helps manage employees, departments, and payroll calculations. The system provides an intuitive interface for HR personnel to track employee information, manage departments, and calculate employee salaries.

## Features
- **Employee Management**: Add and view employee details including ID, name, department, position, and salary
- **Department Management**: Create and manage departments
- **Payroll Calculation**: Calculate employee salaries including tax deductions
- **User Authentication**: Secure login system

## Installation
1. Download all files to your local machine
2. Make sure all files are in the same directory
3. Open `login.html` in a web browser to start the application

## Login Credentials
- **Username**: admin
- **Password**: password

## Files Structure
- **HTML Files**:
  - `login.html` - Login page
  - `home.html` - Dashboard
  - `employee.html` - Employee management
  - `add employee.html` - Form to add new employees
  - `department.html` - Department management
  - `payroll.html` - Payroll calculation
  - `user.html` - User management

- **CSS Files**:
  - `login.css` - Styles for login page
  - `home.css` - Main styles for dashboard and navigation
  - `add employee.css` - Styles for employee form
  - `department.css` - Styles for department management
  - `payroll.css` - Styles for payroll calculator

- **JavaScript Files**:
  - `login.js` - Authentication logic
  - `add employee.js` - Employee data handling
  - `department.js` - Department data handling
  - `payroll.js` - Salary calculation logic

## How to Use

### Login
1. Enter username and password on the login page
2. Click "Login" to access the system

### Navigation
- The sidebar menu provides access to all modules
- Click the menu icon to expand/collapse the sidebar

### Employee Management
1. Navigate to "Employee" in the sidebar
2. Click "Add Employee" to create a new employee record
3. Fill in employee details and submit

### Department Management
1. Navigate to "Department" in the sidebar
2. Enter department ID and name
3. Click "Add Department" to create a new department

### Payroll Calculation
1. Navigate to "Payroll" in the sidebar
2. Enter employee information and work details
3. Click "Calculate Payroll" to generate salary information

## Note
This is a client-side application with no backend database. Data will not persist after page refreshes unless extended with server-side functionality.
