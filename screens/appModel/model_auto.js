import Modal from 'react-native-modal';

import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput,SafeAreaView,ImageBackground, Switch} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import React from 'react'
import { Pressable } from 'react-native';
const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [userData, setUserData] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const handlePress0 = () => {
    const navigation = useNavigation();
    setIsPressed(true);
  };
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
    <View style={{ backgroundColor: 'green'}}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Modal</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} style={{ justifyContent: 'center', margin: 10, height: '50vh', width: '95%', top: '60%', }} animationIn={'slideInUp'} animationOut={'slideOutDown'}>
        <View style={styles.mmcontainer}>

        {Array.isArray(userData) && userData.length > 0 && (
          <SafeAreaView>
            <TouchableOpacity style={styles.mobtn}>
              <Text style={styles.mtext}>Liên hệ với {userData[0].firstName + " " + userData[0].lastName}</Text>
              <View style={styles.thinLine} />
            </TouchableOpacity>
          </SafeAreaView>
        )}

        <SafeAreaView style={styles.mbtncontainer}>
            <TouchableOpacity style={styles.mbtn}><Text style={styles.mbtntxt}>Gọi thoại</Text></TouchableOpacity>
            <View style={styles.thinLine} />
            <TouchableOpacity style={styles.mbtn}><Text style={styles.mbtntxt}>Gọi video</Text></TouchableOpacity>
            <View style={styles.thinLine} />
            <TouchableOpacity style={styles.mbtn2} onPress={toggleModal}><Text style={styles.mbtntxt1}>Hủy</Text></TouchableOpacity>
        </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mmcontainer: { 
    flex: 1, 
    backgroundColor: 'white', 
    borderRadius: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  thinLine: {
    borderWidth: 0.1,        // Độ dày của đường viền
    borderColor: '#A4A4A4',  // Màu sắc của đường viền
    borderStyle: 'dotted',  // Kiểu đường viền (solid, dashed, dotted)
  },

  mtext: {
    position: 'relative', top: 50,
    width: "100%",
    alignItems: "left",
    justifyContent: "left",
    left: 20,
    marginTop: 20,
    fontSize: 15,
    fontWeight: "600",
    color: "#A6A6A6",
  },
  mbtntxt: {
    color: "#1395fc",
    fontWeight: 600,
  },
  mbtntxt1: {
    color: "red",
    fontWeight: 600,
  },
  mbtn: {
    position: 'relative', 
    top: -30,
    width: "100%",
    alignItems: "left",
    justifyContent: "left",
    marginLeft: 140,
    marginTop: 40,
  },
  mbtn2: {
    position: 'relative', 
    top: -30,
    width: "100%",
    alignItems: "left",
    justifyContent: "left",
    marginLeft: 160,
    marginTop: 40,
  },
  mbtncontainer: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
  },
  mobtn: {
    position: 'relative', 
    top: -75,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginTop: 20,
  },
});

export default App;