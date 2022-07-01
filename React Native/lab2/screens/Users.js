import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

import IonIcons from '@expo/vector-icons/Ionicons';

export default function Users({ navigation, route }) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map((user, index) => {
          return (
            <View style={styles.userWrapper} key={index}>
              <Text style={styles.name}>{user.name}</Text>
                <View style={styles.singleRow}>
                  <IonIcons name={"mail"} color="#e75c3c" size={20} style={{marginEnd:5}}/>
                  <Text style={styles.singleInfo}> {user.email} </Text>
                </View>
                <View style={styles.singleRow}>
                  <IonIcons name={"call"} color="#e75c3c" size={20} style={{marginEnd:5}}/>
                  <Text style={styles.singleInfo}> {user.phone} </Text>
                </View>
                <View style={styles.singleRow}>
                  <IonIcons name={"globe-outline"} color="#e75c3c" size={20} style={{marginEnd:5}}/>
                  <Text style={styles.singleInfo}> {user.website} </Text>
                </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  userWrapper: {
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
  },
  singleRow:{
    flexDirection: "row",
    alignItems: "center",
  }
});
