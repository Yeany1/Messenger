import { StyleSheet, Text, View } from "react-native"; 
import React from "react";  
import Chats from "./Chats";
import List_Call from "./List_Call";
import Phonebook from "./Phonebook";
import Menu from "./Menu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "zmp-ui";
import TimKiem from "./Menu/TimKiem";
const Tab = createBottomTabNavigator();
const Containers = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Chats") {
            iconName =  "zi-chat-solid" ;
          } else if (route.name === "List_Call") {
            iconName =  "zi-video-solid";
          } else if (route.name === "Phonebook") {
            iconName =  "zi-members-solid" ;
          } else if (route.name === "Menu") {
            iconName = "zi-user-solid" ;
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
