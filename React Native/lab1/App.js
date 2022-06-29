import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Car from "./components/Car";

export default function App() {
  const [cars, setCars] = useState([
    {
      name: "Chevrolet Corvette String Ray",
      model: "Chevrolet",
      description:
        "Here is the description of the first car, here we can have a longer text and it should be well aligned with the rest of the content",
      brand:
        "https://news.gm.com/dld/content/dam/Media/images/US/Logos/chevrolet/CorvetteCrossFlags/2014CCF.jpg",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg",
    },
    {
      name: "Mercedes-Benz GLE-Class",
      model: "Mercedes",
      description:
        "Here is the description of the second car, here we can have a longer text and it should be well aligned with the rest of the content",
      brand:
        "https://pbs.twimg.com/profile_images/507259669539065856/3wOxOl3b_400x400.jpeg",
      image:
        "https://www.mercedes-benz-mena.com/ar/passengercars/mercedes-benz-cars/models/gle/coupe-c167/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_58586423/image.MQ6.8.20191119092227.jpeg",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cars App</Text>
      {cars.map((car, index) => {
        return <Car car={car} key={index}/>;
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    width: "100%",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 10,
    backgroundColor: "#e75c3c",
    textAlign: "center",
    marginTop: 25,
    width: 300,
  },
});
