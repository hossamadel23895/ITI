import java.applet.Applet;
import java.awt.Graphics;

public class HelloApplet extends Applet{
	public void paint(Graphics g){
		String str= getParameter("param1"); 
		g.drawString(str, 50, 100);
	}
}