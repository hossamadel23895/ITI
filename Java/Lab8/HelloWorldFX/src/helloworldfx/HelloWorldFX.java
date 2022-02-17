package helloworldfx;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.effect.Reflection;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.paint.CycleMethod;
import javafx.scene.paint.LinearGradient;
import javafx.scene.paint.Stop;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.stage.Stage;


public class HelloWorldFX extends Application {
    
    @Override
    public void start(Stage primaryStage){
        StackPane root = new StackPane();
        Scene myScene = new Scene(root, 300, 300);

        //Gradient effect
        Stop[] myStops = new Stop[]{new Stop(0, Color.BLACK),
                                    new Stop(0.5, Color.WHITE),
                                    new Stop(1, Color.BLACK)};
        LinearGradient linearGradient = new LinearGradient(0, 0, 0, 1, true, CycleMethod.NO_CYCLE, myStops);
        Rectangle gradientRect = new Rectangle(0, 0, 300, 300);
        gradientRect.setFill(linearGradient);
        root.getChildren().add(gradientRect);
        
        //The text
        Text myText = new Text("Hello JAVAFX");
        myText.setFont( Font.font("Sans-serif", FontWeight.BOLD, 25) );
        myText.setFill(Color.RED);
        root.getChildren().add(myText);

        //The text reflection effect
	    Reflection myReflection = new Reflection();
        myReflection.setFraction(1);
        myText.setEffect(myReflection);

        primaryStage.setScene(myScene);
        primaryStage.show();
        
    }


    public static void main(String[] args) {
        launch(args);
    }
}
 