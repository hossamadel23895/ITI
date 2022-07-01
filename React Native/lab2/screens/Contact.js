import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from "react-native";

import contactImage from "../assets/contact.png";

export default function Contact({ navigation, route }) {
  const [name, onChangeName] = React.useState(null);
  const [phone, onChangePhone] = React.useState(null);
  const [message, onChangeMessage] = React.useState(null);

  const handleMessage = () => {
    if (name && phone && message) {
      onChangeName(null);
      onChangePhone(null);
      onChangeMessage(null);      
      Alert.alert(`Thanks, ${name}`, "Your message has been sent");
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Please Fill All The Fields");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <View style={styles.contactWrapper}>
                  <Image style={styles.contactImage} source={contactImage} />
                </View>
                <TextInput
                  style={styles.input}
                  maxLength={20}
                  onChangeText={onChangeName}
                  value={name}
                  placeholder="Please Enter Your Name"
                />
                <TextInput
                  style={styles.input}
                  maxLength={20}
                  onChangeText={onChangePhone}
                  value={phone}
                  placeholder="Please Enter Your Phone Number"
                  keyboardType="numeric"
                />
                <TextInput
                  style={{ ...styles.input, ...{ height: 60 } }}
                  onChangeText={onChangeMessage}
                  value={message}
                  placeholder="Please Enter Your Message"
                  multiline={true}
                />
                <TouchableWithoutFeedback onPress={handleMessage}>
                  <View style={styles.sendButtonWrapper}>
                    <Text style={styles.sendButtonText}>Send</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  contactWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  contactImage: {
    width: 290,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  sendButtonWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    backgroundColor: "#e75c3c",
    textAlign: "center",
    fontSize: 25,
    borderRadius: 8,
    color: "white",
    minWidth: 110,
  },
});
