import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";

export default function VideoCall_Screen({ navigation, route }) {
  const [userData, setUserData] = useState([]);
  const { id, firstName, lastName, avatar } = route.params;

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
      {Array.isArray(userData) && userData.length > 0 && (
        <ImageBackground
          source={{ uri: avatar }}
          style={styles.background}
        >
          <SafeAreaView style={styles.button}>
            <TouchableOpacity style={styles.buttonChat}
              onPress={() => navigation.navigate( "UserChat", {
                id: id,
                firstName: firstName,
                lastName: lastName,
                avatar: avatar,
                
              })}
            >
              <SafeAreaView
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(255,255,255,0.35)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 18, height: 18, resizeMode: "contain" }}
                  source={require("/assets/icons/chat.svg")}
                />
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChat}>
              <SafeAreaView
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(255,255,255,0.35)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 18, height: 18, resizeMode: "contain" }}
                  source={require("/assets/icons/Camera.svg")}
                />
              </SafeAreaView>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView style={styles.userStatus}>
            <Image
              style={styles.imgUser}
              source={{ uri: avatar }}
            />
            <Text style={styles.textName}>
              {firstName + " " + lastName}
            </Text>

            <Text style={styles.statusCall}>Contacting...</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.effect}>
            <TouchableOpacity style={styles.buttonEffect}>
                <Image style={{width: 20, height:20}} source={require("/assets/icons/Effect.svg")}></Image>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView style={styles.buttonCallOption}>

            <TouchableOpacity style={styles.buttonChat}>
              <SafeAreaView
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(255,255,255,0.35)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 18, height: 18, resizeMode: "contain" }}
                  source={require("/assets/icons/mic.svg")}
                />
              </SafeAreaView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonChat}
              onPress={() => navigation.navigate("UserChat", 
              {
                id: id,
                firstName: firstName,
                lastName: lastName,
                avatar: avatar}
                )}
            >
              <SafeAreaView
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(254,41,77,1)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 18, height: 18, resizeMode: "contain" }}
                  source={require("/assets/icons/phone.svg")}
                />
              </SafeAreaView>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",  
},

  background: {
    flex: 1,
  },

  layerBlur: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonChat: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

    

  userStatus: {
    alignItems: "center",
    justifyContent: "center",
  },

  imgUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  textName: {
    fontFamily: "SF Pro Display",
    color: "#fff",
    fontSize: 24,
    fontWeight: 700,
    TextAlign: "center",
    marginTop: 10,
  },

  statusCall: {
    fontFamily: "SF Pro Text",
    color: "rgba(255,255,255,0.6)",
    fontSize: 17,
    fontWeight: 400,
    TextAlign: "center",
    marginTop: 10,
  },

  buttonCallOption: {
    flexDirection: "row",
    justifyContent: "center",
  },

  effect:{
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "41vh",
  },
  
});
