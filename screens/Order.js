import {Pressable,StyleSheet,Text,View,TextInput,Image,} from "react-native";
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
const Order = ({navigation}) => {
    return (
        <View style={styles.contaiter}>
            <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <View style={styles.btn1}>
                    <Image style={styles.icon1} source={require("../assets/left222.png")}/>
                    <Text style={styles.text}>Đơn Đặt Hàng</Text>
                </View>
            </Pressable>
            <View style={styles.final}>
                <View style={styles.body}>
                    
                    <Pressable style={styles.btn} onPress={()=> navigation.navigate('Order_History')}>
                        <Text style={styles.text1}>Lịch sử đặt hàng</Text>
                        <Image style={styles.icon} source={require("../assets/right.png")}/>
                        
                    </Pressable>
                </View>
                <View style={styles.body}>
                <Pressable style={styles.btn} onPress={()=> navigation.navigate('Order_Setting')}>
                        <Text style={styles.text1}>Cài đặt đơn đặt hàng</Text>
                        <Image style={styles.icon} source={require("../assets/right.png")}/>
                        
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Order;

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
    final: {
        width: "100%",
        // marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    icon1: {
        width: 20,
        height: 20,
        marginLeft: -100,
    },
    icon: {
        width: 35,
        height: 35,
        paddingTop: 20,
        marginRight: -300,
        top: -20,
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
        position: 'relative', top: 65,
        width: "100%",
        alignItems: "left",
        justifyContent: "left",
        marginTop: 20,
        left: 20,
    },
    btn: {
        width: "100%",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        
    },
    textblue: {
        color: "#1395fc",
        fontWeight: 600,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginLeft: 80,
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
        marginTop: 1,
        width: "95%",
        // alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        alignItems: "center",
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        bottom: -50,
        flexDirection: "row",
    },
    text1: {
        fontSize: 18,
        color: "#000",
        width: "90%",
        textAlign: "left",
        alignItems: "center",
        justifyContent: "center",
    },
    text2: {
        fontSize: 14,
        color: "#000",
    },
});

