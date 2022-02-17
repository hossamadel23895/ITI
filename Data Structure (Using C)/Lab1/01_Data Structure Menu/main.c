#include<stdio.h>
#include<stdlib.h>

struct Employee
{
    int id;
    char name[10];
    int salary;
};

struct Node
{
    struct Employee N_Emp;
    struct Node* pPrev;
    struct Node* pNext;
};

struct Node* pHead;
struct Node* pTail;

struct Node* CreateNode(struct Employee F_Emp);
int AddNode(struct Employee emp);
int InsertNode(struct Employee emp, int loc);
int DeleteNode(int loc);

struct Node* SearchById(int F_Id);

struct Node* SearchByName(char F_name[10]);

void PrintNode(struct Node*);

void PrintAll(void);

void FreeList(void);

int main()
{

    int choice, flag=1, T_Loc, check;

    struct Employee* pTemp;

    struct Employee T_Emp;

    do
    {
        printf("Employee List App\n");
        printf("1-Add Employee\n");
        printf("2-Delete Employee\n");
        printf("3-Insert Employee\n");
        printf("4-Search by ID\n");
        printf("5-Search by Name\n");
        printf("6-Display all\n");
        printf("7-Free list\n");
        printf("8-Exit\n");
        printf("Please enter your choice number : ");

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

            int Temp = AddNode(T_Emp);
            if (Temp)
            {
                printf("user created");
            }

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (2):
            printf("Please enter Employee table number : ");
            scanf("%d", &T_Loc);

            check = DeleteNode(T_Loc);
            if (check==1)
            {
                printf("Node was deleted");
            }
            else
            {
                printf("No node to delete");
            }

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (3):
            printf("Please enter Employee ID : ");

            scanf("%d", &T_Emp.id);
            printf("Please enter Employee Name : ");
            scanf("%s", &T_Emp.name);
            printf("Please enter Employee Salary : ");
            scanf("%d", &T_Emp.salary);

            printf("Please enter table location to insert : ");
            scanf("%d", &T_Loc);

            int check;
            check = InsertNode(T_Emp, T_Loc);
            if(check)
            {
                printf("Adding was successful!");

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
            }
            else
            {
                printf("Operation failed");
                printf("\nPress any key to do another operation");
                getch();
                system("cls");
            }
            break;

        case (4):
            printf("Please enter Employee ID to search for : ");
            int T_ID;
            scanf("%d", &T_ID);
            pTemp = SearchById(T_ID);
            if (pTemp==NULL)
            {
                printf("Employee was not found");
            }
            else
            {
                printf("\nEmployee was found!");
                PrintNode(pTemp);
            }

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (5):
            printf("Please enter Employee Name to search for : ");
            char T_name[10];
            scanf("%s", &T_name);
            pTemp = SearchByName(T_name);
            if (pTemp==NULL)
            {
                printf("Employee was not found");
            }
            else
            {
                printf("\nEmployee was found!");
                PrintNode(pTemp);
            }

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (6):
            PrintAll();

            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (7):
            FreeList();
            printf("List Was Deleted");
            printf("\nPress any key to do another operation");
            getch();
            system("cls");
            break;

        case (8):
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
    struct Node* ptr;
    ptr = (struct Node*)malloc(sizeof(struct Node));
    if (ptr)
    {
        ptr -> N_Emp.id = F_Emp.id;
        strcpy(ptr -> N_Emp.name, F_Emp.name);
        ptr -> N_Emp.salary = F_Emp.salary;
        ptr -> pPrev = NULL;
        ptr -> pNext = NULL;
    }
    return ptr;
};

int AddNode(struct Employee F_Emp)
{
    int retval = 0;
    struct Node* ptr;
    ptr = CreateNode(F_Emp);
    if(ptr)          // there is a point created
    {
        if(!pHead)   // there is no list
        {
            pHead=pTail=ptr;
        }
        else        // there is a list of at least one node
        {
            ptr->pPrev = pTail;
            pTail->pNext = ptr;
            pTail = ptr;
        }
        retval = 1;
    }
    return retval;
};

struct Node* SearchById(int F_Id)
{
    struct Node* pTemp;
    pTemp = pHead;
    while(pTemp && pTemp->N_Emp.id != F_Id)
    {
        pTemp = pTemp->pNext;
    }
    return pTemp;
};

struct Node* SearchByName(char F_name[10])
{
    struct Node* pTemp;
    pTemp = pHead;
    while(pTemp && strcmp(F_name, pTemp->N_Emp.name))
    {
        pTemp = pTemp->pNext;
    }
    return pTemp;
};

void PrintNode(struct Node* F_pTemp)
{
    struct Node* pTemp;
    pTemp = F_pTemp;
    printf("\nEmployee ID is : %d", pTemp->N_Emp.id);
    printf("\nEmployee Name is : %s", pTemp->N_Emp.name);
    printf("\nEmployee Salary is : %d\n", pTemp->N_Emp.salary);
};

void PrintAll(void)
{
    int i=0;
    struct Node* ptr;
    ptr = pHead;
    while(ptr!=NULL)
    {
        printf("\nEmployee %d", i);
        printf("\nEmployee no. %d ID is : %d", i, ptr->N_Emp.id);
        printf("\nEmployee no. %d Name is : %s", i, ptr->N_Emp.name);
        printf("\nEmployee no. %d Salary is : %d\n", i, ptr->N_Emp.salary);

        i++;

        ptr = ptr->pNext;
    }
};

int InsertNode(struct Employee F_Emp, int loc)
{
    int i, retval=0;
    struct Node *ptr,*pCur;
    ptr = CreateNode(F_Emp);

    if (ptr) //node created
    {
        if(!pHead) //no list
        {
            pHead=pTail=ptr;
        }
        else
        {
            if(loc==0) //list beginning
            {
                ptr->pNext = pHead;
                pHead->pPrev = ptr;
                pHead = ptr;
            }
            else //middle or last
            {
                pCur=pHead;
                for(i=0; i<loc-1 && pCur; i++)
                {
                    pCur = pCur->pNext;
                }
                if(pCur==pTail || pCur==NULL) //last
                {
                    ptr->pPrev = pTail;
                    pTail->pNext = ptr;
                    pTail = ptr;
                }
                else  //middle
                {
                    ptr->pNext=pCur->pNext;
                    (pCur->pNext)->pPrev=ptr;
                    pCur->pNext=ptr;
                    ptr->pPrev=pCur;
                }
            }
        }
        retval=1;
    }
    return retval;
};

int DeleteNode(int loc)
{
    int i, retval=0;
    struct Node *pTemp;
    pTemp=pHead;

    if(!pHead) //no list
    {
        retval=0;
    }
    else
    {
        if(loc==0) //list beginning
        {
            pHead=pHead->pNext;
            pHead->pPrev = NULL;
            free(pTemp);
            retval=1;
        }
        else //middle or last
        {
            for(i=0; i<loc; i++)
            {
                if(pTemp!=NULL) // in range
                {
                    pTemp = pTemp->pNext;
                }
            }

            if(pTemp==NULL) // out of range
            {
                retval=0;
            }
            else
            {
                if(pTemp==pTail) // last point.
                {
                    pTail=pTail->pPrev;
                    pTail->pNext=NULL;

                    free(pTemp);
                    retval=1;
                }
                else  // middle point.
                {
                    (pTemp->pPrev)->pNext = pTemp->pNext;
                    (pTemp->pNext)->pPrev = pTemp->pPrev;
                    free(pTemp);
                    retval=1;
                }
            }
        }
    }
    return retval;
}

void FreeList(void)
{
    struct Node* pTemp;
    while(pHead)
    {
        pTemp=pHead;
        pHead = pHead->pNext;
        free(pTemp);
    }
    pTail=NULL;
}


