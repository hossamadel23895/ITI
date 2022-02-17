#include <stdio.h>
#include <windows.h>
#include <stdlib.h>

void gotoxy(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;        SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

struct Student
{
    int id;
    char name[20];
    int grade[3];
};

struct Student FillStudent(void);
void PrintStudent(struct Student s);

int main()
{
    int size, choice;
    int j = 0; //student count
    int flag=1;
    printf("Please enter the number of students : ");
    scanf("%d", &size);
    system("cls");

    struct Student *pStudent;

    pStudent = (struct Student*)malloc(size * sizeof(struct Student));
    if(pStudent != NULL)
    {
        while(flag)
        {
            printf("Students Table App");
            printf("\n1- Add Student");
            printf("\n2- Display Student");
            printf("\n3- Display All");
            printf("\n4- Exit");
            printf("\nPlease choose an option number to continue : ");

            scanf("%d", &choice);

            if(choice == 1)
            {
                pStudent[j] = FillStudent();
                 j++;
                int temp;
                printf("Student added! Press any key to continue");
                temp=getch();
                system("cls");
            }
            else
            {
                if(choice == 2)
                {
                    int num;
                    printf("\nPlease enter student number: ");
                    scanf("%d", &num);
                    if(num<=j)
                    {
                        PrintStudent(pStudent[num-1]);
                    }
                    else
                    {
                        printf("StudeZnt doesn't exist, Please enter a valid number\n");
                    }
                    int temp;
                    printf("Press any key to continue");
                    temp=getch();
                    system("cls");
                }
                else
                {
                    if(choice == 3)
                    {
                        for(int i=0;i<j;i++)
                        {
                            printf("\nStudent %d\n", i+1);
                            PrintStudent(pStudent[i]);
                        }
                        int temp;
                        printf("Press any key to continue");
                        temp=getch();
                        system("cls");
                    }
                    else
                    {
                        if(choice == 4)
                        {
                            flag = 0;
                        }
                        else
                        {
                            int temp;
                            printf("Press enter a valid number");
                            temp=getch();
                            system("cls");
                        }
                    }
                }
            }
        }
    }
    return 0;
}

struct Student FillStudent(void)
{
    int i;
    struct Student e;
    printf("Please enter student ID : ");
    scanf("%d", &e.id);
    printf("Please enter student Name : ");
    scanf("%s", e.name);
    printf("Please enter student 3 Grades : ");
    for(i=0; i<3; i++)
    {
        scanf("%d",&e.grade[i]);
    }
    return e;
}

void PrintStudent(struct Student s){
    int i;
    printf("id = %d \n",s.id);
    printf("name = %s \n",s.name);
    for(i=0;i<3;i++){
        printf("%d th grade = %d \n",i+1,s.grade[i]);
    }
}
