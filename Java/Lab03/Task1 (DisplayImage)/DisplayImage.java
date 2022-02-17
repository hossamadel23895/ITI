import java.applet.Applet;
import java.awt.Graphics;

public class DisplayImage extends Applet{
    public java.awt.Image myImage;
    public void init(){
        myImage = getImage(getDocumentBase(),"DisplayImage.jpg");
    }
    public void paint(Graphics g){
        g.drawImage(myImage, 0, 0, getWidth(), getHeight(), this);
    }
}