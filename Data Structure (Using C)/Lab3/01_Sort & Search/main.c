#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Employee
{
    int id;
    char name[10];
    int salary;
};

void AddEmp(struct Employee F_Emp, struct Employee F_Arr[], int* F_pLLen);

void PrintList(struct Employee F_Arr[], int* F_pLLen);

void BubbleSortName(struct Employee F_Arr[], int F_LLen);

void MergeSortId(int F_low, int F_high, struct Employee F_Arr[], int* F_pLLen);

int BinarySearch(struct Employee F_Arr[], int F_LB, int F_UB, int F_id);

void Merge(int F_low, int F_mid, int F_high, struct Employee F_Arr[], int* F_pLLen);

int main()
{
    int LSize, choice, LLen=0, flag=1;
    int* pLLen;
    pLLen=&LLen;

    printf("Search & Sort App\n");
    printf("Please enter your Employee list size : ");
    scanf("%d", &LSize);
    system("cls");

    struct Employee Arr[LSize];

    do
    {
        printf("Employee Sort & Search App\n");
        printf("1-Add an employee\n");
        printf("2-Display list\n");
        printf("3-Clear list\n");
        printf("4-Sort by name - Bubble sort\n");
        printf("5-Sort by ID - merge sort\n");
        printf("6-Search by ID - Binary search\n");
        printf("7-Exit\n");
        printf("Please enter your choice number : ");

        scanf("%d", &choice);

        switch(choice)
        {
        case (1):
            {
                if(LLen>=LSize) // queue is full
                {
                    printf("List is full, no place to add another employee.");
                }
                else
                {
                    struct Employee T_Emp;

                    printf("Please enter Employee ID : ");
                    scanf("%d", &T_Emp.id);
                    printf("Please enter Employee Name : ");
                    scanf("%s", &T_Emp.name);
                    printf("Please enter Employee Salary : ");
                    scanf("%d", &T_Emp.salary);

                    AddEmp(T_Emp, Arr, pLLen);
                }

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }

        case (2):
            {
                if(LLen==0) // List is empty
                {
                    printf("List is empty, nothing to print.");
                }
                else
                {
                    PrintList(Arr, pLLen);
                }

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }


        case (3):
            {
                LLen=0;

                printf("\nList was cleared!");

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }


        case (4):
            {
                BubbleSortName(Arr, LLen);

                printf("\nList was sorted!");

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }

        case (5):
            {
                MergeSortId(0, LLen, Arr, pLLen);

                printf("\nList was sorted!");

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }
        case (6):
            {
                printf("\nPlease enter ID to search for : ");
                int U_id;
                scanf("%d", &U_id);

                int T_Val;

                T_Val = BinarySearch(Arr, 0, LLen, U_id);

                if(T_Val)
                {
                    printf("ID was found!");
                    printf("\nEmployee ID is : %d", Arr[U_id-1].id);
                    printf("\nEmployee Name is : %s", Arr[U_id-1].name);
                    printf("\nEmployee Salary is : %d\n", Arr[U_id-1].salary);
                }
                else
                {
                    printf("ID was not found!");
                }

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }


        case (7):
            {
                flag = 0;
                break;
            }

        }
        system("cls");

    }
    while (flag);

    return 0;
}

void AddEmp(struct Employee F_Emp, struct Employee F_Arr[], int* F_pLLen)
{
    F_Arr[*F_pLLen].id = F_Emp.id;
    strcpy(F_Arr[*F_pLLen].name, F_Emp.name);
    F_Arr[*F_pLLen].salary = F_Emp.salary;
    (*F_pLLen)++;
    printf("Employee was added to the list!");
}

void PrintList(struct Employee F_Arr[], int* F_pLLen)
{
    int i;
    for(i=1; i<=*F_pLLen; i++)
    {
        printf("\nEmployee no.%d", i);
        printf("\nEmployee no.%d ID is : %d", i, F_Arr[i-1].id);
        printf("\nEmployee no.%d Name is : %s", i, F_Arr[i-1].name);
        printf("\nEmployee no.%d Salary is : %d\n", i, F_Arr[i-1].salary);
    }
};


void BubbleSortName(struct Employee F_Arr[], int F_LLen)
{
   int i, j;
   struct Employee T_Emp;
   int swapped=1;

   for (i=0; i<F_LLen-1 &&swapped; i++)
   {
       swapped=0;

       for(j=0; j<F_LLen-1-i; j++)  //fixes the overhead.
       {
           if(strcmp(F_Arr[j].name, F_Arr[j+1].name)>0)  //repeats only if he enter.
           {
               T_Emp=F_Arr[j];
               F_Arr[j] = F_Arr[j+1];
               F_Arr[j+1]=T_Emp;
               swapped=1;
           }
       }
   }
}




void MergeSortId(int F_low, int F_high, struct Employee F_Arr[], int* F_pLLen)
{
    int T_mid;
    if(F_low<F_high) // base case.
    {
        T_mid =(F_low+F_high)/2;
        MergeSortId(F_low, T_mid, F_Arr, F_pLLen);
        MergeSortId(T_mid+1, F_high, F_Arr, F_pLLen);
        Merge(F_low, T_mid, F_high, F_Arr, F_pLLen);
    }
}


void Merge(int F_low, int F_mid, int F_high, struct Employee F_Arr[], int* F_pLLen)
{
    struct Employee T_Arr[*F_pLLen];
    int list1, list2, i;
    list1 = F_low;
    list2 = F_mid+1;
    i = F_low;
    while(list1<=F_mid && list2<=F_high)
    {
        if (F_Arr[list1].id<F_Arr[list2].id)
        {
            T_Arr[i]=F_Arr[list1];
            list1++;
            i++;
        }
        else
        {
            T_Arr[i]=F_Arr[list2];
            list2++;
            i++;
        }
    }
    while(list1<=F_mid)
    {
        T_Arr[i]=F_Arr[list1];
        list1++;
        i++;
    }
    while(list2<=F_mid)
    {
        T_Arr[i]=F_Arr[list2];
        list2++;
        i++;
    }
    for(i=F_low; i<=F_high; i++)
        {
            F_Arr[i] = T_Arr[i];
        }
}




int BinarySearch(struct Employee F_Arr[], int F_LB, int F_UB, int F_id)
{
    int T_mid;
    int T_loc=0; // if data was't found.
    while(F_LB<=F_UB && T_loc==0)
    {
        T_mid = (F_LB+F_UB)/2;

        if(F_Arr[T_mid].id==F_id)
        {
            T_loc=1; // data was found.
        }
        else
        {
            if(F_Arr[T_mid].id<F_id) //data to the right.
            {
                F_LB = T_mid+1; //throw all the unneeded left.
            }
            else
            {
                F_UB = T_mid-1; //data to the left, throw all the unneeded right.
            }
        }
    }
    return T_loc;
}


