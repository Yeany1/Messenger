import {Pressable,StyleSheet,Text,View,TextInput,Image,} from "react-native";
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
const  Order_Setting= ({navigation}) => {
    return (
        <View style={styles.contaiter}>
            <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <View style={styles.btn1}>
                    <Image style={styles.icon} source={require("/assets/left222.png")}/>
                    <Text style={styles.text}>Tính năng được cá nhân hóa</Text>
                </View>
            </Pressable>
            
            <View style={styles.body}>
                <Text style={styles.text1}>Cho phép đối với đơn đặt hàng</Text>
                <Text style={styles.text1}>và cuộc hẹn</Text>
            </View>

            <View style={styles.btntxt2}>
                <Text style={styles.txt2}>Cho phép Meta cung cấp các tính năng được cá nhân hóa cho đơn đặt hàng
                và cuộc hẹn dựa trên cuộc hẹn dựa trên cuộc trò chuyện giữa bạn và doanh nghiệp.</Text>
            </View>
        </View>
    );
};

export default Order_Setting;

const styles = StyleSheet.create({
    contaiter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        overflow: "hidden",
    },
    header: {
        width: "100%",
    },
    header2: {},
    
    icon: {
        width: 22,
        height: 30,
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
        marginTop: 20,
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
        marginTop: 20,
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
        // fontWeight: "bold",
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

