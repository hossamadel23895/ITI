import java.net.*;
import java.io.*;
import java.util.Vector;


public class ChatroomServer{
    ServerSocket ss;
    Socket s;
    public static void main(String[] args) throws IOException{
        try{
            new ChatroomServer();
        }
        catch(IOException ex){
            ex.printStackTrace();
        }
    }

    public ChatroomServer() throws IOException{
        try{
            ss = new ServerSocket(5005);
            System.out.println("Server is listening on port 5005");
            while(true){
                s = ss.accept();
                System.out.println("Server has accepted a new client");
                new ChatHandler(s);
            }
        }
        catch(IOException ex){
            ex.printStackTrace();
        }
    }
}





class ChatHandler extends Thread{
    BufferedReader dis;
    PrintStream ps;
    static Vector<ChatHandler> clientsVector = new Vector<ChatHandler>();

    public ChatHandler(Socket cs) throws IOException{
        try{
            dis = new BufferedReader(new InputStreamReader(cs.getInputStream ()));
            ps = new PrintStream(cs.getOutputStream());
            clientsVector.add(this);
            this.start();
        }
        catch(Exception ex){
            ex.printStackTrace();
        }
    }

    public void run(){
        while(true){
            try{
                String msg = dis.readLine();
                for(ChatHandler ch : clientsVector){
                    ch.ps.println(msg);
                }
            }
            catch(Exception ex){
                ex.printStackTrace();
            }
        }
    }
}