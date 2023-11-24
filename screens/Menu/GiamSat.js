import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput,SafeAreaView,ImageBackground,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import React from 'react'
import { Pressable } from 'react-native';
const GiamSat = ({navigation}) => {
    return ( 
        <SafeAreaView style={styles.container}>
        <ScrollView style={{height: "92vh"}}>
        <SafeAreaView style={{}}>
            <TouchableOpacity style={styles.Meta}>

                <SafeAreaView style={styles.buttonMeta}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SafeAreaView>
                        <Image style={{width: 20, height: 20, marginBottom: 8}} source={require("/assets/left22.png")}/>
                        </SafeAreaView>
                    </TouchableOpacity>
                    
                    <Image style={{width: 20, height: 20, marginTop: 5, left: 120}} source={require("/assets/icons/meta.png")}/>
                    <Text style={styles.textMeta}>Meta</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.buttonAccountCenter}>
                    <Text style={styles.textButton}>Trung tâm gia đình</Text>
                    <Text style={{fontSize: 15, fontWeight: 400, alignItems: "center", left: 50}}>Trải nghiệm giám sát trên
                    Facebook và </Text>
                    <Text style={{fontSize: 15, fontWeight: 400, left: 140}}>Messenger</Text>
                    <Text> </Text>
                </SafeAreaView>
                  
                <SafeAreaView style={[styles.button]}>
                    <Image style={{width:'100%', height:150, borderRadius: 10}} source={require("/assets/family.png")}></Image>
                    <Text> </Text>
                </SafeAreaView>

                <SafeAreaView style={[styles.button]}>
                    <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 5, marginBottom: 10}}>Bạn có thể mời con mình để hỗ trợ
                    và giám sát con trên cả Facebook laanx Messenger. Con cần chấp nhận trước khi trải nghiệm
                    giám sát bắt đầu.</Text>
                </SafeAreaView>
  
                <SafeAreaView style={[styles.button]}>
                    <Image style={{width:40, height:40, resizeMode: "contain"}} source={require("/assets/gs1.png")}></Image>
                    <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20}}>Bạn sẽ biết bạn bè trên Facebook
                    , người liên hệ trên Messenger, AI bé chat cùng và những người mà bé chặn</Text>
                </SafeAreaView>

                <SafeAreaView style={[styles.button]}>
                    <Image style={{width:40, height:40, resizeMode: "contain"}} source={require("/assets/gs2.png")}></Image>
                    <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20}}>Bạn sẽ xem được
                    một số cài đặt quyền riêng tư của bé và nhận thông báo về trải nghiệm giám sát</Text>
                </SafeAreaView>

                <SafeAreaView style={[styles.button]}>
                    <Image style={{width:40, height:40, resizeMode: "contain"}} source={require("/assets/gs3.png")}></Image>
                    <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20}}>Bạn sẽ biết bé dành bao nhiêu
                    thời gian trên mỗi ứng dụng và có thể đặt lịch giải lao</Text>
                </SafeAreaView>

                <SafeAreaView style={[styles.button]}>
                    <Image style={{width:40, height:40, resizeMode: "contain"}} source={require("/assets/gs4.png")}></Image>
                    <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20}}>Bạn không thể xem đoạn chat, những 
                    gì bé tìm kiếm hoặc nội dung không dành cho mình</Text>
                </SafeAreaView>

                <SafeAreaView style={[styles.button]}>
                    <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 5, marginBottom: 10}}>Bạn hoặc con của 
                    bạn có thể gỡ trải nghiệm giám sát bất cứ lúc nào. <Text style={styles.textNote}>Tìm hiểu thêm</Text></Text>
                </SafeAreaView>

            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    );
};

export default GiamSat;


const styles = StyleSheet.create({
    container: {
      height: "100%",
      flex: 1,
      backgroundColor: "#F9F3F9",
      marginLeft: 10,
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
    marginRight: 15,
    },
  
    textButton: {
      fontFamily: "SF Pro Display",
      fontSize: 22,
      fontWeight: 600,
      left: 90,
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
      marginLeft: 10,
      marginTop: 30,
    },
  
    buttonMeta: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
    },
  
    textMeta: {
      fontFamily: "SF Pro Text",
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 125,
    //   fontWeight: bold,
    },
  });
  

