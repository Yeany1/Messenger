import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput,SafeAreaView,ImageBackground,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import React from 'react'
import { Pressable } from 'react-native';

const Menu = ({ navigation }) => {
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
      <ScrollView style={{height: "92vh"}}>
        {Array.isArray(userData) && userData.length > 0 && (
          <SafeAreaView style={styles.user}>
            <TouchableOpacity style={styles.buttonUser}>
              <Image
                style={{ width: 115, height: 115, borderRadius: "50%" }}
                source={{ uri: userData[0].avatar }}
              ></Image>
            </TouchableOpacity>
            <SafeAreaView
              style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 65,
                left: 205,
              }}
            >
              <TouchableOpacity >
                <SafeAreaView
                  style={{
                    width: 46,
                    height: 46,
                    backgroundColor: "rgba(0,0,0,0.04)",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{ width: 22, height: 22 }}
                    source={require("/assets/icons/Camera2.svg")}
                  />
                </SafeAreaView>
              </TouchableOpacity>
            </SafeAreaView>

            <Text style={styles.textName}>
              {userData[0].firstName + " " + userData[0].lastName}
            </Text>

            <TouchableOpacity>
              <Text style={styles.textNote}>Viết ghi chú</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}

        <SafeAreaView style={styles.Option}>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Light_Dark')}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(0,0,0,1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 26, height: 26 }}
                source={require("/assets/icons/Moon Symbol.svg")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Chế độ tối</Text>
              <Text style={styles.textStatus}>Off</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}  onPress={()=> navigation.navigate('TimKiem')}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(90, 212, 57, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/iconActiveStatus.svg")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Trạng thái hoạt động</Text>
              <Text style={styles.textStatus}>Off</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <Text style={styles.textTitle}>For Families</Text>

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('GiamSat')}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(5, 132, 254, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/Family.svg")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Giám sát</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <Text style={styles.textTitle}>Services</Text>

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Order')}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(45, 214, 0, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/Shopping Bag.svg")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Đơn đặt hàng</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <Text style={styles.textTitle}>Preferences</Text>

          <TouchableOpacity style={styles.button}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(25, 163, 254, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/Shield.svg")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Quyền riêng tư</Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Audio')}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(164, 19, 215, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/notifications.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Thông báo và âm thanh</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Photo')}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(164, 19, 215, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/picture.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Ảnh & file phương tiện</Text>
            </SafeAreaView>
          </TouchableOpacity>

          

          <TouchableOpacity style={styles.button}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(36, 150, 255, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/download.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Cập nhật</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <Text style={styles.textTitle}>Safety</Text>
          {/* <Pressable  style={styles.btn10} > */}
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(164, 19, 215, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              
                <Image style={{ width: 28, height: 28 }} source={require("/assets/icons/user-account.png")}/>
              
              
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
                <Text style={styles.textButton}>Chuyển tài khoản</Text>
              
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Report')}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: " rgba(248, 89, 0, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/warning (1).png")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Báo cáo sự cố</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(25, 163, 254, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                source={require("/assets/icons/help-web-button.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Trợ giúp </Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <SafeAreaView
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(80, 85, 92, 1)",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 22, height: 22, marginLeft: 5 }}
                source={require("/assets/icons/page.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={{ marginLeft: 15 }}>
              <Text style={styles.textButton}>Pháp lý & chính sách</Text>
            </SafeAreaView>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={{}}>
              <TouchableOpacity style={styles.Meta}>
                <SafeAreaView style={styles.buttonMeta}>
                   <Image style={{width: 20, height: 20, marginBottom: 5}}
                 source={require("/assets/icons/meta.png")}/>
                 <Text style={styles.textMeta}>Meta</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.buttonAccountCenter}>
                    <Text style={styles.textButton}>Trung tâm tài khoản</Text>
                    <Text style={{fontSize: 15, fontWeight: 400}}>Quản lý phần cài đặt tài khoản và tr nghiệm 
                    kết nối trên các công nghệ của Meta<br/>technologies.</Text>
                </SafeAreaView>
                
                <SafeAreaView style={[styles.button]}>
                <Image style={{width:20, height:20, resizeMode: "contain"}} source={require("/assets/icons/OnePeople.svg")}></Image>
                <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20}}>Thông tin cá nhân</Text>
                </SafeAreaView>

                <SafeAreaView style={[styles.button]}>
                <Image style={{width:20, height:20, resizeMode: "contain"}} source={require("/assets/icons/computer-security-shield.png")}></Image>
                <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20}}>Mật khẩu & bảo mật</Text>
                </SafeAreaView>
                
                <SafeAreaView style={[styles.button]}>
                   <Text style={styles.textNote}>Xem thêm trong Trung tâm tài khoản</Text>
                </SafeAreaView>
              </TouchableOpacity>
              
               
        </SafeAreaView>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Menu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 15,
    paddingBottom: 15,
  },

  textButtonBack: {
    fontFamily: "SF Pro Display",
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 10,
  },

  user: {
    alignItems: "center",
    marginTop: 50,
  },
  
  buttonUser: {
    width: 115,
    height: 115,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textName: {
    fontFamily: "SF Pro Display",
    fontSize: 30,
    fontWeight: 600,
    marginTop: 10,
  },

  textNote: {
    fontFamily: "SF Pro Display",
    fontSize: 15,
    fontWeight: 600,
    marginTop: 10,
    color: "rgba(5, 135, 255, 1)",
    marginBottom: 20,
  },

  Option: {
    marginLeft: 15,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  textButton: {
    fontFamily: "SF Pro Display",
    fontSize: 15,
    fontWeight: 600,
  },

  textStatus: {
    fontFamily: "SF Pro Display",
    fontSize: 13,
    fontWeight: 600,
    color: "rgba(137, 138, 141, 1)",
  },

  textTitle: {
    fontFamily: "SF Pro Display",
    fontSize: 15,
    fontWeight: 600,
    marginTop: 20,
    color: "rgba(151, 151, 151, 1)",
  },
  btn100: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Meta: {
    marginLeft: 70,
    marginTop: 30,
  },

  buttonMeta: {
    flexDirection: "row",
  },

  textMeta: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontWeight: 400,
    marginLeft: 5,
  },
});
