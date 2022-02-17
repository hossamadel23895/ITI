import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;


public class MultipleLines extends Applet{
    volatile int lineCount;
    int x1; int y1; int x2; int y2;
    ArrayList<Integer> x1Arr;
    ArrayList<Integer> y1Arr;
    ArrayList<Integer> x2Arr;
    ArrayList<Integer> y2Arr;
    
    PointClickAndReleaseListener cL;
    PointDragListener mL;

    public void init(){
        x1Arr = new ArrayList<Integer>();
        y1Arr = new ArrayList<Integer>();
        x2Arr = new ArrayList<Integer>();
        y2Arr = new ArrayList<Integer>();
        cL = new PointClickAndReleaseListener();
        mL = new PointDragListener();

        this.addMouseListener(cL);
        this.addMouseMotionListener(mL);
    }

    public void paint(Graphics g){  
        g.setFont(new Font(Font.SANS_SERIF,Font.BOLD,200));
        g.setColor(Color.BLUE);
        g.drawLine(x1,y1,x2,y2);
        x1Arr.add(0); y1Arr.add(0); x2Arr.add(0); y2Arr.add(0);
        for(int i=0; i<x1Arr.size(); i++){
            g.drawLine(x1Arr.get(i),y1Arr.get(i),x2Arr.get(i),y2Arr.get(i));
        }
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
            x1Arr.set(lineCount, x1);
            y1Arr.set(lineCount, y1);
            x2Arr.set(lineCount, x2);
            y2Arr.set(lineCount, y2);
            lineCount++;
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