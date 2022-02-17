import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class SampleUI extends JFrame {
    public SampleUI(){
        this.setLayout(new FlowLayout());
        JTextArea ta = new JTextArea(20,50);
        JScrollPane scroll = new JScrollPane(ta);
        JTextField tf = new JTextField(40);
        JButton okButton = new JButton("Send");
        okButton.addActionListener(new ActionListener(){
        public void actionPerformed(ActionEvent ae){
            ta.append(tf.getText()+"\n");
            tf.setText("");
            }
        });
    add(scroll);
    add(tf);
    add(okButton);
    }
    public static void main(String args[])
    {
        SampleUI ui=new SampleUI();
        ui.setSize(600, 400);
        ui.setResizable(false);
        ui.setVisible(true);
    }
}