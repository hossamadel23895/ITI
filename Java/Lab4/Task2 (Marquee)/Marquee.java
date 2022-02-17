import java.applet.*;
import java.awt.*;

public class Marquee extends Applet implements Runnable
{
    Thread th;
    int x;
    int y;
    String st;
    int stWidth;

    public void init(){
        x = 0;
        y = 100;
        st = "JAVA World";

        th = new Thread(this);
        th.start();
    }

    public void paint(Graphics g){
        g.setFont(new Font(Font.SERIF, Font.BOLD, 30));
        g.drawString(st, x, y);
        stWidth = g.getFontMetrics().stringWidth(st);
    }

    public void run(){
        while(true){
            try{
                Thread.sleep(500);
            }catch(Exception e){
                e.printStackTrace();
            }
			
            x += 50;			
            x = x <= getWidth() ? x : -stWidth;
            repaint();
        }
    }
}