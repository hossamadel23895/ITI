#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    //1-Outputting from memory to a txt file.

        //Creating stream object.
        ofstream m_obj1;

        //Opening the object with the desired method.
        m_obj1.open("m_file1.txt", ios::out);

        //Processing data.
        int m_output1;
        m_output1 = 10;
        m_obj1 << m_output1 << endl;

        //Closing the file.
        m_obj1.close();


    //2-Inputting from a txt file to the memory.

        //Creating stream object.
        ifstream m_obj2;

        //Opening the object with the desired method.
        m_obj2.open("m_file2.txt", ios::in);

        //Processing data.
        int m_input1_1, m_input1_2;
        m_obj2 >> m_input1_1;
        m_obj2 >> m_input1_2;
        cout << "The 1st value in the txt file is : " << m_input1_1 << endl;
        cout << "The 2nd value in the txt file is : " << m_input1_2 << endl;

        //Closing the file.
        m_obj2.close();



    //3-Outputting from memory to a binary file.

        //Creating stream object.
        ofstream m_obj3;

        //Opening the object with the desired method.
        m_obj3.open("m_file3.bin", ios::binary|ios::out);

        //Processing data.
        int m_output2;
        m_output2 = 30;
        m_obj3.write((char*)&m_output2, sizeof(int));
        m_obj3 << m_output2 << endl;

        //Closing the file.
        m_obj3.close();


    //4-Inputting from a bin file to the memory. (value in the file is 40)

        //Creating stream object.
        ifstream m_obj4;

        //Opening the object with the desired method.
        m_obj4.open("m_file4.bin", ios::binary|ios::in);

        //Processing data.
        int m_input2;
        m_obj4.read((char*)&m_input2, sizeof(int));
        cout << "The value inside the bin file is : " << m_input2 << endl;

        //Closing the file.
        m_obj4.close();

    return 0;
}
