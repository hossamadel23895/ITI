import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class SingleLine extends Applet{
    int x1; int y1; int x2; int y2;
    PointClickAndReleaseListener cL;
    PointDragListener mL;

    public void init(){
        x1 = 0; y1 = 0; x2 = 0; y2 = 0;
        cL = new PointClickAndReleaseListener();
        mL = new PointDragListener();

        this.addMouseListener(cL);
        this.addMouseMotionListener(mL);
    }

    public void paint(Graphics g){
        g.setFont(new Font(Font.SANS_SERIF,Font.BOLD,200));
        g.setColor(Color.BLUE);
        g.drawLine(x1,y1,x2,y2);
    }

    class PointClickAndReleaseListener extends MouseAdapter{
        public void mousePressed(MouseEvent e){
            x1 = e.getX();
            y1 = e.getY();
            x2 = e.getX();
            y2 = e.getY();
            repaint();
        }

        public void mouseReleased(MouseEvent e){
            x2 = e.getX();
            y2 = e.getY();
            repaint();
        }
    }

    class PointDragListener extends MouseAdapter{
        public void mouseDragged(MouseEvent e){
            x2 = e.getX();
            y2 = e.getY();
            repaint();
        }
    }
}