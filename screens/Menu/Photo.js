import {Pressable,StyleSheet,Text,View,TextInput,Image,} from "react-native";
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
const Photo = ({navigation}) => {
    return (
        <View style={styles.contaiter}>
            <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <View style={styles.btn1}>
                    <Image style={styles.icon} source={require("/assets/left222.png")}/>
                    <Text style={styles.text}>Ảnh & file phương tiện</Text>
                </View>
            </Pressable>
            
            <View style={styles.btntxt1}><Text style={styles.txt1}>Camera</Text></View>

            <View style={styles.body}>
                <Text style={styles.text1}>Lưu ảnh và video</Text>
            </View>
            
            <View style={styles.btntxt2}>
                <Text style={styles.txt2}>Tự động lưu ảnh và video bạn chụp/quay hoặc chỉnh sửa vào thiết bị
                                            sau khi gửi.</Text>
            </View>
            
            <View style={styles.btntxt1}><Text style={styles.txt1}>Liên kết</Text></View>

            <View style={styles.body}>
                <Text style={styles.text1}>Mở bằng trình duyệt bên ngoài</Text>
                <Text style={styles.txt2}>Liên kết đã chia sẻ trong tin nhắn sẽ mở </Text>
                <Text style={styles.txt2}>ở bên ngoài</Text>
            </View>
        </View>
    );
};

export default Photo;

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
        height: 22,
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

