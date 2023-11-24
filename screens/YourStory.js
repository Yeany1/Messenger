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

export default function YourStory({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.containerHeader}>
          <TouchableOpacity style={styles.buttonMore}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("/assets/icons/Menu.svg")}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Stories</Text>
      </SafeAreaView>

        <ScrollView style={styles.containerBody}>
            <SafeAreaView style={styles.groupImageButton}>
                 <TouchableOpacity style={styles.box}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={require("/assets/img/anh-phong-canh-nui-non-dep_093817809.jpg")}
                >
                    <TouchableOpacity>
                        <SafeAreaView style={styles.oval}>
                            <Image
                                style={{width: 20, height: 20}}
                                source={require("/assets/icons/cross.svg")}
                            />
                        </SafeAreaView>

                        <Text style={styles.textYourStory}>Add to story</Text>
                            
                    </TouchableOpacity>
                
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={require("/assets/img/anh-phong-canh-anime-dep-danh-cho-may-tinh.jpg")}>
                        <Image
                                style={{width: 40, height: 40, borderRadius: 50, position: "absolute", top: 20, left: 20}}
                                source={require("/assets/img/anh-dai-dien-anime-den_013711515.jpg")}
                            />

                        <Text style={styles.textYourStory}>Nguyễn Văn A</Text>
                
                </ImageBackground>
            </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.groupImageButton}>
                 <TouchableOpacity style={styles.box}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={require("/assets/img/khi-nguoi-yeu-cu-van-luon-doi-theo-minh-co-nen-cho-ho-mot-co-hoi-thu-2b3ee036.jpg")}
                >
                    <TouchableOpacity>
                        <Image
                                style={{width: 40, height: 40, borderRadius: 50, position: "absolute", top: 20, left: 20}}
                                source={require("/assets/img/R.jpg")}
                            />

                        <Text style={styles.textYourStory}>Trần Ngọc Ánh</Text>
                
                            
                    </TouchableOpacity>
                
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={require("/assets/img/th.jpg")}>
                        <Image
                                style={{width: 40, height: 40, borderRadius: 50, position: "absolute", top: 20, left: 20}}
                                source={require("/assets/img/R (1).jpg")}
                            />

                        <Text style={styles.textYourStory}>Lê Minh Khang</Text>
                
                </ImageBackground>
            </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.groupImageButton}>
                 <TouchableOpacity style={styles.box}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={require("/assets/img/19070ed385e4fef0fee9d3e9460b6819.jpg")}
                >
                    <TouchableOpacity>
                        <Image
                                style={{width: 40, height: 40, borderRadius: 50, position: "absolute", top: 20, left: 20}}
                                source={require("/assets/img/9982d29936d1827ba222ba414a6f99fc.jpg")}
                            />

                        <Text style={styles.textYourStory}>Huỳnh Ngọc Mai Thi</Text>
                
                            
                    </TouchableOpacity>
                
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <ImageBackground 
                    style={styles.imageBackground}
                    source={require("/assets/img/cau-tinh-yeu-da-nang-6-nicole68evans-819x1024.jpg")}>
                        <Image
                                style={{width: 40, height: 40, borderRadius: 50, position: "absolute", top: 20, left: 20}}
                                source={require("/assets/img/OIP.jpg")}
                            />

                        <Text style={styles.textYourStory}>Hoàng Bảo Khánh</Text>
                
                </ImageBackground>
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
    },

    containerHeader: {
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingLeft: 15,
        paddingBottom: 10,
    },

    headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        marginLeft: 10,
    },

    buttonMore: {
        marginRight: 20,
    },

    imageBackground: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
        resizeMode: "cover",
    },

    box: {
        width:170,
        height: 220,
        borderRadius: 20,
        marginHorizontal: 10,
    },

    containerBody: {
        paddingHorizontal: 20,
    },

    groupImageButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },

    oval: {
        width: 40,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 20,
        left: 20,
    },

    textYourStory: {
        fontFamily: "SF Pro Text",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "600",
        color: "#fff",
        position: "absolute",
        top: 190,
        left: 20,

    },
});
