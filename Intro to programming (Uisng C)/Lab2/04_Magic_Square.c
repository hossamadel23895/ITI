#include <stdio.h>
#include <windows.h>

void gotoxy(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;        SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

int main() {

int size;
printf("Please enter an odd number : ");
scanf("%d", &size);

int col=(size+1)/2, row=1;

gotoxy(col,row);
printf("1");


for (int i=2 ; i<=size*size ; i++) {
    if ((i-1)%size) {
        col = --col;
        row = --row;
        if (col<1) {
            col=size;
        }
        if (row<1) {
            row=size;
        }
    }
    else {
        row = ++row;
        if (row>size){
            row=1;
        }
    }
gotoxy(col,row);
printf("%d", i);
}

return(0);
}
