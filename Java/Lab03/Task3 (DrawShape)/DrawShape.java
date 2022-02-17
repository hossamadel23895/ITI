import java.applet.*;
import java.awt.*;

public class DrawShape extends Applet
{
    public void paint(Graphics g)
    {
      g.drawOval(200, 100, 200, 50);
      g.drawLine(200, 125, 150, 300);
      g.drawLine(400, 125, 450, 300);
      g.drawArc(150, 250, 300, 100, 0, -180);
      g.drawOval(260, 180, 80, 120);
      g.drawOval(190, 190, 40, 80);
      g.drawOval(370, 190, 40, 80);
      g.drawLine(285, 350, 265, 450);
      g.drawLine(315, 350, 335, 450);
      g.drawRect(200, 450, 200, 25);

      Color myColor = new Color(255, 255, 150);
      g.setColor(myColor);

      g.fillOval(201, 101, 199, 49);
      g.fillOval(261, 181, 79, 119);
      g.fillOval(191, 191, 39, 79);
      g.fillOval(371, 191, 39, 79);
    }
}