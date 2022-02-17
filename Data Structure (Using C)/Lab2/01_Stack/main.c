#include <stdio.h>
#include <stdlib.h>

struct Employee
{
    int id;
    char name[10];
    int salary;
};

struct Node
{
    struct Employee N_Emp;
    struct Node* pNext;
};

struct Node* CreateNode(struct Employee F_Emp);

int PushNode(struct Employee F_Emp, int F_Size, int* F_pTOS);

void PopNode(int* F_pTOS);

void PrintStack(void);

struct Node* pHead;
struct Node* pTail;


int main()
{
    int S_Size, flag=1;
    struct Employee T_Emp;
    int* pTemp;
    int TOS=1;
    int* pTOS;
    pTOS = &TOS;

    printf("Employee Stack App\n");
    printf("Please enter stack size : ");
    scanf("%d", &S_Size);
    system("cls");

    do
    {
        printf("Employee List App\n");
        printf("1-Push Employee to the stack\n");
        printf("2-Pop Employee from the stack\n");
        printf("3-Display stack\n");
        printf("4-Exit\n");
        printf("Please enter your choice number : ");

        int choice;
        scanf("%d", &choice);

        switch(choice)
        {
        case (1):
            printf("Please enter Employee ID : ");
            scanf("%d", &T_Emp.id);
            printf("Please enter Employee Name : ");
            scanf("%s", &T_Emp.name);
            printf("Please enter Employee Salary : ");
            scanf("%d", &T_Emp.salary);

            int Temp = PushNode(T_Emp, S_Size, pTOS);
            if (Temp)
            {
                printf("Employee was added to the stack!");
            }
            else
            {
                printf("Stack is full, Please pop a node first");
            }

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (2):
            PopNode(pTOS);

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (3):
            PrintStack();

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


struct Node* CreateNode(struct Employee F_Emp)
{
    struct Node* pTemp;
    pTemp = (struct Node*)malloc(sizeof(struct Node));
    if (pTemp)
    {
        pTemp -> N_Emp.id = F_Emp.id;
        strcpy(pTemp -> N_Emp.name, F_Emp.name);
        pTemp -> N_Emp.salary = F_Emp.salary;
        pTemp -> pNext = NULL;
    }
    return pTemp;
};


int PushNode(struct Employee F_Emp, int F_Size, int* F_pTOS)
{
    int retval = 0;
    struct Node* pTemp;
    pTemp = CreateNode(F_Emp);
    if(pTemp)          // there is a point created
    {
        if(F_Size<*F_pTOS) // Stack is full
        {
            retval=0;
        }
        else
        {
            if(!pHead)   // there is no list
            {
                pHead=pTail=pTemp;
            }
            else        // there is a list of at least one node
            {
                pTail->pNext = pTemp;
                pTail = pTemp;
            }
            retval=1;
            (*F_pTOS)++;
        }
    }
    return retval;
};


void PopNode(int* F_pTOS)
{
    int i=1;
    struct Node *pTemp;
    pTemp=pHead;
    if(!pHead) // no list.
    {
        printf("No Elements in the stack yet");
    }
    else
    {
        if(pHead==pTail) // list of 1 node only.
        {
            printf("\nEmployee %d", *F_pTOS-1);
            printf("\nEmployee no. %d ID is : %d", i, pTemp->N_Emp.id);
            printf("\nEmployee no. %d Name is : %s", i, pTemp->N_Emp.name);
            printf("\nEmployee no. %d Salary is : %d\n", i, pTemp->N_Emp.salary);
            pHead=pTail=NULL;
        }
        else // list of more than 1 node.
        {
            for(i=2; i<*F_pTOS-1; i++)
            {
                pTemp=pTemp->pNext;
                free(pTemp);
            }
            printf("\nEmployee %d", *F_pTOS-1);
            printf("\nEmployee no. %d ID is : %d", *F_pTOS-1, pTail->N_Emp.id);
            printf("\nEmployee no. %d Name is : %s", *F_pTOS-1, pTail->N_Emp.name);
            printf("\nEmployee no. %d Salary is : %d\n", *F_pTOS-1, pTail->N_Emp.salary);

            pTemp->pNext=NULL;
            free(pTail);
            pTail=pTemp;
        }
        (*F_pTOS)--;
    }
};

void PrintStack(void)
{
    int i=1;
    struct Node* pTemp;
    pTemp = pHead;
    if(!pTemp) // no stack existing
    {
        printf("No elements in the stack to display");
    }
    while(pTemp!=NULL)
    {
        printf("\nEmployee %d", i);
        printf("\nEmployee no.%d ID is : %d", i, pTemp->N_Emp.id);
        printf("\nEmployee no.%d Name is : %s", i, pTemp->N_Emp.name);
        printf("\nEmployee no.%d Salary is : %d\n", i, pTemp->N_Emp.salary);

        i++;

        pTemp = pTemp->pNext;
    }
};
