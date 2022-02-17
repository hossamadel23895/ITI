import java.io.*;

public class ReadFile{
    public static void main (String[] args) throws IOException {
        try {
            FileInputStream fis = new FileInputStream("TestRead.txt"); //create an inputstream object of the file (Create the object as bytes)
            byte[] bytesArr = new byte[fis.available()];

            fis.read(bytesArr);
            System.out.println(new String(bytesArr));
            fis.close();
        }
        catch(FileNotFoundException e) {
            System.out.println("File was not found!");
        }
    }
}