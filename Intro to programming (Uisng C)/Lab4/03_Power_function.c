#include <stdio.h>

int PowerFunc(int num, int power);

int main() {
    int num;
    int power;
    printf("Please enter the Number followed by Power needed : ");
    scanf("%d", &num);
    scanf("%d", &power);

    while(power<0){
        printf("The power value has to be positive\n");
        printf("Please enter the Number followed by Power needed : ");
        scanf("%d", &num);
        scanf("%d", &power);
    }

    int val;
    val = PowerFunc(num, power);
    printf("%d to the power of %d = %d", num, power, val);
    return(0);
}

int PowerFunc(int num, int power){
    int result = 0;
    if(power==0){
        result = 1;
    }
    else{
        result = num*PowerFunc(num, power-1);
    }
    return result;
}
