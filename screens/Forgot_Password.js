import {Pressable,StyleSheet,Text,View,TextInput,Image,} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const Forgot_Password = ({navigation}) => {
    const [soDienThoai, setSoDienThoai] = useState("");
    const handleNavigate = () => {
        
    };
    return (
        <View style={styles.contaiter}>
            <View style={styles.header}>
                <Pressable style={styles.btn} onPress={() => navigation.goBack()} >
                    <Image style={styles.icon} source={require("../assets/left2.png")}/>
                </Pressable>
                <Text style={styles.text1}> Đăng nhập </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.wraptext2}>
                    <Text style={styles.text3}> Tìm tài khoản </Text>
                    <Text style={styles.text2}> Nhập số di động hoặc địa chỉ email của bạn </Text>
                    <Pressable  style={styles.btn5} onPress={handleNavigate}>
                        <Text  style={styles.btntext2}>Tìm Tài Khoản </Text>
                    </Pressable>
                </View>

                <TextInput
                    style={styles.input1}
                    placeholder="Số di động hoặc email"
                    placeholderTextColor="#666"
                    value={soDienThoai}
                    onChangeText={setSoDienThoai}
                />
            </View>
        </View>
    );
};

export default Forgot_Password;

const styles = StyleSheet.create({
    contaiter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        width: "100%",
        overflow: "hidden",
    },
    header: {
        width: "100%",
    },
    header2: {},
    btn: {
        zIndex: 1,
        position: "absolute",
        left: 16,
        top: 55,
    },
    icon: {
        width: 22,
        height: 30,
    },
    text1: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff",
        textAlign: "left",
        width: "100%",
        height: 22,
        zIndex: 1,
        top: 60,
        left: 50,
    },
    wraptext2: {
        backgroundColor: "#fff",
        width: "100%",
        position: "absolute",
        height: 43,
        left: 0,
        top: -5,
        justifyContent: "center",
        paddingLeft: 20,
    },
    text2: {
        fontSize: 16,
        fontWeight: "400",
        color: "#666",
    },

    input1: {
        width: "100%",
        height: 40,
        outlineStyle: "none",
        marginBottom: 8,
        borderBottomColor: "#dfdfdf",
        borderBottomWidth: 2,
        marginTop: 40,
        top: 300
    },
    input2: {
        width: "100%",
        height: 40,
        borderBottomColor: "#23D1F4",
        borderBottomWidth: 2,
        outlineStyle: "none",
        marginBottom: 8,
    },
    body: {
        marginTop: 95,
        width: "100%",
        paddingHorizontal: 16,
    },
    icon2: {
        width: 22,
        height: 30,
    },
    wrapicon: {
        zIndex: 1,
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 52,
        height: 52,
        backgroundColor: "#66ADE6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    text3: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1993f3",
        textAlign: "left",
        width: 157,
        height: 33,
        paddingTop: 10,
    },
    btn5: {
        width: "90%",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#1993f3",
        height: 40,
        backgroundColor: "#1993f3",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        top:100,
        marginVertical: 0,
        marginHorizontal: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingVertical: 0,
        paddingHorizontal: 0,
        padding: 0,
        
    },
    btntext2: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff",
        
    },
});
