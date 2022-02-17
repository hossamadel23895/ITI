import java.applet.*;
import java.awt.*;
import java.awt.event.*;


public class CountApplet extends Applet{
    int counter;
    Button iB;
    Button dB;
    IncreaseListener iL;
    DecreaseListener dL;

    public void init(){
        int counter = 0;

        iB = new Button("Increment");
        add(iB);
        dB = new Button("Decrement");
        add(dB);

        iL = new IncreaseListener();
        iB.addActionListener(iL);
        dL = new DecreaseListener();
        dB.addActionListener(dL);
    }

    public void paint(Graphics g){
        g.drawString("Number now is : " + counter, 150, 250);
    }

    class IncreaseListener implements ActionListener{
        public void actionPerformed(ActionEvent ev){
            counter++;
            repaint();
        }
    }

    class DecreaseListener implements ActionListener{
        public void actionPerformed(ActionEvent ev){
            counter--;
            repaint();
        }
    }
}
