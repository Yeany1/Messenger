import {Pressable,StyleSheet,Text,View,TextInput,Image,} from "react-native";
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
const TimKiem = ({navigation}) => {
    return (
        <View style={styles.contaiter}>
            <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <View style={styles.btn1}>
                    <Image style={styles.icon} source={require("/assets/left222.png")}/>
                    <Text style={styles.text}>Trạng thái hoạt động</Text>
                </View>
            </Pressable>
            <View style={styles.body}>
                <Text style={styles.text1}> Hiển thị khi bạn đang hoạt động </Text>
            </View>
            <View style={styles.body2}>
                <Text style={styles.text2}>Bạn bè và các quan hệ kết nối có thể biết khi nào bạn đang hoạt động hoặc hoạt động
                    gần đây trên trang cá nhân này. Bạn cũng có thể xem thông tin này về họ. Nếu bạn muốn thay đổi 
                    cài đặt này thì hãy tắt đi mỗi khi dùng Messenger hoặc Facebook để trạng thái hoạt động của bạn 
                    không hiển thị nữa. {" "}
                        <Text style={styles.textblue}>Tìm hiểu thêm</Text>
                </Text>
                <Text> </Text>
                <Text  style={styles.text3}>Bạn vẫn có thể sử dụng dịch vụ của chúng tôi nếu tắt trạng thái hoạt động</Text>
            </View>

            <View style={styles.body3}> 
                <Text style={styles.text4}>Hiển thị khi các bạn cùng đang hoạt động </Text>
            </View>
            <View style={styles.body2}>
                <Text style={styles.text2}>Bạn bè và các quan hệ kết nối sẽ biết khi các bạn đang hoạt động trong
                cùng đoạn chat. Bạn cũng sẽ biết khi họ đang hoạt động trong cùng đoạn chat. {" "}
                        <Text style={styles.textblue}>Tìm hiểu thêm</Text>
                </Text>
            </View>
            
            {/* <Text style={styles.text1}> Đăng Ký </Text>
            <View style={styles.body}>
                <View style={styles.wraptext2}>
                    <Text style={styles.text3}> Bạn tên gì? </Text>
                    <Text style={styles.text2}> Nhập tên bạn sử dụng trong đời thực</Text>
                    <Pressable  style={styles.btn5} onPress={handleNavigate}>
                        <Text  style={styles.btntext2}>Tiếp </Text>
                    </Pressable>
                </View>

                <TextInput
                    style={styles.input1}
                    placeholder="Họ và tên"
                    placeholderTextColor="#666"
                />
            </View> */}
        </View>
    );
};

export default TimKiem;

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
        width: 22,
        height: 30,
        left: 20,
        backgroundColor: "#F2F2F2",
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
    body: {
        marginTop: 80,
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
        fontWeight: 600,
    },
});

