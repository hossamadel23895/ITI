import java.applet.*;
import java.awt.*;
import java.util.Date;
import java.lang.*;

public class TimeApplet extends Applet implements Runnable {

    Thread th;
    Date d;

    public void init(){
        th = new Thread(this);
        th.start();
        d = new Date();
    }

    public void paint(Graphics g){
        g.setFont(new Font(Font.SERIF, 1, 40));
        g.drawString(d.toString(),100,200);
    }

    public void run(){
        while(true){
            d = new Date();
            repaint();
            try{
                Thread.sleep(1000);
            }catch(Exception e){
                e.printStackTrace();
            }
        }
    }
}