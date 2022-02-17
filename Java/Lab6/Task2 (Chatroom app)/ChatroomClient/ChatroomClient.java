import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.net.*;
import java.io.*;
import java.util.Vector;

public class ChatroomClient extends JFrame implements Runnable{
    JTextArea ta;
    JScrollPane scroll;
    JTextField tf;
    static ChatroomClient ui;

    Socket mySocket;
    BufferedReader dis;
    PrintStream ps;

    public static void main(String args[]) throws IOException{
        try{
            ui = new ChatroomClient();
            ui.setSize(600, 400);
            ui.setResizable(false);
            ui.setVisible(true);
        }catch(Exception ex){
            ex.printStackTrace();
        }
    }

    public ChatroomClient() throws IOException{
        this.setLayout(new FlowLayout());
        ta = new JTextArea(20,50);
        scroll = new JScrollPane(ta);
        tf = new JTextField(40);

        JButton okButton = new JButton("Send");

        ClickListener cL = new ClickListener();
        okButton.addActionListener(cL);

        EnterListener eL = new EnterListener();
        tf.addKeyListener(eL);

        add(scroll);
        add(tf);
        add(okButton);

        do{
            try {
                mySocket = new Socket(InetAddress.getLocalHost(), 5005);
                break;
            }catch(ConnectException ce) {
                System.out.println("No server was found, retrying");
            }
        }while(true);

        try{
            System.out.println("Server was found!");
            dis = new BufferedReader(new InputStreamReader(this.mySocket.getInputStream()));
            ps = new PrintStream(mySocket.getOutputStream());
        }catch(IOException e){
            e.printStackTrace();
        }

        new Thread(this).start();
    }


    class EnterListener extends KeyAdapter{
        public void keyPressed(KeyEvent e) {
            if (e.getKeyCode() == KeyEvent.VK_ENTER){
                String msg = tf.getText();
                ps.println(msg);
                tf.setText("");
            }
        }
    }

    class ClickListener implements ActionListener{
        public void actionPerformed(ActionEvent ae){
            String msg = tf.getText();
            ps.println(msg);
            tf.setText("");
        }
    }

    public void run(){
        while(true){
            try{
                String msg = dis.readLine();
                ta.append(msg+"\n");
            }catch (SocketException se) {
                System.out.println("server was closed");
                System.exit(1);
          }catch (IOException e) {
            e.printStackTrace();
          }
        }
      }
    }
