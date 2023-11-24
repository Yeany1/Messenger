import React, { useState, useRef } from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput,SafeAreaView,ImageBackground,ScrollView,FlatList,} from "react-native";

export default function UserChat({ navigation, route }) {
  const { id, firstName, lastName, avatar } = route.params;
  const _keyboardDidShow = () => {};
  //forcus textinput
  const inputRef = useRef(null);

  const initialMessages = [
    {
      sender: lastName,
      message: "Hello, how are you?",
      time: "10:00 AM",
    },
    {
      sender: lastName,
      message: "I'm good, thank you! How about you?",
      time: "10:05 AM",
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      sender: "You",
      message: message,
      time: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.containerHeader}>
        <SafeAreaView style={styles.group1}>
          <SafeAreaView style={styles.back}>
            <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("/assets/icons/back.png")}
                tintColor={"#0584FE"}
              />
            </TouchableOpacity>
          </SafeAreaView>

          <TouchableOpacity style={styles.headerUser}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 50 }}
              source={{ uri: avatar }}
            />
            <SafeAreaView>
              <Text style={styles.textName}>{lastName}</Text>
            </SafeAreaView>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={styles.headerButton}>
          <TouchableOpacity
            style={styles.iconHeader}
            onPress={() =>
              navigation.navigate("Call_Screen", {
                id: id,
                firstName: firstName,
                lastName: lastName,
                avatar: avatar,
              })
            }
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("/assets/icons/Call.svg")}
              tintColor={"#0584FE"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconHeader}
             onPress={() =>
              navigation.navigate("VideoCall_Screen", {
                id: id,
                firstName: firstName,
                lastName: lastName,
                avatar: avatar,
              })
            }
          >
            <Image
              style={{ width: 34, height: 20 }}
              source={require("/assets/icons/VideoCall.svg")}
              tintColor={"#0584FE"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconHeader}
           onPress={() =>
            navigation.navigate("Profile_Screen", {
              id: id,
              firstName: firstName,
              lastName: lastName,
              avatar: avatar,
            })
          }
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("/assets/icons/information.png")}
              tintColor={"#0584FE"}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>

      <ScrollView style={{ paddingHorizontal: 16, height: "84.3vh" }}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <SafeAreaView
              style={[
                styles.messageContainer,
                item.sender === "You"
                  ? styles.yourMessageContainer
                  : styles.otherMessageContainer,
                item.sender === "You" ? styles.yourMessageContainerRight : null,
              ]}
            >
              {item.sender !== "You" && (
                <Image
                  style={{ width: 40, height: 40, borderRadius: 50 }}
                  source={{ uri: avatar }}
                />
              )}
              <SafeAreaView
                style={[
                  styles.barMessage,
                  item.sender === "You"
                    ? styles.yourBarMessage
                    : styles.otherBarMessage,
                ]}
              >
                <Text
                  style={[
                    styles.message,
                    item.sender === "You"
                      ? styles.yourMessageText
                      : styles.otherMessageText,
                  ]}
                >
                  {item.message}
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          )}
        />
      </ScrollView>

      <SafeAreaView style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Type a message..."
          onChangeText={(text) => setMessage(text)}
          value={message}
          onSubmitEditing={() => sendMessage()}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage()}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("/assets/icons/send-message.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  containerHeader: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFED",
    marginHorizontal: 16,
    paddingBottom: 12,
  },
  group1: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    marginRight: 12,
  },
  headerUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  textName: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconHeader: {
    marginLeft: 12,
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 12,
  },
  yourMessageContainer: {
    flexDirection: "row-reverse",
  },
  yourMessageContainerRight: {
    marginRight: 0,
  },
  otherMessageContainer: {
    marginRight: "auto",
  },
  barMessage: {
    marginLeft: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    justifyContent: "center",
  },
  yourBarMessage: {
    backgroundColor: "#0584FE",
    width: "-100% ",
  },
  otherBarMessage: {
    backgroundColor: "#EFEFED",
    width: "85%",
  },
  message: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "left",
    marginLeft: 8,
    paddingVertical: 8,
    borderRadius: 20,
    justifyContent: "center",
  },
  yourMessageText: {
    color: "#ffffff",
    marginHorizontal: 8,
  },
  otherMessageText: {
    color: "#000000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EFEFED",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 3,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#EFEFED",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
