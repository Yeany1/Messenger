import {Pressable,StyleSheet,Text,View,TextInput,Image, Switch} from "react-native";
import React, {useState, useEffect} from "react";
import { LinearGradient } from "expo-linear-gradient";
const LegalPolicy = ({navigation}) => {
    return (
        <View style={styles.contaiter}>
            <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <View style={styles.btn1}>
                    <Image style={styles.icon} source={require("/assets/left222.png")}/>
                    <Text style={styles.text}>Pháp lý và chính sách</Text>
                </View>
            </Pressable>
            <View style={styles.final}>
                <View style={styles.body}>
                    <Text style={styles.text1}>Chính sách quyền riêng tư</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Điều khoản dịch vụ</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Chính sách cookie</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Thông báo của bên thứ ba</Text>
                </View>
            </View>
            

            <View style={styles.btntxt2}><Text style={styles.txt2}>Phiên bản 435.0.0.20.109</Text></View>
        </View>
    );
};

export default LegalPolicy;

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
        left: 10,
        position: 'relative', top: 30,
    },
    icon: {
        width: 16,
        height: 20,
        left: -20,
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
        position: 'relative', top: 65,
        width: "100%",
        alignItems: "left",
        justifyContent: "left",
        marginTop: 20,
        left: 20,
    },
    btn: {
        zIndex: 1,
        position: "absolute",
        left: 40,
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
        marginLeft: 45,
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
    body:{
        // marginTop: 30,
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
        top: 40,
        marginTop: 2,
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
    switch: {
        position: "absolute",
        left: 310,
        // top: 50,
    },
});

