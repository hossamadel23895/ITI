#include <stdio.h>
#include <conio.h>

int ArrCopy(char Arr[10]);

int main() {
    char UserArr[10];
    printf("Please enter your text : ");

    scanf("%s",UserArr);

    ArrCopy(UserArr);

    UserArr[9] = '\0';

    printf("%s", UserArr);

    return(0);
}

int ArrCopy(char arr[10]){
    char NewArr[10];
    for(int i=0; i<10; i++) {
        NewArr[i]=arr[i];
        printf("%c", arr[i]);
    }
}
