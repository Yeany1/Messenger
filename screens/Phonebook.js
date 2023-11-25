import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView, ImageBackground, Switch,} from "react-native";
import React from "react";
import { Pressable } from "react-native";
import Modal from "react-native-modal";
export default function Phonebook({ navigation }) {
  const [data, setData] = useState([]);

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
        setData(data);
        // Do something with the list of tasks
      })
      .catch((error) => {
        // handle error
      });
  }, []);

  //Tìm kiếm
  const [keyword, setKeyword] = useState('');

  const filteredData = data.filter(item => {
    const name = `${item.firstName} ${item.lastName}`.toLowerCase();
    const keywordRegEx = new RegExp(keyword.toLowerCase());
    return keywordRegEx.test(name);
  });

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
    <SafeAreaView style={styles.container}>
       <SafeAreaView style={styles.containerHeader}>
        <SafeAreaView style={styles.group1}>
          <TouchableOpacity onPress={toggleModal}>
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




          <Text style={styles.headerTitle}>Danh bạ</Text>
        </SafeAreaView>
        <TouchableOpacity
          style={styles.newchat_icon}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("/assets/icons/phone-book.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView style={styles.containerSearch}>
        <TouchableOpacity
          style={styles.searchBar}
        >
          <Image
            style={{ width: 16, height: 16 }}
            source={require("/assets/icons/search-icon.svg")}
          ></Image>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8E8E93"
            value={keyword}
            onChangeText={setKeyword}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={{ height: "84.3vh", width: "100%" }}>
        <Text style={styles.textSuggested}>Gợi ý</Text>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatUser}
              onPress={() =>
                navigation.navigate("UserChat", {
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
              />

              <Text style={[styles.textNameUser]}>
                {item.firstName + " " + item.lastName}
              </Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },


  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 13,
    backgroundColor: "#fff",
    marginBottom: 25,
  },

  group1: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    fontFamily: "SF Pro Display",
    fontWeight: 700,
    fontstyle: "normal",
    fontSize: 30,
    marginLeft: 10,
  },

  newchat_icon: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  search: {
    height: 50,
    outlineStyle: "none",
    marginHorizontal: 25,
    fontFamily: "SF Pro Display",
    fontSize: 23,
    fontWeight: 700,
    color: "#000",
    top: 10,
    marginLeft: 140,

  },

  back: {
    marginLeft: 25,
  },

  textSuggested: {
    fontFamily: "SF Pro Display",
    fontSize: 15,
    fontWeight: 520,
    color: "#8E8E93",
    marginHorizontal: 25,
    marginTop: 30,
  },

  chatUser: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 15,
  },

  textNameUser: {
    fontFamily: "SF Pro Text",
    fontSize: 17,
    fontWeight: 600,
    color: "#000",
    marginLeft: 20,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,

  },

  searchInput: {
    flex: 1,
    fontFamily: "SF Pro Text",
    fontSize: 17,
    marginLeft: 10,
    color: "#000",

    outlineStyle: "none",
  },
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