import mysql.connector


class Office:
    name = None
    employees = None
    host = "localhost"
    user = "phpmyadmin"
    password = "0000"
    database = "ITI_Python"

    def __init__(self, name):
        self.name = name
        cnx = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password
        )
        cursor = cnx.cursor()
        cursor.execute("CREATE DATABASE IF NOT EXISTS ITI_Python")
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS ITI_Python.employees(
        id INT(255) UNSIGNED NOT NULL , full_name VARCHAR(255) NOT NULL ,
        email VARCHAR(255) NOT NULL , salary INT(255) UNSIGNED NOT NULL ,
        is_manager BOOLEAN NOT NULL , money INT(255) UNSIGNED NOT NULL ,
        work_hours INT(2) UNSIGNED NOT NULL , sleep_hours INT(2) UNSIGNED NOT NULL ,
        meals_amount INT(1) UNSIGNED NOT NULL , PRIMARY KEY (id));''')

        cnx.commit()
        cursor.close()
        cnx.close()

    def getAllEmployees(self):
        cnx = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database)
        cursor = cnx.cursor()
        query = "SELECT * FROM employees;"
        cursor.execute(query)
        employees = cursor.fetchall()
        return employees

    def getEmployee(self, empId):
        cnx = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database)
        cursor = cnx.cursor()
        query = f"SELECT * FROM employees WHERE Id={empId};"
        cursor.execute(query)
        emp = cursor.fetchall()
        return emp

    def hire(self, emp):
        cnx = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database)
        cursor = cnx.cursor()
        query = f"""
        INSERT INTO employees (
            Id,
            full_name,
            email,
            salary,
            is_manager,
            money,
            work_hours,
            sleep_hours,
            meals_amount
            )
        VALUES(
            '{emp.id}',
            '{emp.fullName}',
            '{emp.email}',
            '{emp.salary}',
            '{emp.isManager}',
            '{emp.money}',
            '{emp.workHours}',
            '{emp.sleepHours}',
            '{emp.mealsAmount}'
            )
        """
        cursor.execute(query)

        cnx.commit()
        cursor.close()
        cnx.close()

    def fire(self, empId):
        cnx = mysql.connector.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database)
        cursor = cnx.cursor()
        query = f"DELETE FROM employees WHERE Id={empId};"
        cursor.execute(query)

        cnx.commit()
        cursor.close()
        cnx.close()
