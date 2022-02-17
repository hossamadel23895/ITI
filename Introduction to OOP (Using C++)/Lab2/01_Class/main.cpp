#include <iostream>
#include <string.h>

using namespace std;

class Employee
{
    private:
    int id;
    char name[10];
    int salary;

    public:
    void setId(int F_Id);
    void setName(char F_Name[10]);
    void setSalary(int F_Salary);

    int GetId();
    char* GetName();
    int GetSalary();
};

Employee FillEmp();
void PrintArray(Employee F_Emp);

int main()
{
    int i, U_Size, temp;
    cout << "Please enter Employees number : ";
    cin >> U_Size;

    Employee U_Emp[U_Size];
    for (i=0; i<U_Size; i++)
    {
        U_Emp[i] = FillEmp();
    }
    for (i=0; i<U_Size; i++)
    {
        PrintArray(U_Emp[i]);
    }
    cout << "Press any key to continue";
    cin >> temp;
    return 0;
}


Employee FillEmp()
{
    Employee T_Emp;
    int T_Id, T_Salary;
    char T_Name[10];

    cout << "Please enter Employee ID : ";
    cin >> T_Id;
    T_Emp.setId(T_Id);

    cout << "Please enter Employee Name : ";
    cin >> T_Name;
    T_Emp.setName(T_Name);

    cout << "Please enter Employee Salary : ";
    cin >> T_Salary;
    T_Emp.setSalary(T_Salary);
    return T_Emp;
}

void PrintArray(Employee F_Emp)
{
    int T_Id, T_Salary;
    char* T_Name;
    T_Id = F_Emp.GetId();
    cout << "Employee ID is : " << T_Id << endl;

    T_Name = F_Emp.GetName();
    cout << "Employee Name is : " << T_Name << endl;

    T_Salary = F_Emp.GetSalary();
    cout << "Employee Salary is : " << T_Salary << endl;
}



void Employee::setId(int F_Id)
{
    id = F_Id;
}
void Employee::setName(char F_Name[10])
{
    strcpy(name, F_Name);
}

void Employee::setSalary(int F_Salary)
{
    salary = F_Salary;
}

int Employee::GetId()
{
    return id;
}
char* Employee::GetName()
{
    return name;
}

int Employee::GetSalary()
{
    return salary;
}
