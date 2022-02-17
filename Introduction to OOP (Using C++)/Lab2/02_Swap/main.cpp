#include <iostream>
#include <string.h>

using namespace std;


void swapeint(int& F_N1, int& F_N2);

int main()
{
    int n1, n2;
    cout<<"Please enter First Number : ";
    cin>>n1;

    cout<<"Please enter Second number : ";
    cin>> n2;

    swapeint(n1,n2);

    cout<<n1<<endl;
    cout<<n2;

    return 0;
}

void swapeint(int& F_N1,int& F_N2)
{
    int T_N=F_N1;
    F_N1=F_N2;
    F_N2=T_N;
}
