#include <stdio.h>

int main() {
    int arr[5];
    printf("Please enter 5 numbers : ");
    for (int i=0 ; i<5 ; i++) {
        scanf("%d", &arr[i]);
    }
    int max=arr[0], min=arr[0];

    for (int i=1; i<5 ; i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
        else {
            if (arr[i]<min) {
                min = arr[i];
            }
        }
    }
    printf("The maximum value = %d\n", max);
    printf("The minimum value = %d", min);

    return(0);
}
