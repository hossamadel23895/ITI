#include<stdio.h>

int main() {

    int x, sum = 0;

    while (sum<=100) {
    printf("Please enter a number : ");
    scanf("%d", &x);
    sum = sum + x;
    printf("Sum is %d\n", sum);
    }

    printf("Sum is equal or greater than 100");

   return(0);
}
