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
  const [isModalVisible1, setModalVisible1] = useState(false);

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
              <TouchableOpacity onPress={toggleModal1}>
                <Image style={{ width: 30, height: 30, marginTop: 8 , marginLeft: 40}} source={require('/assets/setting.png')}></Image>
              </TouchableOpacity>
              <Modal isVisible={isModalVisible1} style={{ justifyContent: 'center', margin: 10, height: '50vh', width: '95%', top: '5%', }} animationIn={'slideInUp'} animationOut={'slideOutDown'}>
      <SafeAreaView style={styles.acontainer}>
      <ScrollView style={{height: "92vh"}}>

      <SafeAreaView style={styles.amodal2}>
      <SafeAreaView style={styles.acaidat}>
      <Text style={styles.amtitle}>Cài đặt</Text>
      </SafeAreaView>
        
        <TouchableOpacity style={styles.ambutton} onPress={toggleModal1}>
          <Text style={styles.atextblue}>Xong</Text>
        </TouchableOpacity>
      </SafeAreaView>

        {Array.isArray(userData) && userData.length > 0 && (
          <SafeAreaView style={styles.auser}>
            <TouchableOpacity style={styles.abuttonUser}>
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

            <Text style={styles.atextName}>
              {userData[0].firstName + " " + userData[0].lastName}
            </Text>

            <TouchableOpacity>
              <Text style={styles.atextNote}>Viết ghi chú</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}

        <SafeAreaView style={styles.aOption}>
          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('Light_Dark')}>
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
              <Text style={styles.atextButton}>Chế độ tối</Text>
              <Text style={styles.atextStatus}>Off</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.abutton}  onPress={()=> navigation.navigate('TimKiem')}>
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
              <Text style={styles.atextButton}>Trạng thái hoạt động</Text>
              <Text style={styles.atextStatus}>Off</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <Text style={styles.atextTitle}>For Families</Text>

          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('GiamSat')}>
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
              <Text style={styles.atextButton}>Giám sát</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <Text style={styles.atextTitle}>Services</Text>

          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('Order')}>
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
              <Text style={styles.atextButton}>Đơn đặt hàng</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <Text style={styles.atextTitle}>Preferences</Text>

          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('Privacy')}>
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
              <Text style={styles.atextButton}>Quyền riêng tư & an toàn</Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('Audio')}>
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
              <Text style={styles.atextButton}>Thông báo và âm thanh</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('Photo')}>
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
              <Text style={styles.atextButton}>Ảnh & file phương tiện</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <Text style={styles.atextTitle}>Safety</Text>
          {/* <Pressable  style={styles.btn10} > */}
          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('Login')}>
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
                <Text style={styles.atextButton}>Chuyển tài khoản</Text>
              
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('Report')}>
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
              <Text style={styles.atextButton}>Báo cáo sự cố</Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('Help')}>
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
              <Text style={styles.atextButton}>Trợ giúp </Text>
            </SafeAreaView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.abutton} onPress={()=> navigation.navigate('LegalPolicy')}>
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
              <Text style={styles.atextButton}>Pháp lý & chính sách</Text>
            </SafeAreaView>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={{}}>
              <TouchableOpacity style={styles.aMeta}>
                <SafeAreaView style={styles.abuttonMeta}>
                   <Image style={{width: 20, height: 20, marginBottom: 5}}
                 source={require("/assets/icons/meta.png")}/>
                 <Text style={styles.atextMeta}>Meta</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.buttonAccountCenter}>
                    <Text style={styles.atextButton}>Trung tâm tài khoản</Text>
                    <Text style={{fontSize: 15, fontWeight: 400}}>Quản lý phần cài đặt tài khoản và tr nghiệm 
                    kết nối trên các công nghệ của Meta<br/>technologies.</Text>
                </SafeAreaView>
                
                <SafeAreaView style={[styles.abutton]}>
                <Image style={{width:20, height:20, resizeMode: "contain"}} source={require("/assets/icons/OnePeople.svg")}></Image>
                <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20}}>Thông tin cá nhân</Text>
                </SafeAreaView>

                <SafeAreaView style={[styles.abutton]}>
                <Image style={{width:20, height:20, resizeMode: "contain"}} source={require("/assets/icons/computer-security-shield.png")}></Image>
                <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20}}>Mật khẩu & bảo mật</Text>
                </SafeAreaView>
                
                <SafeAreaView style={[styles.abutton]}>
                   <Text style={styles.atextNote}>Xem thêm trong Trung tâm tài khoản</Text>
                </SafeAreaView>
              </TouchableOpacity>
              
               
        </SafeAreaView>

      </ScrollView>
    </SafeAreaView>
      </Modal>
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
            placeholder="Tìm kiếm"
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
    // fontFamily: "SF Pro Display",
    // fontWeight: 700,
    // fontstyle: "normal",
    // fontSize: 30,
    // marginLeft: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 90,
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
  amodal2: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  amtitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  ambutton: {
    padding: 10,
    // backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    position: "absolute",
    // bottom: 20,
    left: 300,
    top: 8,
  },
  amtext: {
    color: "white",
  },
  atextblue: {
    color: "blue",
    fontSize: 16,
  },
  acaidat: {
    // fontSize: 20,
    // fontWeight: "bold",
    // marginBottom: 20,
    marginBottom: 20,
    position: "absolute",
    marginTop: 5,
    // right: 10,
    top: 10,
    marginLeft: 8,
  },
  acontainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
  },
  aback: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 15,
    paddingBottom: 15,
  },

  atextButtonBack: {
    fontFamily: "SF Pro Display",
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 10,
  },

  auser: {
    alignItems: "center",
    marginTop: 50,
    
  },
  
  abuttonUser: {
    width: 115,
    height: 115,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  atextName: {
    fontFamily: "SF Pro Display",
    fontSize: 30,
    fontWeight: 600,
    marginTop: 10,
  },

  atextNote: {
    fontFamily: "SF Pro Display",
    fontSize: 15,
    fontWeight: 600,
    marginTop: 10,
    color: "rgba(5, 135, 255, 1)",
    marginBottom: 20,
  },

  aOption: {
    marginLeft: 15,
  },

  abutton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  atextButton: {
    fontFamily: "SF Pro Display",
    fontSize: 15,
    fontWeight: 600,
  },

  atextStatus: {
    fontFamily: "SF Pro Display",
    fontSize: 13,
    fontWeight: 600,
    color: "rgba(137, 138, 141, 1)",
  },

  atextTitle: {
    fontFamily: "SF Pro Display",
    fontSize: 15,
    fontWeight: 600,
    marginTop: 20,
    color: "rgba(151, 151, 151, 1)",
  },
  abtn100: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  aMeta: {
    marginLeft: 15,
    marginTop: 30,
    backgroundColor: "#F2F2F2",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  abuttonMeta: {
    flexDirection: "row",
  },

  atextMeta: {
    fontFamily: "SF Pro Text",
    fontSize: 15,
    fontWeight: 400,
    marginLeft: 5,
  },
});