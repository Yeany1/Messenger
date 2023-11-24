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
            <TouchableOpacity style={styles.final}>

                <SafeAreaView style={styles.body1}>
                    
                    <Image style={styles.icon_messmn} source={require("/assets/mess_mini.png")}/>
                    <Text style={styles.txt1}>Trung tâm trợ giúp</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SafeAreaView>
                        <Image style={styles.iconleft} source={require("/assets/left22.png")}/>
                        </SafeAreaView>
                    </TouchableOpacity>
                </SafeAreaView>

                <Text style={styles.xinchao}>Xin chào! Chúng tôi có thể giúp gì cho</Text>
                <Text style={styles.xinchao}>bạn?</Text>
                <SafeAreaView style={styles.body2}>
                    <SafeAreaView style={styles.inputSearch}>
                        <Image style={styles.search_icon} source={require("/assets/icons/search.png")}/>   
                        <TextInput style={styles.input2} placeholder="       Tìm Kiếm" placeholderTextColor="#666"/>
                    </SafeAreaView>

                    
                    
                </SafeAreaView>

                <SafeAreaView style={styles.body3}>
                        <Text style={styles.textMeta}>Chủ đề thịnh hành</Text>
                        <Text style={styles.textblue}>Bắt đầu đoạn chat với AI trên Messenger</Text>
                        <Text style={styles.textblue}>Tạo kênh thông báo trên Facebook hoặc Messenger</Text>
                        <Text style={styles.textblue}>Các tính năng chặn hoạt động trên Messenger</Text>
                        <Text style={styles.textblue}>Không thể gửi tin nhắn trên Messenger</Text>
                        <Text style={styles.textblue}>Định nghĩa và cách hoạt động của tính năng mã hóa đầu cuối trên Messenger</Text>
                        <Text style={styles.textblue}>Những gì bạn có thể làm nếu bị ai đó làm phiền trên Messenger</Text>
                        <Text style={styles.textblue}>Đoạn chat công cộng</Text>
                </SafeAreaView>
                
                    
                    

                <SafeAreaView>
                    <Text style={{color: "#000", fontWeight: 'bold', fontSize: 20, marginBottom: 15, marginLeft: 15}}>Bạn đang tìm kiếm thứ khác?</Text>
                    <SafeAreaView style={[styles.body4]}>
                        <Image style={{width:90, height:100, resizeMode: "contain"}} source={require("/assets/help1.png")}></Image>
                        <SafeAreaView style={[styles.body4text]}>
                            <Text style={{fontSize: 18, fontWeight: 600, marginRight: 40, marginLeft: 5}}>Truy cập vào Messenger dành</Text>
                            <Text style={{fontSize: 18, fontWeight: 600, marginRight: 40, marginLeft: 5}}>cho doanh nghiệp</Text>
                            <Text style={{fontSize: 16, fontWeight: 400, marginRight: 40, marginLeft: 5, marginTop: 10}}>Tìm hiểu thêm về cách quảng cáo</Text>
                            <Text style={{fontSize: 16, fontWeight: 400, marginRight: 40, marginLeft: 5}}>doanh nghiệp của bạn trên Messenger</Text>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                
                <SafeAreaView>
                    <SafeAreaView style={styles.body5}>
                        <SafeAreaView style={styles.body44}>
                            <Image style={{width:40, height:40, resizeMode: "contain"}} source={require("/assets/c.png")}></Image>
                            <Text style={{fontSize: 15, fontWeight: 400}}>2023 Meta</Text>
                        </SafeAreaView>
                        <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20, marginTop: 20}}>Chính sách quyền riêng tư</Text>
                        <Text style={{fontSize: 15, fontWeight: 400, marginLeft: 20, marginTop: 20}}>Điều khoản</Text>
                        <Image style={{width:200, height:40, resizeMode: "contain", marginLeft: 10, marginTop: 20}} source={require("/assets/fromMeta.png")}></Image>
                    </SafeAreaView>
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
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#fff",
        marginLeft: 10,
      },
    final: {
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    body1: {
      backgroundColor: '#fff',
      flexDirection: "row",
      marginTop: 20,
      alignItems: 'center',
    },
    txt1: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000000',
      left: 10,

    },
    iconleft: {
      width: 20,
      height: 20,
      left: 50,
      position: "absolute",
      top: -10,
    },
    icon_messmn: {
      width: 60,
      height: 60,
      marginBottom: 8,
      marginLeft: 5,
    },
    body2: {
      backgroundColor: '#fff',
      flexDirection: "row",
      marginTop: 20,
      alignItems: 'center',
      width: '100%',
    },
    inputSearch: {
      height: 100,
      width: 350,
      paddingLeft: 10,
      backgroundColor: '#fff',
      fontSize: 16,
      marginBottom: 10,
    },
    input2: {
      height: 40,
      width: 350,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      paddingLeft: 10,
      backgroundColor: '#fff',
      fontSize: 16,
      marginBottom: 10,
    },
    textblue: {
        color: "#1395fc",
        fontWeight: 600,
        marginTop: 20,
        fontSize: 18,
        marginRight: 20,
    },
    xinchao: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 19,
        left: 15,
        
    },
    search_icon:{
        width: 20, 
        height: 20, 
        marginLeft: 10, 
        left: 10,
        position: "absolute",
        top: 10,
    },
    body3: {
        backgroundColor: '#fff',
        marginLeft: 15,
        width: '100%',
        bottom: 50,
    },
    textMeta: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 20,
    },
    body4:{
        flexDirection: "row",
        alignItems: "center",
        // marginTop: 20,
        backgroundColor: '#F5F5F5',
        marginRight: 15,
        borderRadius: 25,
        padding: 10,
        width: '100%',
    },
    body44:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: '#F5F5F5',
        marginRight: 15,
        borderRadius: 25,
        padding: 10,
        width: '100%',
    },
    body4text: {
        color: "#000",
        fontWeight: '500',
        fontSize: 20,
        marginRight: 20,
    },
    body5: {
        backgroundColor: '#F5F5F5',
        marginRight: 15,
        borderRadius: 25,
        padding: 10,
        width: '100%',
        marginTop: 20,
    },
  });
  

