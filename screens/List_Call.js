import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import React from 'react'
import {
  pangestureHandler,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import UserChat from "./UserChat";
import Modal from 'react-native-modal';

// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from 'react-native';

import { StatusBar } from "expo-status-bar";


export default function Chats({ navigation }) {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
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

  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://6551dcb15c69a77903292d79.mockapi.io/User", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getRandomTime = () => {
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };

  const randomTime = getRandomTime();

  const handleDeleteItem = () => {
    const newData = data.filter((item) => item.id !== selectedItem.id);
    setData(newData);
    setSelectedItem(null); // Đóng modal sau khi xóa
  };
  const closeModalAndGoToNextPage = () => {
    setModalVisible1(false); // Đóng Modal
    // navigation.navigate("VideoCall_Screen");
    // history.push('/screens/VideoCall_Screen.js'); // Chuyển qua trang khác
    window.location.href = '/screens/VideoCall_Screen.js';
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatUser}
      // onPress={() =>
      //   navigation.navigate("Profile_Screen", {
      //     id: item.id,
      //     firstName: item.firstName,
      //     lastName: item.lastName,
      //     avatar: item.avatar,
      //   })
      // }
      // onLongPress={() => setSelectedItem(item)}
    >
      <TouchableOpacity style={styles.chatUser} onPress={toggleModal1}>
        <Image style={styles.imgUser} source={{ uri: item.avatar }} />
        <SafeAreaView style={styles.userStatus}>
          <Text style={styles.textName}>
            {item.firstName + " " + item.lastName}
          </Text>
          <Text style={styles.statusCall}>Outgoing {randomTime} PM</Text>
        </SafeAreaView>
        
        <Modal isVisible={isModalVisible1} style={{ justifyContent: 'center', margin: 10, height: '66%', width: '95%', top: '60%', }} animationIn={'slideInUp'} animationOut={'slideOutDown'}>
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
            <TouchableOpacity style={styles.mbtn } onPress={() => 
            navigation.navigate("VideoCall_Screen", {
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            avatar: item.avatar,
          })
        }>  
            <Text style={styles.mbtntxt} >Gọi thoại</Text>
            
        </TouchableOpacity>

            <View style={styles.thinLine} />

            <TouchableOpacity style={styles.mbtn} onPress={() =>
            navigation.navigate("VideoCall_Screen", {
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            avatar: item.avatar,
          })
        }>
          <Text style={styles.mbtntxt}>Gọi video</Text>
          </TouchableOpacity>

            <View style={styles.thinLine} />
            <TouchableOpacity style={styles.mbtn2} onPress={toggleModal1}><Text style={styles.mbtntxt1}>Hủy</Text></TouchableOpacity>
        </SafeAreaView>
        </View>
      </Modal>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCallOption} onPress={() =>
            navigation.navigate("UserChat", {
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            avatar: item.avatar,
          })
        }
      >
        <SafeAreaView
          style={{
            width: 34,
            height: 34,
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 15, height: 15, resizeMode: "contain" }}
            source={require("/assets/icons/Call.svg")}
          />
        </SafeAreaView>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.containerHeader}>
        <SafeAreaView style={styles.group1}>
        {/* <TouchableOpacity style={styles.menu_icon} onPress={toggleModal1}></TouchableOpacity> */}






          <TouchableOpacity style={styles.menu_icon} onPress={toggleModal}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("/assets/icons/Menu.svg")}
            />
          </TouchableOpacity>
          <Modal isVisible={isModalVisible} style={{ justifyContent: 'flex-end', margin: 0, height: '66%', width: '90%' }} 
          animationIn={'slideInLeft'} animationOut={'slideOutLeft'}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {Array.isArray(userData) && userData.length > 0 && (
          <SafeAreaView style={styles.muser}>
            <TouchableOpacity style={styles.mbuttonUser}>
              <Image style={{ width: 40, height: 40, borderRadius: "50%" }} source={{ uri: userData[0].avatar }}></Image>
              <Text style={styles.mtextName}>{userData[0].firstName + " " + userData[0].lastName}</Text>
              <Image style={{ width: 30, height: 30, marginTop: 8}} source={require('/assets/model.png')}></Image>
              {/* <TouchableOpacity > */}
                <Image style={{ width: 30, height: 30, marginTop: 8 , marginLeft: 40}} source={require('/assets/setting.png')}></Image>
            </TouchableOpacity>
          </SafeAreaView>
        )}
        <View style={styles.mbody}>
            <View style={styles.mbody1}>
              <Pressable style={styles.mbody1} onPress={toggleModal}>
                <Image style={styles.micon} source={require('/assets/maket3.png')}></Image>
                <Text style={styles.mtxt}>Đoạn chat</Text>
              </Pressable>
            </View>

            <View style={styles.mbody1}>
              <Pressable style={styles.mbody1}>
                <Image style={styles.micon} source={require('/assets/maket.png')}></Image>
                <Text style={styles.mtxt}>Maketplace</Text>
              </Pressable>
            </View>

            <View style={styles.mbody1}>
              <Pressable style={styles.mbody1}>
                <Image style={styles.micon} source={require('/assets/maket1.png')}></Image>
                <Text style={styles.mtxt}>Tin nhắn đang chờ</Text>
              </Pressable>
            </View>

            <View style={styles.mbody1}>
              <Pressable style={styles.mbody1}>
                <Image style={styles.micon} source={require('/assets/maket2.png')}></Image>
                <Text style={styles.mtxt}>Kho lưu trữ</Text>
              </Pressable>
            </View>
            <View style={styles.mbtntxt1}><Text style={styles.mtxt1}>Cộng đồng</Text></View>
        </View>


          <TouchableOpacity style={styles.mbtntxt2} onPress={toggleModal}>
            <Text style={styles.mtxt2}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </Modal>







          
          <Text style={styles.headerTitle}>Calls</Text>
        </SafeAreaView>

        <View style={styles.groupIconHeader}>
          <TouchableOpacity style={styles.callIcon}>
            <View style={styles.iconOval}>
              <Image
                style={{ width: 16, height: 16 }}
                source={require("/assets/icons/Call.svg")}
                tintColor={"#000"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.callIcon}>
            <View style={styles.iconOval}>
              <Image
                style={{ width: 20, height: 12 }}
                source={require("/assets/icons/VideoCall.svg")}
                tintColor={"#000"}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        style={{
          height: "84.3vh",
          width: "100%",
          marginLeft: 25,
          marginRight: 15,
          paddingTop: 20,
        }}
      >
        <Modal visible={selectedItem !== null} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Are you sure you want to delete this item?
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonCancel]}
                  onPress={() => setSelectedItem(null)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonDelete]}
                  onPress={handleDeleteItem}
                >
                  <Text style={styles.modalButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Text style={styles.textRecent}>Recent</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  containerHeader: {
    height: 80,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },

  group1: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
  },

  menu_icon: {
    marginRight: 20,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },

  iconOval: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  callIcon: {
    marginRight: 15,
  },

  groupIconHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  textRecent: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    color: "rgba(0,0,0,0.40)",
    paddingBottom: 10,
  },

  chatUser: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  imgUser: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  userStatus: {
    marginLeft: 15,
  },

  textName: {
    fontFamily: "SF Pro Text",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
    color: "#000",
  },

  statusCall: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    color: "rgba(0,0,0,0.40)",
  },

  buttonCallOption: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 45,
  },

  //Modal

  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 5,
  },
  modalButtonCancel: {
    backgroundColor: "#ccc",
  },
  modalButtonDelete: {
    backgroundColor: "#f00",
  },
  modalButtonText: {
    color: "#fff",
  },
  muser: {
    // alignItems: "center",
    marginTop: 50,
  },
  mbuttonUser: {
    width: '90%',
    height: 115,
    borderRadius: 50,
    backgroundColor: "#fff",
    position: "absolute",
    top: -40,
    left: 10,
    flexDirection: "row",
    
  },
  mtextName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginLeft: 10,
    width: "90%",
  },
  mbody: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  mbody1: {
    // flex: 1,
    marginLeft: 3,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    marginTop: 5,
  },
  mbtntxt1: {
    position: 'relative',
    width: "100%",
    left: 10,
    marginTop: 10,
  },
  mbtntxt2: {
    position: 'relative',
    width: "100%",
    left: 300,
    top : -25,
    // marginTop: 10,
  },
  mtxt2: {
    color: "#1395fc",
    fontWeight: 600,
    fontSize: 18,
},
  mtxt1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A6A6A6",
    width: "90%",
    textAlign: "left",
  },
  micon: {
    width: 60,
    height: 60,
  },
  mtxt: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    marginLeft: 15,
  },
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
