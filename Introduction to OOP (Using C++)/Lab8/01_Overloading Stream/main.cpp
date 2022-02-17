#include <iostream>
#include <string.h>
#include<conio.h>

using namespace std;

class Employee
{
    private:
        int id;
        char *name;
        int salary;

    public:
        void setId(int F_Id) // setters and getters
        {
            id = F_Id;
        }
        void setName(char* F_Name)
        {
            delete (name);
            name = new char[strlen(F_Name)+1];
            strcpy(name, F_Name);
        }

        void setSalary(int F_Salary)
        {
            salary = F_Salary;
        }

        int GetId()
        {
            return id;
        }
        char* GetName()
        {
            return name;
        }

        int GetSalary()
        {
            return salary;
        }



        Employee() // Constructors
        {
            setId(0);
            name = new char;
            setSalary(0);
        }

        Employee(int F_Id) // print that name and salary are not sent.
        {
            setId(F_Id);
            name = new char;
            setSalary(0);
        }

        Employee(int F_Id, char* F_Name) //print that salary is not sent.
        {
            setId(F_Id);
            name = new char;
            setName(F_Name);
            setSalary(0);
        }

        Employee(int F_Id, char* F_Name, float F_Salary) //print that all was sent.
        {
            setId(F_Id);
            name = new char;
            setName(F_Name);
            setSalary(F_Salary);
        }


        ~Employee() //Destructor
        {
            delete (name);
        }


        Employee(Employee& F_Emp) //Copy constructor
        {
            id = F_Emp.id;
            salary = F_Emp.salary;
            name = new char[strlen(F_Emp.name)+1];
            strcpy(name, F_Emp.name);
        }


        friend ostream& operator << (ostream& f_out, Employee f_emp)
        {
            f_out << "Employee ID is : " << f_emp.id << endl;
            f_out << "Employee Name is : " << f_emp.name << endl;
            f_out << "Employee Salary is : " << f_emp.salary << endl;
            return cout;
        }


        friend istream& operator >> (istream& f_in, Employee& f_emp)
        {
            cout << "Please enter Employee ID : ";
            cin >> f_emp.id;

            cout << "Please enter Employee Name : ";
            cin >> f_emp.name;

            cout << "Please enter Employee Salary : ";
            cin >> f_emp.salary;

            return cin;
        }

};


int main()
{
    Employee m_emp5;

    cin >> m_emp5;

    cout << m_emp5;

    cout << "Press any key to continue";
    getch();
    return 0;
}
