#include <stdio.h>
#include <stdlib.h>

struct Employee
{
    int id;
    char name[10];
    int salary;
};

void inqueue(struct Employee F_Emp, struct Employee F_Arr[], int* F_pQLen);

void dequeue(struct Employee F_Arr[], int* F_pQLen);

void PrintQueue(struct Employee F_Arr[], int* F_pQLen);


int main()
{
    int QSize, choice, QLen=0, flag=1;
    int* pQLen;
    pQLen=&QLen;

    printf("Employee Queue App\n");
    printf("Please enter your queue size : ");
    scanf("%d", &QSize);
    system("cls");

    struct Employee Arr[QSize];

    do
    {
        printf("Employee List App\n");
        printf("1-InQueue an employee\n");
        printf("2-DeQueue an employee\n");
        printf("3-Display queue\n");
        printf("4-Exit\n");
        printf("Please enter your choice number : ");

        scanf("%d", &choice);

        switch(choice)
        {
        case (1):

            if(QLen>=QSize) // queue is full
            {
                printf("Queue is full, DeQueue an employee first before adding new one.");
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

                inqueue(T_Emp, Arr, pQLen);
            }

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (2):
            if(QLen==0) // Queue is empty
            {
                printf("Queue is empty, Can't dequeue from an empty queue.");
            }
            else
            {
                dequeue(Arr, pQLen);
            }

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (3):
            if(QLen==0) // Queue is empty
            {
                printf("Queue is empty, nothing to print.");
            }
            else
            {
                PrintQueue(Arr, pQLen);
            }

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (4):
            flag = 0;
            break;
        }
        system("cls");

    }
    while (flag);

    return 0;
}

void inqueue(struct Employee F_Emp, struct Employee F_Arr[], int* F_pQLen)
{
    F_Arr[*F_pQLen].id = F_Emp.id;
    strcpy(F_Arr[*F_pQLen].name, F_Emp.name);
    F_Arr[*F_pQLen].salary = F_Emp.salary;
    (*F_pQLen)++;
    printf("Employee was added to the queue!");
}

void dequeue(struct Employee F_Arr[], int* F_pQLen)
{
    printf("\nEmployee ID is : %d", F_Arr[0].id);
    printf("\nEmployee Name is : %s", F_Arr[0].name);
    printf("\nEmployee Salary is : %d\n", F_Arr[0].salary);

    int i;
    for(i=1; i<=*F_pQLen; i++)
    {
        F_Arr[i-1] = F_Arr[i];
        F_Arr[i] = F_Arr[i+1];
    }
    (*F_pQLen)--;
}


void PrintQueue(struct Employee F_Arr[], int* F_pQLen)
{
    int i;
    for(i=1; i<=*F_pQLen; i++)
    {
        printf("\nEmployee no.%d", i);
        printf("\nEmployee no.%d ID is : %d", i, F_Arr[i-1].id);
        printf("\nEmployee no.%d Name is : %s", i, F_Arr[i-1].name);
        printf("\nEmployee no.%d Salary is : %d\n", i, F_Arr[i-1].salary);
    }
};
