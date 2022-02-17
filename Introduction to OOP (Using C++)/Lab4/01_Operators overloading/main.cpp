#include <iostream>
#include <string.h>
#include<conio.h>
#include <string>

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


        ~Employee() // Destructor
        {
            delete (name);
        };


        Employee(Employee& F_Emp) // Copy constructor
        {
            id = F_Emp.id;
            salary = F_Emp.salary;
            name = new char[strlen(F_Emp.name)+1];
            strcpy(name, F_Emp.name);
        }

        // Operators overloading

        Employee operator+(Employee F_Emp)      // Emp1 + Emp2
		{
            Employee T_Emp;

            T_Emp.id = id + F_Emp.id;

            char *T_Name;
            T_Name = new char[strlen(name)+strlen(F_Emp.name)+1];
            strcpy(T_Name, name);
            strcat(T_Name, F_Emp.name);
            T_Emp.setName(T_Name);

            T_Emp.salary = salary + F_Emp.salary;

			return T_Emp;
		}

        Employee operator+(int F_Salary)      // Emp + number
		{
            Employee T_Emp;

            T_Emp.id = id;

            T_Emp.setName(name);

            T_Emp.salary = salary + F_Salary;

			return T_Emp;
		}


        Employee operator+(char* F_Name)        // Emp + name
		{
            Employee T_Emp;

            T_Emp.id = id;

            char *T_Name;
            T_Name = new char[strlen(name)+strlen(F_Name)+1];
            strcpy(T_Name, name);
            strcat(T_Name, F_Name);
            T_Emp.setName(T_Name);

            T_Emp.salary = salary;

			return T_Emp;
		}


        operator int()                          //(int) Emp1
        {
            return id;
        }


        operator char*()                        //(char*) Emp1
        {
            return name;
        }


        Employee operator++()                   // Pre-increment (++C)
        {
            id++;
            salary++;

            Employee T_Emp;

            T_Emp.id = id;

            char *T_Name;
            T_Name = new char[strlen(name)];
            strcpy(T_Name, name);
            T_Emp.setName(T_Name);

            T_Emp.salary = salary;

			return T_Emp;
        }


        Employee operator++(int Rubbish)                   // Post-increment (++C)
        {
            Employee Old_Emp;

            Old_Emp.id = id;

            char *T_Name;
            T_Name = new char[strlen(name)+1];
            strcpy(T_Name, name);
            Old_Emp.setName(T_Name);

            Old_Emp.salary = salary;

            id++;
            salary++;
			return Old_Emp;
        }

        int operator==(Employee F_Emp)
        {
            return (id==F_Emp.id && !strcmp(name, F_Emp.name) && salary==F_Emp.salary);
        }

};



// non members overloading

Employee operator+(int F_Salary, Employee F_Emp)      // number + Emp
{
    Employee T_Emp;

    T_Emp.setId(F_Emp.GetId());

    T_Emp.setName(F_Emp.GetName());

    T_Emp.setSalary(F_Salary + F_Emp.GetSalary());

    return T_Emp;
}

Employee operator+(char* F_Name, Employee F_Emp)      // name + Emp
{
    Employee T_Emp;

    T_Emp.setId(F_Emp.GetId());

    char *T_Name;
    T_Name = new char[strlen(F_Name)+strlen(F_Emp.GetName())+1];
    strcpy(T_Name, F_Name);
    strcat(T_Name, F_Emp.GetName());
    T_Emp.setName(T_Name);

    T_Emp.setSalary(F_Emp.GetSalary());

    return T_Emp;
}



// non members functions

Employee FillEmp()
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
    cout <<endl;
    cout << "----------------------------------------------------"<< endl;

    Employee M_Emp1(10,"Hossam ", 3000), M_Emp2(20,"Adel", 7000);
    cout << "Emp1 Details" << endl;
    PrintEmp(M_Emp1);
    cout << endl;
    cout << "Emp2 Details" << endl;
    PrintEmp(M_Emp2);
    cout << endl;


    // (1) Emp1 + Emp2
    Employee M_Emp3;
    M_Emp3 = M_Emp1 + M_Emp2;
    cout << "(1) Emp1 + Emp2" << endl;
    PrintEmp(M_Emp3);
    cout << endl;

    // (2) Emp1 + 1000
    Employee M_Emp4;
    M_Emp4 = M_Emp1 + 1000;
    cout << "(2) Emp1 + 1000" << endl;
    PrintEmp(M_Emp4);
    cout << endl;

    // (3) 1000 + Emp1
    Employee M_Emp5;
    M_Emp5 = 1000 + M_Emp1;
    cout << "(3) 1000 + Emp1" << endl;
    PrintEmp(M_Emp5);
    cout << endl;

    // (4) Emp1 + "Ahmed"
    Employee M_Emp6;
    M_Emp6 = M_Emp1 + "Ahmed";
    cout << "(4) Emp1 + Ahmed " << endl;
    PrintEmp(M_Emp6);
    cout << endl;

    // (5) "Ahmed" + Emp1
    Employee M_Emp7;
    M_Emp7 = "Ahmed " + M_Emp1;
    cout << "(5) Ahmed + Emp1" << endl;
    PrintEmp(M_Emp7);
    cout << endl;

    // (6) (int) Emp1
    int M_Id8;
    M_Id8 = (int) M_Emp1;
    cout << "(6) (int) Emp1" << endl;
    cout << M_Id8 << endl;
    cout << endl;

    // (7) (char*) Emp1
    char* M_Id9;
    M_Id9 = (char*) M_Emp1;
    cout << "(7) (char*) Emp1" << endl;
    cout << M_Id9 << endl;
    cout << endl;

    // (8) ++Emp1
    Employee M_Emp10;
    M_Emp10 = ++M_Emp1;
    cout << "(8) ++Emp1" << endl;
    PrintEmp(M_Emp10);
    cout << "(8) New Emp1" << endl;
    PrintEmp(M_Emp1);
    cout << endl;

    // (9) Emp1++
    Employee M_Emp11;
    M_Emp11 = M_Emp1++;
    cout << "(9) Emp1++" << endl;
    PrintEmp(M_Emp11);
    cout << "(9) New Emp1" << endl;
    PrintEmp(M_Emp1);
    cout << endl;

    // (10) Emp1 == Emp2
    int M_Logic1, M_Logic2;
    M_Logic1 = M_Emp1==M_Emp1;
    M_Logic2 = M_Emp1==M_Emp2;
    cout << "(10) Emp1 == Emp1" << endl;
    cout << M_Logic1 << endl;
    cout << "(10) Emp1 == Emp2" << endl;
    cout << M_Logic2 << endl;
    cout << endl;

    cout << "----------------------------------------------------"<< endl;
    cout << "Press any key to continue";
    getch();
    return 0;
}


