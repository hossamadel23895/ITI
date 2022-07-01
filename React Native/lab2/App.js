import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import IonIcons from '@expo/vector-icons/Ionicons';

import Home from "./screens/Home";
import CarDetails from "./screens/CarDetails";
import Users from "./screens/Users";
import Contact from "./screens/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  const defaultStyling = {
    headerStyle: {
      backgroundColor: "#e75c3c",
    },
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  const HomeNavigator = () => {
    return (
      <View style={{ flex: 1 }} collapsable={false}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            style={styles.title}
            options={{ ...defaultStyling, ...{ title: "Cars" } }}
          />
          <Stack.Screen
            name="CarDetails"
            component={CarDetails}
            style={styles.CarDetails}
            options={{ ...defaultStyling, ...{ title: "Car Details" } }}
          />
        </Stack.Navigator>
      </View>
    );
  };

  const UsersNavigator = () => {
    return (
      <View style={{ flex: 1 }} collapsable={false}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Users"
            component={Users}
            style={styles.title}
            options={{ ...defaultStyling, ...{ title: "Users" } }}
          />
        </Stack.Navigator>
      </View>
    );
  };


  const ContactNavigator = () => {
    return (
      <View style={{ flex: 1 }} collapsable={false}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Contact"
            component={Contact}
            style={styles.title}
            options={{ ...defaultStyling, ...{ title: "Contact Us" } }}
          />
        </Stack.Navigator>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home" 
      activeColor="#fff"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: '#e75c3c' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => {
              return <IonIcons name='home' size={26} color='#fff' />
            },
          }}
        />
        <Tab.Screen
          name="Users"
          component={UsersNavigator}
          options={{
            tabBarLabel: "Users",
            tabBarIcon: () => {
              return <IonIcons name='people-outline' size={26} color='#fff' />
            },
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactNavigator}
          options={{
            tabBarLabel: "Contact Us",
            tabBarIcon: () => {
              return <IonIcons name='mail-outline' size={26} color='#fff' />
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 10,
    backgroundColor: "#e75c3c",
    textAlign: "center",
    marginTop: 25,
  },
});
