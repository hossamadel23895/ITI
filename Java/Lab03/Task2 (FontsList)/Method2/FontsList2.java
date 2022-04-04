import java.applet.*;
import java.awt.*;

public class FontsList2 extends Applet
{
  public void paint(Graphics g)
  {
    String s[] = GraphicsEnvironment.getLocalGraphicsEnvironment().getAvailableFontFamilyNames();
    int j = 0;
    for(int i=0; i<s.length; i++){
        Font f = new Font(s[i], 10, 14);
        g.setFont(f);
        g.drawString(s[i],20,(20+j));
        j += 17;
    }
  }
}