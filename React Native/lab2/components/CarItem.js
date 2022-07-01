import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Alert,
} from "react-native";

const CarItem = (props) => {
  
  const {car, navigation} = props;

  const confirmDelete = () =>
    Alert.alert(
      "Deleting A Car",
      "Are you sure you want to delete this car?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => props.removeCar(props.key) }
      ]
    )

  const carDetailsTouchHandler = () => {
    props.navigation.navigate('CarDetails', {car:car});
  };

  return (
    <View style={styles.carWrapper}>
      <View style={styles.car}>
        <TouchableNativeFeedback onPress={confirmDelete}>
          <View style={styles.closeButtonWrapper}>
            <Text style={styles.closeButtonText}>X</Text>
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
        <Text style={styles.carModel}>{car.model}</Text>
        <Text style={styles.carTitle}>{car.name}</Text>
        <Text style={styles.carDescription} numberOfLines={2}>{car.description}</Text>
        <TouchableNativeFeedback onPress={carDetailsTouchHandler}>
          <View style={styles.detailsButtonWrapper}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </View>
        </TouchableNativeFeedback>
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
    top: 25,
    start: 0,
    zIndex: 1,
    borderRadius: 8,
  },
  carImage: {
    height: 200,
    borderRadius: 8,
    resizeMode: "stretch",
  },
  carModel: {
    backgroundColor: "#e75c3c",
    fontSize: 17,
    textAlign: "center",
    color: "white",
    position: "absolute",
    start: 5,
    minWidth: 90,
    zIndex:3,
    borderRadius:5,
  },
  carTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#e75c3c",
  },
  closeButtonWrapper: {
    position: "absolute",
    start: 268,
    minWidth: 30,
    zIndex:3,
  },
  closeButtonText: {
    backgroundColor: "red",
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  detailsButtonWrapper: {
    alignItems: "center",
    justifyContent:"center",
    width:300,
  },
  detailsButtonText: {
    backgroundColor: "#e75c3c",
    textAlign: "center",
    fontSize: 25,
    borderRadius: 8,
    color: "white",
    minWidth:110,
  },
});

export default CarItem;
