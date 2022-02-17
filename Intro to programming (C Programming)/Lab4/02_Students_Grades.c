#include <stdio.h>

int main() {
    int arr[3][4];
    int sum=0;
    int avg=0;
    for(int row=0; row<3; row++) {
        printf("Please enter the 4 grades of student %d : ", row+1);
        for(int col=0; col<4; col++) {
            scanf("%d", &arr[row][col]);
        }
    }

    for(int row=0; row<3; row++) {
        for(int col=0; col<4; col++) {
            sum = sum + arr[row][col];
        }
        printf("The total grade of Student %d = %d\n", row+1, sum);
        sum = 0;
    }

    for(int col=0; col<4; col++) {
        for(int row=0; row<3; row++) {
            sum = sum + arr[row][col];
        }
        avg = sum / 3;
        printf("The average of subject %d = %d\n", col+1, avg);
        sum = 0;
        avg = 0;
    }

    return(0);
}
