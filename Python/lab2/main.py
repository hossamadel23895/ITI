from classes.Person import Person
from classes.Employee import Employee
from classes.Office import Office

office = Office("Main Office")

quitted = False

while not quitted:
    print('''
    <<<< Welcome to our Office management app >>>>
    1 - Hire Employee.
    2 - Fire Employee.
    3 - Get Employee by ID.
    4 - Get All Employees.
    5 - Quit.
    ''')
    userOption = input("Please choose an option to continue : ")
    if userOption == "1":
        print("<<<< Hiring Employee >>>>\n")

        empId = int(input("Please enter the new employee ID : "))
        empFullName = input("Please enter the new employee full name : ")
        empEmail = input("Please enter the new employee Email : ")
        empSalary = int(input("Please enter the new employee salary : "))
        empIsManager = input(
            "Is the new employee a manager? (Type 'yes' or 'no') : ")
        empIsManager = 1 if empIsManager == "yes" else 0
        empMoney = int(input("Please enter the new employee balance : "))
        empWorkHours = int(
            input("Please enter the new employee number of working hours (Average 8) : "))
        empSleepHours = int(
            input("Please enter the new employee number of sleeping hours (Average 7): "))
        empMealsAmount = int(
            input("Please enter the new employee meals amount (Choose from 1 to 3) : "))

        emp = Employee(empId, empFullName, empEmail, empSalary, empIsManager,
                       empMoney, empWorkHours, empSleepHours, empMealsAmount)
        office.hire(emp)
        print("\n<<<< Employee was added successfully! >>>>")
        input("Press any key to continue")

    elif userOption == "2":
        print("<<<< Firing Employee >>>>\n")
        empId = int(
            input("Please enter the ID of the employee that you want to fire : "))
        office.fire(empId)
        print("\n<<<< Employee was Deleted successfully! >>>>")
        input("Press any key to continue")

    elif userOption == "3":
        print("<<<< Getting Employee by ID >>>>\n")
        empId = int(
            input("Please enter the ID of the employee that you want to display : "))
        emp = office.getEmployee(empId)[0]
        isManager = True if emp[4] == 1 else False
        print(f"""
            Employee ID : {emp[0]}
            Employee Full Name : {emp[1]}
            Employee Email : {emp[2]}
            Employee Salary : {emp[3]}
            Employee Is Manager : {isManager}
            Employee Balance : {emp[5]}
            Employee Work Hours : {emp[6]}
            Employee Sleep Hours : {emp[7]}
            Employee Meals Amount : {emp[8]}
        """)
        input("Press any key to continue")

    elif userOption == "4":

        print("<<<< Getting Employee by ID >>>>\n")
        employees = office.getAllEmployees()
        for index, emp in enumerate(employees):
            isManager = True if emp[4] == 1 else False
            print(f"""
            <<<< Employee {index+1} >>>>
                Employee ID : {emp[0]}
                Employee Full Name : {emp[1]}
                Employee Email : {emp[2]}
                Employee Salary : {emp[3]}
                Employee Is Manager : {isManager}
                Employee Balance : {emp[5]}
                Employee Work Hours : {emp[6]}
                Employee Sleep Hours : {emp[7]}
                Employee Meals Amount : {emp[8]}
            """)
        input("Press any key to continue")

    elif userOption == "5":
        quitted = True
        print("<<<< Thank you for using our app >>>>>")

    else:
        print("Please enter a valid option number")
