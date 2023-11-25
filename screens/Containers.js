import { StyleSheet, Text, View } from "react-native"; 
import React from "react";  
import Chats from "./Chats";
import List_Call from "./List_Call";
import Phonebook from "./Phonebook";
import Menu from "./Menu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "zmp-ui";
import TimKiem from "./Menu/TimKiem";
import YourStory from "./YourStory";
const Tab = createBottomTabNavigator();
const Containers = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Đoạn chat") {
            iconName =  "zi-chat-solid" ;
          } else if (route.name === "Cuộc gọi") {
            iconName =  "zi-video-solid";
          } else if (route.name === "Danh bạ") {
            iconName =  "zi-members-solid" ;
          } else if (route.name === "Tin") {
            iconName = "zi-more-grid-solid" ;
          } else if (route.name === "Cài đặt") {
            iconName = "zi-user-settings-solid" ;
          }
          return (
            <Icon
              icon={iconName} style={{ color: focused ? "#006AF5" : "#000" }}/>
          );
        },
        tabBarActiveTintColor: "#006AF5",
        tabBarInactiveTintColor: "#000",

        // i want change icon color
      })}
    >
      <Tab.Screen
        name="Đoạn chat"
        component={Chats}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cuộc gọi"
        component={List_Call}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Danh bạ"
        component={Phonebook}
        options={{ headerShown: false }}
      />
      
      <Tab.Screen
        name="Tin"
        component={YourStory}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={Menu}
        options={{ headerShown: false }}
      />
      
    </Tab.Navigator>
  );
};

export default Containers;

const styles = StyleSheet.create({});
