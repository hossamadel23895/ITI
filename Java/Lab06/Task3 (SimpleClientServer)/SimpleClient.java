import java.net.*;
import java.io.*;
import java.util.Vector;

public class SimpleClient{
    Socket mySocket;
    BufferedReader dis ;
    PrintStream ps;
    public static void main(String[] args) throws Exception{
        new SimpleClient();
    }
    public SimpleClient(){
        try{
            mySocket = new Socket(InetAddress.getLocalHost(), 5005);
            dis = new BufferedReader(new InputStreamReader(mySocket.getInputStream ()));
            ps = new PrintStream(mySocket.getOutputStream ());
            ps.println("Client message!");
            String replyMsg = dis.readLine();
            System.out.println(replyMsg);
        }
        catch(Exception ex){
            ex.printStackTrace();
        }finally{
            try{
                ps.close();
                dis.close();
                mySocket.close();
            }
            catch(Exception ex){
                ex.printStackTrace();
            }
        }
    }
}