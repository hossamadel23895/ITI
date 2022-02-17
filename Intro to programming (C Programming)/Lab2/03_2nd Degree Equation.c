#include<stdio.h>

int main() {

    float a, b, c, root, sol1, sol2;
    printf("Please enter 1st Coefficient, 2nd Coefficient and the constant : ");
    scanf("%f", &a);
    scanf("%f", &b);
    scanf("%f", &c);

    root = b*b-4*a*c;

    if (root<0) {
    printf("The solution is an imaginary number");
    }
    else {
        if (root==0){
        sol1 = (-b) / 2*a;
        printf("The equation has one solution = %.2f", sol1);

        }
        else {
            sol1 = (-b + sqrt(b*b-4*a*c)) / (2*a) ;
            sol2 = (-b - sqrt(b*b-4*a*c)) / (2*a) ;
            printf("The equation has two solutions = %.2f , %.2f", sol1, sol2);
        }
    }

   return(0);
}
