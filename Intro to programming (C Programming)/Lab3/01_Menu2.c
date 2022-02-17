#include<stdio.h>
#include <windows.h>

void gotoxy(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;        SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

int sum(int x, int y);
int sub(int x, int y);
int multi(int x, int y);

int main() {

    int pos=0, flag=1;

    printf("Add\n");
    printf("Sub\n");
    printf("Multi\n");
    printf("Exit\n");

    gotoxy(0,pos);

    while(flag) {

            char ch, blank;
            ch = getch();

            if (ch==27) {
                flag=0;
                system("cls");
            }

            if (ch==13) {
                int a, b, c;

                if(pos==3){
                    flag=0;
                }
                else {
                    switch(pos){
                        case 0:
                            gotoxy(0,4);
                            printf("Please enter two numbers to add : ");
                            scanf("%d", &a);
                            scanf("%d", &b);
                            c = sum(a, b);
                            printf("Sum equals = %d", c);
                            break;

                        case 1:
                            gotoxy(0,4);
                            printf("Please enter two numbers to subtract : ");
                            scanf("%d", &a);
                            scanf("%d", &b);
                            c = sub(a, b);
                            printf("Subtraction equals = %d", c);
                            break;

                        case 2:
                            gotoxy(0,4);
                            printf("Please enter two numbers to Multiply : ");
                            scanf("%d", &a);
                            scanf("%d", &b);
                            c = multi(a, b);
                            printf("Multiplication equals = %d", c);
                            break;
                    }
                        printf("\nPress any key to do another operation");
                        getch();
                        system("cls");
                        printf("Add\nSub\nMulti\nExit\n");
                        gotoxy(0, pos);
                }
            }

            if (ch==-32) {
                ch=getch();
                if (ch==80) {
                    ++pos;
                    pos = pos >3 ? 0 : pos;
                    gotoxy(0,pos);
                }
                if (ch==72) {
                    --pos;
                    pos = pos<0 ? 3 : pos;
                    gotoxy(0,pos);
                }
                if (ch==71) {
                    pos=0;
                    gotoxy(0,pos);
                }
                if (ch==79) {
                    pos=3;
                    gotoxy(0,pos);
                }
            }
    }
   return(0);
}

int sum(int x, int y) {
    int z;
    z=x+y;
    return(z);
}
int sub(int x, int y) {
    int z;
    z=x-y;
    return(z);
}
int multi(int x, int y) {
    int z;
    z=x*y;
    return(z);
}
