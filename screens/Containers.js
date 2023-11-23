import { StyleSheet, Text, View } from "react-native"; 
import React from "react";  
import TinNhan from "./Chats";
import DanhBa from "./List_Call";
import KhamPha from "./Phonebook";
import NhatKy from "./Menu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "zmp-ui";
const Tab = createBottomTabNavigator();
const Containers = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Chats") {
            iconName = focused ? "zi-chat-solid" : "zi-chat";
          } else if (route.name === "List_Call") {
            iconName = focused ? "zi-call-solid" : "zi-call";
          } else if (route.name === "Phonebook") {
            iconName = focused ? "zi-more-grid-solid" : "zi-more-grid";
          } 
        //   else if (route.name === "Me") {
        //     iconName = focused ? "zi-clock-1-solid" : "zi-clock-1";}
            else if (route.name === "Menu") {
            iconName = focused ? "zi-user-solid" : "zi-user";
          }

          return (
            <Icon
              icon={iconName}
              style={{ color: focused ? "#006AF5" : "#000" }}
            />
          );
        },
        tabBarActiveTintColor: "#006AF5",
        tabBarInactiveTintColor: "#000",

        // i want change icon color
      })}
    >
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="List_Call"
        component={List_Call}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Phonebook"
        component={Phonebook}
        options={{ headerShown: false }}
      />
      
      {/* <Tab.Screen
        name="Nhật ký"
        component={NhatKy}
        options={{ headerShown: false }}
      /> */}
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Containers;

const styles = StyleSheet.create({});
