#include <iostream>

using namespace std;

int x=5;

int main()
{
    int x=10;
    cout << "X value = " << ::x << endl;
    return 0;
}
