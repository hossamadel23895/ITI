#include <iostream>
#include <string.h>

using namespace std;

class Person
{
    protected:
        int id;
        char name[10];
    public:
        Person(){id=0; strcpy(name, "");}               //Constructors
        Person(int F_Id){id=F_Id; strcpy(name, "");}
        Person(int F_Id, char F_Name[10]){id=F_Id; strcpy(name, F_Name);}

        void SetId(int F_Id){id=F_Id;}                       //Setters and Getters
        void SetName(char F_Name[10]){strcpy(name, F_Name);}
        int GetId(){return id;}
        char* GetName(){return name;}

        Print()
        {
            cout << "Person ID is : " << id << endl;
            cout << "Person Name is : " << name << endl;
            cout <<endl;
        }
};

class Employee:public Person
{
    protected:
        float salary;
    public:
        Employee(){salary=0;}                           //Constructors
        Employee(int F_Id, char F_Name[10], float F_Salary) : Person(F_Id, F_Name) // Inheritance
        {
            salary = F_Salary;
        }
        void SetSalary(float F_Salary){salary = F_Salary;}
        float GetSalary(){return salary;}

        Print()
        {
            cout << "Employee ID is : " << id << endl;
            cout << "Employee Name is : " << name << endl;
            cout << "Employee Salary is : " << salary << endl;
            cout <<endl;
        }
};


class Customer:public Person
{
    protected:
        int contact;
    public:
        Customer(){contact=0;}                           //Constructors
        Customer(int F_Id, char F_Name[10], int F_Contact) : Person(F_Id, F_Name) // Inheritance
        {
            contact = F_Contact;
        }
        void SetContact(int F_Contact){contact = F_Contact;}
        float GetContact(){return contact;}

        Print()
        {
            cout << "Customer ID is : " << id << endl;
            cout << "Customer Name is : " << name << endl;
            cout << "Customer Contact is : " << contact << endl;
            cout <<endl;
        }
};



int main()
{
    Person M_P1(10,"Hossam");
    M_P1.Print();

    Employee M_E1(20,"Hossam", 10000);
    M_E1.Print();

    Customer M_C1(20,"Hossam", 50);
    M_C1.Print();
    return 0;
}
