#include<stdio.h>

int main() {

    int num;

    printf("Menu Example\n");
    printf("1-Add\n");
    printf("2-Edit\n");
    printf("3-Delete\n");
    printf("4-Exit\n");

    do {
    printf("Please enter your choice 1 - 4\n");
    scanf("%d", &num);

    switch(num){
        case (1):
            printf("Add\n");
            break;
        case (2):
            printf("Edit\n");
            break;
        case (3):
            printf("Delete\n");
            break;
        }
    }
    while (num!=4);


   return(0);
}
