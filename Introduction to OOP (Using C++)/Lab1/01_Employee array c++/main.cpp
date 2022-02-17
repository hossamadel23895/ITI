#include <iostream>

using namespace std;

struct Employee
{
    int id;
    char name[10];
    int salary;
    int Mgr_Id;
};

void FillEmp(Employee* F_ptr, int F_Size, int F_Mgr_Id=1)
{
    int i;
    for(i=1; i<=F_Size; i++)
    {
        cout << "Please enter employee " <<i<< " ID is : ";
        cin >> F_ptr[i-1].id;
        cout << "Please enter employee " <<i<< " Name is : ";
        cin >> F_ptr[i-1].name;
        cout << "Please enter employee " <<i<< " Salary is : ";
        cin >> F_ptr[i-1].salary;

        F_ptr[i-1].Mgr_Id = F_Mgr_Id;
    }
}

void PrintArray(Employee* F_ptr, int F_Size)
{
    int i;
    for(i=1; i<=F_Size; i++)
    {
        cout << "Employee " <<i<< " ID is : " << F_ptr[i-1].id << endl;
        cout << "Employee " <<i<< " Name is : " << F_ptr[i-1].name << endl;
        cout << "Employee " <<i<< " Salary is : " << F_ptr[i-1].salary << endl;
        cout << "Employee " <<i<< " Manager ID is : " << F_ptr[i-1].Mgr_Id << endl;
    }
}

int main()
{
    int U_Size, temp;
    cout << "Please enter Employees number : ";
    cin >> U_Size;

    Employee *ptr;
    ptr = new Employee[U_Size];

    FillEmp(ptr, U_Size);
    PrintArray(ptr, U_Size);
    cout << "Press any key to continue";
    cin >> temp;
    return 0;
}
