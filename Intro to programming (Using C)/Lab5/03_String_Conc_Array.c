#include <stdio.h>
#include <conio.h>
#include <string.h>

int ArrConc(char Fname[3][10],char Lname[3][10], char NamesArr[3][25]);

int main() {
    char UserFname[3][10];
    char UserLname[3][10];
    char UserNamesArr[3][25];

    int i;
    for(i=0; i<3; i++) {
        printf("Please enter person%d first name : ", i+1);

        scanf("%s",UserFname[i]);

        printf("Please enter person%d last  name : ", i+1);

        scanf("%s",UserLname[i]);
    }

    ArrConc(UserFname, UserLname, UserNamesArr);

    return(0);
}

int ArrConc(char Fname[3][10],char Lname[3][10], char NamesArr[3][25]){
    int i;
    for(i=0; i<3; i++) {
          strcpy(NamesArr[i], Fname[i]);
          strcat(NamesArr[i], " ");
          strcat(NamesArr[i], Lname[i]);
          printf("Person%d Full name = %s\n", i+1, NamesArr[i]);
    }
}
