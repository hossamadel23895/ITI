#include <stdio.h>
#include <windows.h>
#include <stdlib.h>

void gotoxy(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

int LineEdit(int size);

int main()
{
    int pos = 0, flag = 1, size;

    printf("Please enter the size of your line editor\n");
    scanf("%d", &size);
    system("cls");

    LineEdit(size);

    return (0);
}

int LineEdit(int size)
{
    char *User_Input;
    User_Input = (char *)malloc(sizeof(size));
    if (User_Input != NULL)
    {
        int i, CurrentPos = 0, flag = 1, LastPos = 0;
        char ch;

        for (i = 0; i < size; i++)
        {
            *(User_Input + i) = '\0';
        }
        while (flag)
        {
            ch = getch();
            if (ch > 19 && ch < 127)
            {
                *(User_Input + CurrentPos) = ch;
                printf("%c", ch);
                CurrentPos++;
                LastPos++;
            }
            if (ch == -32)
            {
                ch = getch();
                if (ch == 75)
                {
                    CurrentPos--;
                    gotoxy(CurrentPos, 0);
                }
                if (ch == 77)
                {
                    CurrentPos++;
                    CurrentPos = CurrentPos > LastPos ? LastPos : CurrentPos;
                    gotoxy(CurrentPos, 0);
                }
                if (ch == 71)
                {
                    CurrentPos = 0;
                    gotoxy(0, CurrentPos);
                }
                if (ch == 79)
                {
                    CurrentPos = LastPos;
                    gotoxy(CurrentPos, 0);
                }
            }
            if (ch == 13)
            {
                *(User_Input + LastPos) = '\0';
                printf("\n%s", (User_Input));
                free(User_Input);

                flag = 0;
            }
            if (ch == 27)
            {
                flag = 0;
                system("cls");
            }
        }
    }

    return (0);
}
