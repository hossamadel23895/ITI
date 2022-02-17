#include <stdio.h>
#include <conio.h>
#include <string.h>

int ArrConc(char Fname[10],char Lname[10], char Fullname[25]);

int main() {
    char UserFname[10];
    char UserLname[10];
    char UserFullName[25];
    printf("Please enter your first name : ");

    scanf("%s",UserFname);

    printf("Please enter your last name : ");

    scanf("%s",UserLname);

    ArrConc(UserFname, UserLname, UserFullName);

    return(0);
}

int ArrConc(char arr1[10], char arr2[10], char Fullname[25]){
    Fullname = strcat(arr1," ");
    Fullname = strcat(Fullname, arr2);
    printf("Your full name is %s", Fullname);
}
