import {Pressable,StyleSheet,Text,View,TextInput,Image,} from "react-native";
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
import { useEffect} from "react";
import { FlatList, ScrollView } from "react-native";
const Privacy = ({navigation}) => {
    return (
        <View style={styles.contaiter}>
            <ScrollView style={{height: "92vh"}}>
                <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                    <View style={styles.btn1}>
                        <Image style={styles.icon} source={require("/assets/left222.png")}/>
                        <Text style={styles.text}>Quyền riêng tư & an toàn</Text>
                    </View>
                </Pressable>
                
                <View style={styles.btntxt1}><Text style={styles.txt1}>An toàn và vui khỏe </Text></View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Người liên hệ đã ẩn </Text>
                    <Text>Ẩn người khác khỏi người liên hệ gợi ý</Text>
                </View>
                
                <View style={styles.btntxt1}><Text style={styles.txt1}>Bảo mật </Text></View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Khóa ứng dụng</Text>
                    <Text>Cần có FaceID hoặc mã khóa</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Đoạn chat mã hóa đầu cuối</Text>
                    <Text>Quản lý chế độ cài đặt dành cho các đoạn</Text>
                    <Text>chat được mã hóa đầu cuối</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Lướt xem trang web an toàn</Text>
                    <Text>Bật cảnh cáo về các liên kết có thể không</Text>
                    <Text>an toàn</Text>
                </View>

                <View style={styles.btntxt1}><Text style={styles.txt1}>Ai có thể liên hệ với bạn</Text></View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Phân phối tin nhắn</Text>
                    <Text>Chọn ai có thể nhắn tin cho bạn</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Tài khoản đã hạn chế</Text>
                    <Text>Giới hạn tương tác với ai đó</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Tài khoản đã chặn</Text>
                    <Text>Không cho ai đó liên hệ với bạn</Text>
                </View>

                <View style={styles.btntxt1}><Text style={styles.txt1}>Những gì mọi người nhìn thấy</Text></View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Trạng thái hoạt động</Text>
                    <Text>Cho mọi người biết khi bạn có mặt</Text>
                    <Text>trên Messenger</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Kiểm soát tin</Text>
                    <Text>Chọn ai có thể xem tin của bạn</Text>
                </View>
                <View style={styles.btntxt2}>
                    <Text style={styles.txt2}>Xem trước tin nhắn trong phần thông báo và biểu ngữ khi bạn
                                                không dùng ứng dụng</Text>
                </View>

                
                
            </ScrollView>
        </View>
    );
};

export default Privacy;

const styles = StyleSheet.create({
    contaiter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        // backgroundColor: "#fff",
        width: "100%",
        overflow: "hidden",
    },
    header: {
        width: "100%",
    },
    header2: {},
    
    icon: {
        width: 18,
        height: 25,
        left: 20,
        backgroundColor: "#F2F2F2",
    },
    btntxt1: {
        position: 'relative', top: 50,
        width: "100%",
        alignItems: "left",
        justifyContent: "left",
        left: 20,
        marginTop: 20,
    },
    btntxt2: {
        position: 'relative', top: 50,
        width: "100%",
        alignItems: "left",
        justifyContent: "left",
        marginTop: 20,
        left: 20,
    },
    btn: {
        zIndex: 1,
        position: "absolute",
        left: 0,
        top: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    textblue: {
        color: "#1395fc",
        fontWeight: 600,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginLeft: 60,
    },
    btn1: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    txt1: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#A6A6A6",
        width: "90%",
        textAlign: "left",
    },
    txt2: {
        fontSize: 16,
        color: "#A6A6A6",
        width: "90%",
        textAlign: "left",
    },
    body: {
        marginTop: 5,
        width: "95%",
        // alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        bottom: -50,
        marginLeft: 10,
    },
    body2: {
        marginTop: 20,
        width: "85%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#fff",
    },
    text1: {
        fontSize: 16,
        fontWeight: 600,
        color: "#000",
    },
    text2: {
        fontSize: 14,
        color: "#000",
    },
    text3: {
        fontSize: 14,
        color: "#000",
    },
    body3:{
        marginTop: 30,
        width: "95%",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    text4:{
        width: "70%",
        fontSize: 16,
        color: "#000",
    },
});

