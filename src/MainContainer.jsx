import * as React from "react";
import { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

//Pantallas
import HomeScreen from "./Screens/HomeSC";
import DetailScreen from "./Screens/DetailSC";
import ProfileScreen from "./Screens/ProfileSC";
import NotificationScreen from "./Screens/NotificationSC";
import AddServices from "./Screens/agregarservicios";
import Signin from "./Screens/Login/signin";
import SignUp from './Screens/Login/signup';
//Nombre de las pantallas
const homeName = "Inicio";
const detailsName = "Servicios";
const notificationName = "Notificaciones";
const profileName = "Perfil";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BTab() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          } else if (rn === notificationName) {
            iconName = focused ? "notifications" : "notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6F2C8C",
        tabBarInactiveTintColor: "#BFACC8",
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: [
          {
            padding: 10,
            height: 70,
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="homeName" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name={detailsName} component={DetailScreen}></Tab.Screen>
      <Tab.Screen
        name={notificationName}
        component={NotificationScreen}
      ></Tab.Screen>
      <Tab.Screen name={profileName} component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

export function MainContainer(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Tab' component={BTab} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="agregarservicios" component={AddServices}/>
                <Stack.Screen name='Tab2' component={BTab} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="login" component={Signin}/>
                <Stack.Screen name='Tab23' component={BTab} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="registrarse" component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
