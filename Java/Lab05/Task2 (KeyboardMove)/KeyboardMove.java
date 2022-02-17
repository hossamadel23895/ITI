import java.applet.*;
import java.awt.*;
import java.awt.event.*;


public class KeyboardMove extends Applet{
    int x;
    int y;
    String st;
    int stWidth;
    int stHeight;
    ArrowsListener aL;

    public void init(){
        x = getWidth()/2;
        y = getHeight()/2;
        st = "JAVA";
        aL = new ArrowsListener();

        this.addKeyListener(aL);
    }

    public void paint(Graphics g){
        g.setFont(new Font(Font.SERIF, Font.BOLD, 30));
        g.drawString(st, x, y);
        stWidth  = g.getFontMetrics().stringWidth(st);
        stHeight = g.getFontMetrics().getHeight();
    }

    class ArrowsListener extends KeyAdapter{
        public void keyPressed(KeyEvent e){
            switch(e.getKeyCode()){
                case KeyEvent.VK_UP:
                    y = (y-stHeight-20)<=0 ? stHeight-18 : y-20;
                    break;
                case KeyEvent.VK_DOWN:
                    y = y>=getHeight() ? getHeight() : y+20;
                    break;
                case KeyEvent.VK_LEFT:
                    x = x<=20 ? 0 : x-20;
                    break;
                case KeyEvent.VK_RIGHT:
                    x = x<=(getWidth()-stWidth-20) ? x+20 : (getWidth()-stWidth);
                    break;
            }
        repaint();
        }
    }
}