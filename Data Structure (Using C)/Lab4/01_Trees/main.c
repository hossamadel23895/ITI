#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int N_Num;
    struct Node* pLeft;
    struct Node* pRight;
};

struct Node* CreateNode(int F_Num);

struct Node* InsertNode(struct Node* F_pNode, int F_Num);

void Inorder(struct Node* F_pNode);

struct Node* pRoot;


int main()
{
    int choice, flag=1;

    do
    {
        printf("Data Tree App\n");
        printf("1-Create a tree\n");
        printf("2-InOrder sort\n");
        printf("3-PreOrder sort\n");
        printf("4-PostOrder sort\n");
        printf("5-Exit\n");
        printf("Please enter your choice number : ");

        scanf("%d", &choice);

        switch(choice)
        {
        case (1):
            {
                int U_Num;
                printf("Enter a new value to add to the tree : ");
                scanf("%d", &U_Num);
                pRoot = InsertNode(pRoot, U_Num);

                printf("\nNumber was added!");

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }


        case (2):
            {
                Inorder(pRoot);

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }


        case (3):
            {
                Preorder(pRoot);

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }


        case (4):
            {
                Postorder(pRoot);

                printf("\nPress any key to do another operation");
                getch();
                system("cls");
                break;
            }


        case (5):
            flag = 0;
            break;
        }
        system("cls");

    }
    while (flag);

    return 0;
}






struct Node* CreateNode(int F_Num)
{
    struct Node* ptr;
    ptr = (struct Node*)malloc(sizeof(struct Node));
    if (ptr)
    {
        ptr -> N_Num = F_Num;
        ptr -> pLeft = NULL;
        ptr -> pRight = NULL;
    }
    return ptr;
};

struct Node* InsertNode(struct Node* F_pNode, int F_Num)
{
    if(!F_pNode)          // base case.
    {
        F_pNode = CreateNode(F_Num);
    }
    else
    {
        if(F_pNode->N_Num >= F_Num)
        {
            F_pNode->pLeft = InsertNode(F_pNode->pLeft, F_Num);
        }
        else
        {
            F_pNode->pRight = InsertNode(F_pNode->pRight, F_Num);
        }
        return F_pNode;
    }
};


void Preorder(struct Node* F_pNode)
{
	if (F_pNode != NULL) {
		printf("%d ", F_pNode->N_Num);
		Preorder(F_pNode->pLeft);
		Preorder(F_pNode->pRight);
	}
}


void Inorder(struct Node* F_pNode)
{
	if (F_pNode != NULL) {
		Inorder(F_pNode->pLeft);
		printf("%d ", F_pNode->N_Num);
		Inorder(F_pNode->pRight);
	}
}


void Postorder(struct Node* F_pNode)
{
	if (F_pNode != NULL) {
		Postorder(F_pNode->pLeft);
		Postorder(F_pNode->pRight);
		printf("%d ", F_pNode->N_Num);
	}
}
