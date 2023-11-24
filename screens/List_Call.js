import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";

import {
  pangestureHandler,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";

export default function Chats({ navigation }) {
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatUser}
      onPress={() =>
        navigation.navigate("Profile_Screen", {
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          avatar: item.avatar,
        })
      }
      onLongPress={() => setSelectedItem(item)}
    >
      <Image style={styles.imgUser} source={{ uri: item.avatar }} />
      <SafeAreaView style={styles.userStatus}>
        <Text style={styles.textName}>
          {item.firstName + " " + item.lastName}
        </Text>
        <Text style={styles.statusCall}>Outgoing {randomTime} PM</Text>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.buttonCallOption}
        onPress={() =>
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
        <View style={styles.group1}>
          <TouchableOpacity style={styles.menu_icon}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("/assets/icons/Menu.svg")}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Calls</Text>
        </View>

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
});
