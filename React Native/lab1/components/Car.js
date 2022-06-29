import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";

const Car = (props) => {
  let car = props.car;
  const touchPressHandle = () => {
    alert(`Are you sure you want to delete ${car.name} data?`);
  };
  return (
    <View style={styles.carWrapper}>
      <View style={styles.car}>
        <TouchableNativeFeedback
          onPress={touchPressHandle}
        >
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>X</Text>
          </View>
        </TouchableNativeFeedback>
        <Image
          style={styles.carBrand}
          source={{
            uri: car.brand,
          }}
        />
        <Image
          style={styles.carImage}
          source={{
            uri: car.image,
          }}
        />
        <Text style={styles.carTitle}>{car.name}</Text>
        <Text style={styles.carDescription}>{car.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    marginVertical: 30,
    borderColor: "#e75c3c",
    borderWidth: 2,
    borderRadius: 10,
  },
  carBrand: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 0,
    start: 0,
    zIndex: 1,
    borderRadius: 8,
  },
  carImage: {
    height: 200,
    borderRadius: 8,
    resizeMode: "stretch",
  },
  carTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#e75c3c",
  },
  carDescription: {},
  buttonWrapper: {
    position: "absolute",
    start: 275,
    top: 200,
    minWidth: 20,
    textAlign: "center",
  },
  buttonText: {
    backgroundColor: "green",
    fontSize: 20,
  },
});

export default Car;
