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
        // Setters and Getters
        void setId(int F_Id){id = F_Id;}
        void setName(char* F_Name){delete (name); name = new char[strlen(F_Name)+1]; strcpy(name, F_Name);}
        void setSalary(int F_Salary){salary = F_Salary;}

        int GetId(){return id;}
        char* GetName(){return name;}
        int GetSalary(){return salary;}


        // Constructors
        Employee() 
        {
            setId(0);
            name = new char;
            setSalary(0);
        }

        Employee(int F_Id)
        {
            setId(F_Id);
            name = new char;
            setSalary(0);
        }

        Employee(int F_Id, char* F_Name)
        {
            setId(F_Id);
            name = new char;
            setName(F_Name);
            setSalary(0);
        }

        Employee(int F_Id, char* F_Name, float F_Salary)
        {
            setId(F_Id);
            name = new char;
            setName(F_Name);
            setSalary(F_Salary);
        }


        // Destructor
        ~Employee() 
        {
            delete (name);
        };


        // Copy constructor
        Employee(Employee& F_Emp) 
        {
            id = F_Emp.id;
            salary = F_Emp.salary;
            name = new char[strlen(F_Emp.name)+1];
            strcpy(name, F_Emp.name);
        }
};








Employee FillEmp()    // Non members functions
{
    Employee T_Emp;
    int T_Id, T_Salary;
    char T_Name[10];

    cout << "Please enter Employee ID : ";
    cin >> T_Id;

    cout << "Please enter Employee Name : ";
    cin >> T_Name;

    cout << "Please enter Employee Salary : ";
    cin >> T_Salary;

    T_Emp.setId(T_Id);
    T_Emp.setName(T_Name);
    T_Emp.setSalary(T_Salary);

    return T_Emp;
}


void PrintEmp(Employee F_Emp)
{
    cout << "Employee ID is : " << F_Emp.GetId() << endl;

    cout << "Employee Name is : " << F_Emp.GetName() << endl;

    cout << "Employee Salary is : " << F_Emp.GetSalary() << endl;
}













int main()
{
    /*
    Employee M_Emp1;
    Employee M_Emp2(13);
    Employee M_Emp3(13, "Hossam");
    Employee M_Emp4(13, "Adel", 15000.5);
    */

    Employee M_Emp5;
    M_Emp5 = FillEmp();
    PrintEmp(M_Emp5);

    cout << "Press any key to continue";
    getch();
    return 0;
}