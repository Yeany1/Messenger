import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import UserChat from "./UserChat";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import Modal from 'react-native-modal';

// import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput,SafeAreaView,ImageBackground, Switch} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { Pressable } from 'react-native';

function truncateText(text, limit) {
  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }

  return text;
}

export default function Chats({ navigation }) {

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
          <TouchableOpacity style={styles.menu_icon} onPress={toggleModal}>
            <Image style={{ width: 40, height: 40 }} source={require("/assets/icons/Menu.svg")}/>
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
                {/* <Modal isVisible={isModalVisible} style={{ justifyContent: 'flex-end', margin: 0, height: '66%', width: '90%' }} 
                  animationIn={'slideInLeft'} animationOut={'slideOutLeft'}>
                  </Modal> */}








              {/* </TouchableOpacity> */}
              
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

          
          <Text style={styles.headerTitle}>Chats</Text>
        </SafeAreaView>
        <TouchableOpacity style={styles.newchat_icon}
          onPress={() => navigation.navigate("AddGoup_Screen",{
            data: data,

          })}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("/assets/icons/New Message.svg")}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={{ height: "84.3vh", width: "100%" }}>
        <TouchableOpacity style={styles.searchBar}
          onPress={() => navigation.navigate("Search", {
            data: data,
          })}
        >
          <Image
            style={{ width: 16, height: 16 }}
            source={require("/assets/icons/search-icon.svg")}
          ></Image>
          <Text
            style={styles.searchInput}
            
          >Search</Text>
        </TouchableOpacity>

        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          style={{ flexDirection: "row" }}
        >
          <TouchableOpacity style={styles.yourStory}>
            <SafeAreaView style={styles.oval}>
              <Image
                style={{ width: 20, height: 20, borderRadius: 50 }}
                source={require("/assets/icons/cross.svg")}
              ></Image>
            </SafeAreaView>

            <Text style={[styles.textNameStory]}>Your Story</Text>
          </TouchableOpacity>

          <FlatList
            data={data}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SafeAreaView>
                <TouchableOpacity
                  style={styles.userChat}
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
                    style={{ width: 65, height: 65, borderRadius: 50 }}
                    source={{ uri: item.avatar }}
                  ></Image>
                  <Text style={[styles.textNameStory]}>{item.lastName}</Text>
                </TouchableOpacity>
              </SafeAreaView>
            )}
          />
        </ScrollView>
        <FlatList
          data={data}
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
              {item.avatar && (
                <Image
                  style={{ width: 65, height: 65, borderRadius: 50 }}
                  source={{ uri: item.avatar }}
                />
              )}
              <SafeAreaView style={styles.group2}>
                <Text style={[styles.textNameChatUser]}>
                  {item.firstName + " " + item.lastName}
                </Text>
                <SafeAreaView style={styles.groupChat}>
                  <Text style={styles.textMessage}>
                    {truncateText(item.messege, 30)}
                  </Text>
                  <Text style={styles.textDate}>{item.date}</Text>
                </SafeAreaView>
              </SafeAreaView>
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
    fontFamily: "SF Pro Text",
    fontWeight: 400,
    fontstyle: "normal",
    fontSize: 17,
    marginLeft: 10,
    width: 300,
    color: "#8E8E93",
  },

  userChat: {
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 10,
  },

  textNameStory: {
    fontFamily: "SF Pro Text",
    fontWeight: 400,
    fontstyle: "normal",
    fontSize: 13,
    textAlign: "center",
    color: "#50555C",
    marginTop: 10,
  },

  yourStory: {
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 10,
  },

  oval: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },

  chatUser: {
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  textNameChatUser: {
    fontFamily: "SF Pro Text",
    fontWeight: 300,
    fontstyle: "normal",
    fontSize: 17,
    marginLeft: 10,
  },

  textMessage: {
    fontFamily: "SF Pro Text",
    fontWeight: 300,
    fontstyle: "normal",
    fontSize: 15,
    marginLeft: 10,
    color: "#8E8E93",
  },

  textDate: {
    fontFamily: "SF Pro Text",
    fontWeight: 300,
    fontstyle: "normal",
    fontSize: 15,
    marginLeft: 10,
    color: "#8E8E93",
  },

  groupChat: {
    flexDirection: "row",
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
});
