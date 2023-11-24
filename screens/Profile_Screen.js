import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";


export default function Profile_Screen({ navigation, route }) {
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
      <SafeAreaView style={styles.buttonHeader}>
        <TouchableOpacity style={styles.buttonBack}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={require("/assets/icons/back.svg")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonMore}>
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={require("/assets/icons/more.svg")}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={styles.scroll}>
        {Array.isArray(userData) && userData.length > 0 && (
        
          <SafeAreaView style={styles.thongtin}>
            <TouchableOpacity style={styles.user}>
                  <Image
                    style={{ width: 110, height: 110, borderRadius: "50%" }}
                    source={{ uri: avatar }}
                />
                <Text style={styles.textUser}>{firstName + " " + lastName}</Text>
            </TouchableOpacity>
          </SafeAreaView>
          
        )}
         <SafeAreaView style={styles.buttonOption}>
          <TouchableOpacity style={styles.option}>
            <TouchableOpacity style={styles.buttonCall}
              onPress={() => {
                navigation.navigate("Call_Screen",{
                  id: id,
                  firstName: firstName,
                  lastName: lastName,
                  avatar: avatar,
                });
              }}
            >
              <Image
                style={{ width: 15, height: 15, resizeMode: "contain" }}
                source={require("/assets/icons/Call.svg")}
              />
            </TouchableOpacity>
            <Text style={styles.textCall}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <TouchableOpacity style={styles.buttonCall}
              onPress={() => {
                navigation.navigate("VideoCall_Screen",{
                  id: id,
                  firstName: firstName,
                  lastName: lastName,
                  avatar: avatar,
                });
              }}
            
            >
              <Image
                style={{ width: 15, height: 15, resizeMode: "contain" }}
                source={require("/assets/icons/VideoCall.svg")}
              />
            </TouchableOpacity>
            <Text style={styles.textCall}>Video</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <TouchableOpacity style={styles.buttonCall}>
              <Image
                style={{ width: 15, height: 15, resizeMode: "contain" }}
                source={require("/assets/icons/OnePeople.svg")}
              />
            </TouchableOpacity>
            <Text style={styles.textCall}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <TouchableOpacity style={styles.buttonCall}>
              <Image
                style={{ width: 15, height: 15, resizeMode: "contain" }}
                source={require("/assets/icons/Bell.svg")}
              />
            </TouchableOpacity>
            <Text style={styles.textCall}>Mute</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={styles.listCustom}>
          <Text style={styles.textCustom}>Customization</Text>
            <TouchableOpacity style={styles.buttonTheme}>
              <Text style={styles.textTheme}>Theme</Text>
              <Image
                style={{ width: 25, height: 25, resizeMode: "contain" }}
                source={require("/assets/icons/OvalColor.svg")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTheme}>
              <Text style={styles.textTheme}>Quick reaction</Text>
              <Image
                style={{ width: 25, height: 25, resizeMode: "contain" }}
                source={require("/assets/icons/Like.svg")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTheme}>
              <Text style={styles.textTheme}>Nicknames</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTheme}>
              <Text style={styles.textTheme}>Word effects</Text>
              <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 15, height: 15, resizeMode: "contain" }}
                source={require("/assets/icons/magic.svg")}
              />
              </SafeAreaView> 
            </TouchableOpacity>

       <Text style={styles.textMoreAction}>More actions</Text>
          <TouchableOpacity style={styles.buttonTheme}>
              <Text style={styles.textTheme}>View media, files & links</Text>
              <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 14, height: 14, resizeMode: "contain" }}
                source={require("/assets/icons/gallery.svg")}
              />
              </SafeAreaView> 
            </TouchableOpacity>   
          
            <TouchableOpacity style={styles.buttonTheme}>
              <Text style={styles.textTheme}>View pinned messages</Text>
              <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 16, height: 16, resizeMode: "contain" }}
                source={require("/assets/icons/pinned.svg")}
              />
              </SafeAreaView>  
            </TouchableOpacity>   

            <TouchableOpacity style={styles.buttonTheme}>
              <Text style={styles.textTheme}>Search in conversation</Text>
              <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 16, height: 16, resizeMode: "contain" }}
                source={require("/assets/icons/search.png")}
              />
              </SafeAreaView>  
            </TouchableOpacity>   

            <TouchableOpacity style={styles.buttonTheme}>
              <SafeAreaView>
                <Text style={styles.textTheme}>Notifications & sounds</Text>
                <Text style={styles.textStatus}>On</Text>
              </SafeAreaView>
              
              <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 17, height: 17, resizeMode: "contain" }}
                source={require("/assets/icons/Bell.svg")}
              />
              </SafeAreaView>
            </TouchableOpacity>   

            <TouchableOpacity style={styles.buttonTheme}>
                <Text style={styles.textTheme}>Notifications & sounds</Text>
                <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 16, height: 16, resizeMode: "contain" }}
                source={require("/assets/icons/Bell.svg")}
              />
              </SafeAreaView>
            </TouchableOpacity>  
           
            <TouchableOpacity style={styles.buttonTheme}>
                <Text style={styles.textTheme}>Go to secret conversation</Text>
                <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 14, height: 14, resizeMode: "contain" }}
                source={require("/assets/icons/lock.png")}
              />
              </SafeAreaView>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.buttonTheme}>
              {Array.isArray(userData) && userData.length > 0 && (
                <Text style={styles.textTheme}>{"Create group chat with" + " " + userData[1].lastName}</Text>
                )}
                
                <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 17, height: 17, resizeMode: "contain" }}
                source={require("/assets/icons/twopeople.png")}
              />
              </SafeAreaView>
            </TouchableOpacity>  

            <TouchableOpacity style={styles.buttonTheme}>
                <Text style={styles.textTheme}>Share contact</Text>
                <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 16, height: 16, resizeMode: "contain" }}
                source={require("/assets/icons/share.png")}
              />
              </SafeAreaView>
            </TouchableOpacity>  
          
          <Text style={styles.textMoreAction}>Privacy & support</Text>
            <TouchableOpacity style={styles.buttonTheme}>
                <Text style={styles.textTheme}>Restrict</Text>
                <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 16 , height: 16, resizeMode: "contain" }}
                source={require("/assets/icons/restrict.svg")}
              />
              </SafeAreaView>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.buttonTheme}>
                <Text style={styles.textTheme}>Block</Text>
                <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 19, height: 19, resizeMode: "contain" }}
                source={require("/assets/icons/stop.png")}
              />
              </SafeAreaView>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.buttonTheme}>
              <SafeAreaView>
                <Text style={styles.textTheme}>Report</Text>
                <Text style={styles.textStatus}>Give feedback and report conversation</Text>
              </SafeAreaView>
              
              <SafeAreaView style={{
                width:30, 
                height:30, 
                backgroundColor:"#ededed",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"}}>
                  <Image
                style={{ width: 16, height: 16, resizeMode: "contain" }}
                source={require("/assets/icons/warning.png")}
              />
              </SafeAreaView>
            </TouchableOpacity> 
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  buttonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    
  },

  buttonBack: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  buttonMore: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    
  },

  scroll: {
    width: "100%",
    height: "100vh",
    paddingHorizontal: 15,

  },

  user: {
    alignItems: "center",
    marginTop: 40,
  },

  textUser: {
    fontFamily: "SF Pro Display",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    marginTop: 15,
  },

  buttonOption: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  option: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  buttonCall: {
    backgroundColor: "#EDEDED",
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  textCall: {
    fontFamily: "SF Pro Text",
    fontSize: 10,
    fontStyle: "Regular",
    marginTop: 5,
  },

  textCustom: {
    fontFamily: "SF Pro Text",
    fontSize: 13,
    fontWeight: "600",
    fontStyle: "normal",
    color: "rgba(0,0,0,0.35)",
    marginBottom: 10,
  },

  textMoreAction: {
    fontFamily: "SF Pro Text",
    fontSize: 13,
    fontWeight: "600",
    fontStyle: "normal",
    color: "rgba(0,0,0,0.35)",
    marginBottom: 10,
    marginTop: 10,
  },

  textTheme: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontWeight: "300",
  },

  buttonTheme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
  },

  textStatus: {
    fontFamily: "SF Pro Text",
    fontSize: 13,
    fontWeight: "300",
    color: "rgba(0,0,0,0.5)",
  },

});
