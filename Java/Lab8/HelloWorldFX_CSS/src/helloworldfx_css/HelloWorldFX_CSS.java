package HelloWorldFX_CSS;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Text;
import javafx.stage.Stage;


public class HelloWorldFX_CSS extends Application {
    
    @Override
    public void start(Stage primaryStage){
        StackPane root = new StackPane();
        Scene myScene = new Scene(root, 300, 300);
        myScene.getStylesheets().add(getClass().getResource("Styles.css").toString());

        //Gradient effect
        Rectangle gradientRect = new Rectangle(0, 0, 300, 300);
        gradientRect.getStyleClass().add("rectangle");
        root.getChildren().add(gradientRect);
        
        //The text
        Text myText = new Text("Hello JAVAFX");
        myText.getStyleClass().add("text");
        root.getChildren().add(myText);

        //The text reflection effect
        Text myReflectedText = new Text("Hello JAVAFX");
        myReflectedText.getStyleClass().add("reflectedText");
        root.getChildren().add(myReflectedText);


        primaryStage.setScene(myScene);
        primaryStage.show();

    }


    public static void main(String[] args) {
        launch(args);
    }
}