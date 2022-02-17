import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class BallDrag extends Applet{
    int x; int y; int ballWidth; int ballHeight;
    BallClickAndReleaseListener cL;
    BallDragListener mL;

    public void init(){
        x = (getWidth()/2)-(ballWidth/2);
        y = (getHeight()/2)-(ballHeight/2);
        ballWidth = 100;
        ballHeight = 100;
        cL = new BallClickAndReleaseListener();
        mL = new BallDragListener();

        this.addMouseListener(cL);
        this.addMouseMotionListener(mL);
    }

    public void paint(Graphics g){  
        g.setColor(Color.RED);
        g.fillOval(x, y, ballWidth, ballHeight);
        g.setColor(Color.BLACK);
        g.drawOval(x, y, ballWidth, ballHeight);
    }

    class BallClickAndReleaseListener extends MouseAdapter{
        public void mousePressed(MouseEvent e){
            x = e.getX() - (ballWidth/2);
            y = e.getY() - (ballHeight/2);
            repaint();
        }
    }

    class BallDragListener extends MouseAdapter{
        public void mouseDragged(MouseEvent e){
            x = e.getX() - (ballWidth/2);
            y = e.getY() - (ballHeight/2);
            repaint();
        }
    }
}