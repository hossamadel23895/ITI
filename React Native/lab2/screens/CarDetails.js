import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
} from "react-native";

import IonIcons from "@expo/vector-icons/Ionicons";

export default function CarDetails({ navigation, route }) {
  const { car } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          onPress={() => {
            setIsFavorite((isFavorite) => !isFavorite);
          }}
        >
          <View style={{...styles.favourite, ...{backgroundColor: isFavorite ? "red" : "#ccc"}}}>
            <IonIcons name="heart" size={26} color="#fff" />
          </View>
        </Pressable>
        <Image source={{ uri: car.image }} style={styles.image} />
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.description}>{car.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  favourite: {
    margin: 10,
    backgroundColor: "#ccc",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 200,
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e75c3c",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});
