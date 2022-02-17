#include<iostream>
#include<math.h>
#include<conio.h>

using namespace std;

class point
{
    private:
        int x;
        int y;

    public:
        point(){x=y=0;}
        point(int m){x=y=m;}
        point(int m, int n){x=m; y=n;}

        void setX(int a){x=a;}
        void setY(int b){y=b;}
        int getX(){return x;}
        int getY(){return y;}
};


//Rectangle (Using Composition)

class Rectangle
{
    private:
        point pt1,pt2;
        int length, width;

    public:
        Rectangle(int x1,int y1, int x2,int y2):pt1(x1,y1),pt2(x2,y2)
        {
            length = abs(x2-x1);
            width = abs(y2-y1);
        }

        int R_Area()
        {
            return (length*width);
        }
};


//Circle (Using Assosiation)

class Circle
{
    private:
        point *pt1, *pt2;
        int r;

    public:
        Circle()
        {
            pt1 = pt2 = NULL;
            r = 0;
        }

        Circle(point *pa, point *pb)
        {
            pt1 = pa;
            pt2 = pb;
            r = sqrt(pow(pt1->getX()-pt2->getX(),2) + pow(pt1->getY()-pt2->getY(),2));
        }

        int C_Area()
        {
            return 3.14*r*r;
        }
};


int main()
{
    //Rectangle creation
    int x1,y1,x2,y2;
    cout << "please enter Rectangle 1st x coordinate : ";
    cin >> x1;
    cout << "please enter Rectangle 1st y coordinate : ";
    cin >> y1;
    cout << "please enter Rectangle 2nd x coordinate : ";
    cin >> x2;
    cout << "please enter Rectangle 2nd y coordinate : ";
    cin >> y2;

    Rectangle M_Rec(x1,y1,x2,y2);
    int M_R_Area = M_Rec.R_Area();
    cout << "Area of the Rectangle is " << M_R_Area << endl;



    //Circle creation

    int x3,y3,x4,y4;
    cout << "please enter Circle 1st x coordinate : ";
    cin >> x3;
    cout << "please enter Circle 1st y coordinate : ";
    cin >> y3;
    cout << "please enter Circle 2nd x coordinate : ";
    cin >> x4;
    cout << "please enter Circle 2nd y coordinate : ";
    cin >> y4;

    point p3(x3,y3), p4(x4,y4);
    Circle M_Cir(&p3,&p4);
    int M_C_Area = M_Cir.C_Area();
    cout << "Area of the Circle is " << M_C_Area << endl;


    cout << "Press any key to continue";
    getch();
    return 0;
}
