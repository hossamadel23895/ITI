import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import CarItem from "../components/CarItem";
import empty from "../assets/empty.png";

export default function Home({ navigation }) {
  const [cars, setCars] = useState([
    {
      name: "Chevrolet Corvette String Ray",
      model: "Chevrolet",
      description:
        "Here is the description of the first car, here we can have a longer text and it should be well aligned with the rest of the content",
      brand:
        "https://logoeps.com/wp-content/uploads/2012/10/corvette-logo-vector.png",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg",
    },
    {
      name: "Mercedes-Benz GLE-Class",
      model: "Mercedes",
      description:
        "Here is the description of the second car, here we can have a longer text and it should be well aligned with the rest of the content",
      brand:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/800px-Mercedes-Logo.svg.png",
      image:
        "https://www.mercedes-benz-mena.com/ar/passengercars/mercedes-benz-cars/models/gle/coupe-c167/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_58586423/image.MQ6.8.20191119092227.jpeg",
    },
    {
      name: "2022 Honda Civic",
      model: "Honda",
      description:
        "Here is the description of the Third car, here we can have a longer text and it should be well aligned with the rest of the content",
      brand:
        "https://brandstruck.co/wp-content/uploads/2016/07/Honda-Logo-Digital-Wallpapers.png",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2022-honda-civic-sedan-110-1623810388.jpg?crop=0.796xw:0.673xh;0.0817xw,0.219xh&resize=2048:*",
    },
    {
      name: "2022 Mazda 3",
      model: "Mazda",
      description:
        "Here is the description of the Forth car, here we can have a longer text and it should be well aligned with the rest of the content",
      brand:
        "https://brandlogos.net/wp-content/uploads/2021/12/mazda_motor-brandlogo.net_.png",
      image:
        "https://s3.eu-central-1.amazonaws.com/v3-news.motory.com/news/l-1653991766.9225-6295e956e1392.webp",
    },
  ]);

  const removeCar = (index) => {
    const tempCars = [...cars];
    tempCars.splice(index, 1);
    setCars(tempCars);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cars.length > 0 ? (
          cars.map((car, index) => {
            return (
              <CarItem
                car={car}
                key={index}
                navigation={navigation}
                removeCar={removeCar}
              />
            );
          })
        ) : (
          <View style={styles.emptyWrapper}>
            <Image style={styles.emptyImage} source={empty} />
            <Text style={styles.emptyText}>No Cars Yet</Text>
          </View>
        )}

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  emptyImage: {
    width: 290,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  emptyText: {
    fontSize: 20,
  },
});
