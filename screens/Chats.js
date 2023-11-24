import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import UserChat from "./UserChat";
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
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
// import { useNavigation } from "@react-navigation/native";

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

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.containerHeader}>
        <SafeAreaView style={styles.group1}>
          <TouchableOpacity style={styles.menu_icon}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("/assets/icons/Menu.svg")}
            />
          </TouchableOpacity>
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
});
