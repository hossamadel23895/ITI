package texteditor;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Optional;
import javafx.event.ActionEvent;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;
import javafx.scene.control.MenuItem;
import javafx.scene.control.TextArea;
import javafx.scene.input.KeyCombination;
import javafx.scene.layout.BorderPane;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

public class FXMLDocumentBase extends BorderPane {

    protected final MenuBar menuBar;
    
    protected final Menu fileMenu;
        protected final MenuItem newMenuItem;
        protected final MenuItem openMenuItem;
        protected final MenuItem saveAsMenuItem;
        protected final MenuItem exitMenuItem;
    
    protected final Menu editMenu;
        protected final MenuItem undoMenuItem;
        protected final MenuItem cutMenuItem;
        protected final MenuItem copyMenuItem;
        protected final MenuItem pasteMenuItem;
        protected final MenuItem deleteMenuItem;
        protected final MenuItem selectAllMenuItem;
    
    protected final Menu helpMenu;
        protected final MenuItem aboutMenuITem;
        
    protected final TextArea textArea;

    public FXMLDocumentBase(Stage stage) {

        setPrefHeight(400.0);
        setPrefWidth(600.0);
        
        setMaxHeight(USE_PREF_SIZE);
        setMaxWidth(USE_PREF_SIZE);
        setMinHeight(USE_PREF_SIZE);
        setMinWidth(USE_PREF_SIZE);
        
        menuBar = new MenuBar();
        
        fileMenu = new Menu();
            newMenuItem = new MenuItem();
            openMenuItem = new MenuItem();
            saveAsMenuItem = new MenuItem();
            exitMenuItem = new MenuItem();
        
        editMenu = new Menu();
            undoMenuItem = new MenuItem();
            cutMenuItem = new MenuItem();
            copyMenuItem = new MenuItem();
            pasteMenuItem = new MenuItem();
            deleteMenuItem = new MenuItem();
            selectAllMenuItem = new MenuItem();
        
        helpMenu = new Menu();
            aboutMenuITem = new MenuItem();
            textArea = new TextArea();


        BorderPane.setAlignment(menuBar, javafx.geometry.Pos.CENTER);

        fileMenu.setMnemonicParsing(false);
        fileMenu.setText("File");
        
        newMenuItem.setMnemonicParsing(false);
        newMenuItem.setText("New");
        newMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+N"));

        openMenuItem.setMnemonicParsing(false);
        openMenuItem.setText("Open...");
        openMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+O"));

        saveAsMenuItem.setMnemonicParsing(false);
        saveAsMenuItem.setText("Save As");
        saveAsMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+S"));

        exitMenuItem.setMnemonicParsing(false);
        exitMenuItem.setText("Exit");
        exitMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+E"));

        editMenu.setMnemonicParsing(false);
        editMenu.setText("Edit");

        undoMenuItem.setMnemonicParsing(false);
        undoMenuItem.setText("Undo");
        undoMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+Z"));

        cutMenuItem.setMnemonicParsing(false);
        cutMenuItem.setText("Cut");
        cutMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+X"));

        copyMenuItem.setMnemonicParsing(false);
        copyMenuItem.setText("Copy");
        copyMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+C"));

        pasteMenuItem.setMnemonicParsing(false);
        pasteMenuItem.setText("Paste");
        pasteMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+V"));

        deleteMenuItem.setMnemonicParsing(false);
        deleteMenuItem.setText("Delete");
        deleteMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+D"));

        selectAllMenuItem.setMnemonicParsing(false);
        selectAllMenuItem.setText("Select All");
        selectAllMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+A"));

        helpMenu.setMnemonicParsing(false);
        helpMenu.setText("Help");

        aboutMenuITem.setMnemonicParsing(false);
        aboutMenuITem.setText("About Notepad");
        setTop(menuBar);

        BorderPane.setAlignment(textArea, javafx.geometry.Pos.CENTER);
        textArea.setPrefHeight(350.0);
        textArea.setPrefWidth(600.0);
        setCenter(textArea);

        fileMenu.getItems().add(newMenuItem);
        fileMenu.getItems().add(openMenuItem);
        fileMenu.getItems().add(saveAsMenuItem);
        fileMenu.getItems().add(exitMenuItem);
        menuBar.getMenus().add(fileMenu);
        
        editMenu.getItems().add(undoMenuItem);
        editMenu.getItems().add(cutMenuItem);
        editMenu.getItems().add(copyMenuItem);
        editMenu.getItems().add(pasteMenuItem);
        editMenu.getItems().add(deleteMenuItem);
        editMenu.getItems().add(selectAllMenuItem);
        menuBar.getMenus().add(editMenu);
        
        helpMenu.getItems().add(aboutMenuITem);
        menuBar.getMenus().add(helpMenu);
        
        
        
        
        newMenuItem.setOnAction((ActionEvent ae) ->{
        if(!textArea.getText().isEmpty()){
            ButtonType saveCurrent = new ButtonType("Save Current");
            ButtonType newFile = new ButtonType("New file");
            ButtonType cancel = new ButtonType("cancel");
            Alert alert = new Alert(Alert.AlertType.WARNING,
                                    "You haven't saved your current text,\n" + "are you sure you want to create a new file without saving?"
                                    ,saveCurrent
                                    ,newFile
                                    ,cancel);
            alert.setTitle("Save Warning");
            alert.setHeaderText("Current file not saved!");
            alert.setResizable(false);

            Optional<ButtonType> result = alert.showAndWait();
            ButtonType button = result.orElse(ButtonType.CANCEL);

            if (button == saveCurrent) {
                FileChooser fc = new FileChooser();
                File f = fc.showSaveDialog(stage);
                    try{
                        FileWriter fw = new FileWriter(f);
                        fw.write(textArea.getText());
                        fw.close();
                    }catch(IOException ex){
                        ex.printStackTrace();  
                    }
                }else if(button == newFile) {
                    textArea.clear();
                }
            }
        });
        
        
        
        openMenuItem.setOnAction((ActionEvent ae) -> {
            FileChooser fc = new FileChooser();
            File f = fc.showOpenDialog(stage);
                try{
                    FileInputStream fis = new FileInputStream(f);
                    int size = fis.available();
                    byte[] b = new byte[size];
                    fis.read(b);
                    textArea.setText(new String(b));
                    fis.close();
                }
                catch(IOException ex){
                    ex.printStackTrace();
                }
        });

        
        
        saveAsMenuItem.setOnAction((ActionEvent ae) ->{
            FileChooser fc = new FileChooser();
            File f = fc.showSaveDialog(stage);
                try{
                    FileWriter fw = new FileWriter(f);
                    fw.write(textArea.getText());
                }catch(IOException ex){
                    ex.printStackTrace();  
                }
        });
        
        
        
        exitMenuItem.setOnAction((ActionEvent ae) ->{
            System.exit(1);
        });
        
        
        undoMenuItem.setOnAction((ActionEvent ae) ->{
            textArea.undo();
        });
        
        
        cutMenuItem.setOnAction((ActionEvent e) ->{
            textArea.cut();
        });
        
        
        copyMenuItem.setOnAction((ActionEvent e) ->{
            textArea.copy();
        });
        
        
        pasteMenuItem.setOnAction((ActionEvent e) ->{
            textArea.paste();
        });
        
        
        deleteMenuItem.setOnAction((ActionEvent e) ->{
            textArea.deleteText(textArea.getSelection());
        });
        
        
        selectAllMenuItem.setOnAction((ActionEvent e) ->{
            textArea.selectAll();
        });
        
        
        aboutMenuITem.setOnAction((ActionEvent e) ->{
            Alert alert = new Alert(AlertType.INFORMATION);
            alert.setTitle("About Notepad");
            alert.setHeaderText("Welcome to JavaFx Notepad help");
            alert.setContentText("This is JavaFx Notepad help context");
            alert.showAndWait();
        });
        
    }
}