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
        static int Count;
        static char* company;
 
    public:
        // Setters
 
        void setId(int F_Id)
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
 
        static void setCompany(char* F_Company)
        {
            delete (company);
            company = new char[strlen(F_Company)+1];
            strcpy(company, F_Company);
        }
 
        // Getters
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
 
        static char* GetCompany()
        {
            return company;
        }
 
        static int GetCount()
        {
            return Count;
        }
 
        // Constructors
        Employee()
        {
            setId(0);
            name = new char;
            setSalary(0);
            Count++;
        }
 
        Employee(int F_Id)
        {
            setId(F_Id);
            name = new char;
            setSalary(0);
            Count++;
        }
 
        Employee(int F_Id, char* F_Name)
        {
            setId(F_Id);
            name = new char;
            setName(F_Name);
            setSalary(0);
            Count++;
        }
 
        Employee(int F_Id, char* F_Name, float F_Salary)
        {
            setId(F_Id);
            name = new char;
            setName(F_Name);
            setSalary(F_Salary);
            Count++;
        }
 
 
        ~Employee() // Destructor
        {
            delete (name);
            Count--;
        };
 
 
        Employee(Employee& F_Emp) // Copy constructor
        {
            id = F_Emp.id;
            salary = F_Emp.salary;
            name = new char[strlen(F_Emp.name)+1];
            strcpy(name, F_Emp.name);
            Count++;
        }
};
 
 
int Employee::Count = 0;
char* Employee::company = "ITI";
 
 
 
 
 
Employee FillEmp()    // non members functions
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
 
    cout << "Employee Company Name is : " << F_Emp.GetCompany() << endl;
}
 
 
 
 
 
 
 
 
 
 
 
int main()
{
    Employee M_Emp1(10, "Hossam", 1000);
    PrintEmp(M_Emp1);
    cout << "Counter now is : " << Employee::GetCount() <<endl;
    cout << endl;
 
    Employee M_Emp2(20, "Adel", 2000);
    PrintEmp(M_Emp2);
    cout << "Counter now is : " << Employee::GetCount() <<endl;
 
    cout << "Press any key to continue";
    getch();
    return 0;
}
 