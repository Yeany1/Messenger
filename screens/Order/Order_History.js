import {Pressable,StyleSheet,Text,View,TextInput,Image,} from "react-native";
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
const Order_History = ({navigation}) => {
    return (
        <View style={styles.contaiter}>
            <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <View style={styles.btn1}>
                    <Text style={styles.text}>Đơn Đặt Hàng</Text>
                    <Text style={styles.text1}>Hủy</Text>
                </View>
            </Pressable>
            <Image style={{width: 200, height: 200, marginTop: 200}} source={require("/assets/hs_order.png")}/>
        </View>
    );
};

export default Order_History;

const styles = StyleSheet.create({
    contaiter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        width: "100%",
        overflow: "hidden",
    },
    btn: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    btn1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        paddingHorizontal: 10,
    },
    text: {
        color: "#000",
        fontWeight: 600,
        left: 100,
        fontSize: 25,
    },
    text1: {
        color: "#1395fc",
        fontWeight: 600,
        fontSize: 20,
    },
});

