#include<stdio.h>

int main() {
   int a, b, sum;

   printf("\nEnter two numbers: ");
   scanf("%i", &a);
   scanf("%i", &b);

   sum = a + b;

   printf("Sum = %d", sum);

   return(0);
}
