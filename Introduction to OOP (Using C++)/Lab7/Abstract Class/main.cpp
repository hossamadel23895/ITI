#include <iostream>
#include<conio.h>

//https://pastebin.com/U62SKLQf

using namespace std;

class Shape
{
    protected:
        int C_Dim1, C_Dim2;

    public:
        //Constructors
        Shape(){C_Dim1 = C_Dim2 = 0;}
        Shape(int F_Dim){C_Dim1 = C_Dim2 = F_Dim;}
        Shape(int F_Dim1,int F_Dim2){C_Dim1=F_Dim1; C_Dim2=F_Dim2;}

        //Setters & Getters
        void SetDim1(int F_Dim1){C_Dim1=F_Dim1;}
        void SetDim2(int F_Dim2){C_Dim2=F_Dim2;}
        int GetDim1(){return C_Dim1;}
        int GetDim2(){return C_Dim2;}

        virtual float Area()=0;
};


class Circle:public Shape
{
    public:
        Circle(){}
        Circle(int F_R):Shape(F_R){}
        float Area(){return (3.14*C_Dim1*C_Dim2);}
};


class Rectangle:public Shape
{
    public:
        Rectangle(){}
        Rectangle(int F_Length, int F_Width):Shape(F_Length, F_Width){}
        float Area(){return (1*C_Dim1*C_Dim2);}
};


class Triangle:public Shape
{
    public:
        Triangle(){}
        Triangle(int F_Base, int F_Height):Shape(F_Base, F_Height){}
        float Area(){return (0.5*C_Dim1*C_Dim2);}
};


class Square:public Rectangle
{
    public:
        Square(){}
        Square(int F_Length):Rectangle(F_Length, F_Length){}
};


class GeoShape
{
    private:
        Shape** C_PPShape;

    public:
        GeoShape(Shape** F_PPShape, int F_Size)
        {
            for (int i=0; i<F_Size; i++)
            {
                C_PPShape[i] = F_PPShape[i];
            }
        }

        float TotalArea(int F_Size)
        {
            float T_Sum=0.0f;

            for (int i=0; i<F_Size; i++)
            {
                T_Sum = T_Sum + C_PPShape[i]->Area();
            }

            return T_Sum;
        }
};

int main()
{
    int M_Count, M_Choice, M_Size;



    cout << "Please enter your objects number : ";
    cin >> M_Size;

    Shape** M_PPShape;
    M_PPShape = new Shape*[M_Size];

    system("cls");

    int i;
    for (i=0; i<M_Size; i++)
    {
        cout << "Areas calculator App" << endl;
        cout << "1-Add a Circle" << endl;
        cout << "2-Add a Triangle" << endl;
        cout << "3-Add a Rectangle" << endl;
        cout << "4-Add a Square" << endl;
        cout << "Please enter your choice number : ";

        cin >> M_Choice;

        switch(M_Choice)
        {
        case (1):
            {
                int T_Radius;

                M_PPShape[i]= new (Circle);

                cout << "Please enter Circle radius : ";
                cin >> T_Radius;

                Circle T_Circle(T_Radius);

                *M_PPShape[i] = T_Circle;

                M_Count++;

                cout << "A Circle was added!" <<endl;
                cout << "Press any key to continue";
                getch();
                break;
            }

        case (2):
            {

            }
        }

        system("cls");

    }

    GeoShape M_GeoShape(M_PPShape, M_Size);

    cout << "Total Areas Equal = " << M_GeoShape.TotalArea(M_Size) << endl;

    return 0;
}
