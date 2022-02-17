import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class RandomBallButtons extends Applet implements Runnable{

    Thread th; int xCord; int yCord; int xFlag; int yFlag;
    volatile boolean pauseFlag; 
    Button sB; Button pB;
    StartListener sL; PauseListener pL;

    public void init(){
        xCord = 0; yCord = 200; xFlag = 1; yFlag = 1;
        pauseFlag = false;
        sB = new Button("Start");
        add(sB);
        pB = new Button("Pause");
        add(pB);

        sL = new StartListener();
        sB.addActionListener(sL);
        pL = new PauseListener();
        pB.addActionListener(pL);

        th = new Thread(this);
        th.start();
    }

    public void paint(Graphics g){  
        g.setColor(Color.RED);
        g.fillOval(xCord, yCord, 100, 100);
        g.setColor(Color.BLACK);
        g.drawOval(xCord, yCord, 100, 100);
    }

    public void run(){
        while(true){
            if(pauseFlag == true){
                // Horizontal Cord control
                if (xFlag == 1) {xCord = xCord + 10;}
                else {xCord = xCord - 10;}

                // Vertical Cord control
                if (yFlag == 1) {yCord = yCord + 10;}
                else {yCord = yCord - 10;}


                // Horizontal flag control
                if (xCord+100 >= this.getWidth()) {xFlag = -1;}
                else if (xCord <= 0) {xFlag = 1;}
                
                // Vertical flag control
                if (yCord+100 >= this.getHeight()) {yFlag = -1;}
                else if (yCord <= 0){yFlag = 1;}

                repaint();

                try { Thread.sleep(35); }
                catch(Exception e){ e.printStackTrace();}
            }
        }
    }

    class StartListener implements ActionListener{
        public void actionPerformed(ActionEvent e)
        {
            pauseFlag = true;
        }
    }

    class PauseListener implements ActionListener{
        public void actionPerformed(ActionEvent e)
        {
            pauseFlag = false;
        }
    }
}