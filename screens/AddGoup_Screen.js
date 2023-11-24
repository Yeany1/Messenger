import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";

export default function AddGoup_Screen({ navigation }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://6551dcb15c69a77903292d79.mockapi.io/User", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((data) => {
        setUserData(data);
        // Do something with the list of tasks
      })
      .catch((error) => {
        // handle error
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("/assets/icons/back.svg")}
          />
        </TouchableOpacity>
        <Text style={styles.text_title}>New message</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.search}>
        <Text style={styles.text_search}>To:</Text>
        <TextInput
          style={styles.input_search}
          placeholder="Type a name or group"/>
      </SafeAreaView>

      

     {/* <SafeAreaView style={styles.user_item}> */}
      <ScrollView style={{height: '84.3vh',  width: "100%", marginLeft:"5%"}}>
       
      <TouchableOpacity style={styles.create_group} onPress={() => navigation}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require("/assets/icons/people.svg")}
        ></Image>
        <Text style={[styles.text_createGroup]}>Group chat</Text>
      </TouchableOpacity>

      <SafeAreaView
        style={{ width: "100%", marginTop: "5%" }}
      >
        <Text style={[styles.text_sugg, { color: "rgba(0,0,0,0.40)" }]}>
          Suggested
        </Text>
      </SafeAreaView>
        {Array.isArray(userData) &&
          userData.map((item, index) => {
            return (
              <TouchableOpacity style={styles.user_chat} key={index}
                onPress={() => navigation.navigate("UserChat", {
                  id: item.id,
                  firstName: item.firstName,
                  lastName: item.lastName,
                  avatar: item.avatar,
                })
                }
              >
                <Image
                  style={{ width: 40, height: 40, borderRadius: 50 }}
                  source={{ uri: item.avatar }}
                ></Image>
                <Text style={[styles.text_nameItem]}>{item.firstName + " " + item.lastName}</Text>
              </TouchableOpacity>
            );
          })}  
      </ScrollView>
      {/* </SafeAreaView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginLeft: "5%",

  },

  text_title: {
    fontFamily: "SF Pro Text",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
    width: "100vw",
    textAlign: "center",
  },

  search: {
    marginTop: "3%",
    flexDirection: "row",
    width: "100vw",
    height: "45px",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    alignItems: "center",
  },

  text_search: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    marginLeft: "3%",
    color: "rgba(0,0,0,0.40)",
  },

  input_search: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    width: "100%",
    height: "45px",
    borderRadius: 10,
    color: "rgba(0,0,0,0.40)",
    paddingLeft: "5%",
    outlineStyle: "none",
  },

  create_group: {
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
  },

  user_item: {
    marginTop: "3%",
    width: "100%",
    marginLeft: "7%",
  },

  user_chat: {
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
  },

  text_nameItem: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    flexShrink: 1,
    marginLeft: "15px",
  },

  text_sugg: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    },

  text_createGroup: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    marginLeft: "15px",
  },
});
