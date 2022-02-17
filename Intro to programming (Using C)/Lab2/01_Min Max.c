#include<stdio.h>

int main() {

    int num1, num2, max, min;
        printf("Please enter a number : ");
        scanf("%d", &num1);

        max = num1;
        min = num1;

    for ( int i=0 ; i<4 ; i++) {

        printf("Please enter the next number : ");
        scanf("%d", &num2);

        if (max < num2) {
            max = num2;
        }
        else {
            if (min > num2) {
            min = num2;
            }
        };
    }

    printf("The maximum value is = %d , And the minimum value is = %d", max, min);

   return(0);
}
