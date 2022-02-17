import java.net.*;
import java.io.*;

public class SimpleServer{
    ServerSocket myServerSocket;
    Socket s;
    BufferedReader dis;     //Recevied data
    PrintStream ps;         //Sent data

    public static void main(String[] args){
        new SimpleServer();
    }

    public SimpleServer(){
        try{
            myServerSocket = new ServerSocket(5005);
            System.out.println("Server is listening on port 5005");

            s = myServerSocket.accept();
            System.out.println("Server has accepted a client!");

            dis = new BufferedReader(new InputStreamReader(s.getInputStream ()));
            ps = new PrintStream(s.getOutputStream());
            String msg = dis.readLine();
            System.out.println(msg);
            ps.println("Server has recieved your message");
        }
        catch(IOException ex){
            ex.printStackTrace();
        }finally{
            try{
                if (ps != null){ps.close();}
                if (dis != null){dis.close();}
                if (s != null){s.close();}
                if (s != null){myServerSocket.close();}
            }
            catch(Exception ex){
                ex.printStackTrace();
            }
        }
    }
}