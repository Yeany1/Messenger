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

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.containerHeader}>
        <Text style={styles.search}>Danh bạ</Text>
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

  containerHeader: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    height: 60,
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

});