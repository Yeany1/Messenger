import {Pressable, StyleSheet, Text, View, TextInput, Image,} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/users/usersSlice";

const Login = ({navigation, route}) => {
    const [taiKhoan, setTaiKhoan] = useState(route.params?.soDienThoai || "0559023868");
    const [matKhau, setMatKhau] = useState("123456");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch(); 

    const handleNavigate = () => {
        const md5 = require("md5");
        fetch(`http://localhost:3000/users?soDienThoai=${taiKhoan}&matKhau=${md5(matKhau)}`)
            .then(res => res.json())
            .then((users) => {
                if(users.length > 0) {
                    // alert('login success');
                    dispatch(userLogin({soDienThoai:taiKhoan})); 
                    navigation.navigate({
                        name: "Containers", 
                        params: {soDienThoai: taiKhoan},
                    });
                } else {
                    setMessage("Mật khẩu không đúng. Vui lòng kiểm tra và thử lại.")
                }
            })
    };
    return (
        <View style={styles.contaiter}>
            {/* <View style={styles.header}> */}
                {/* <Header1 />
                 */}
                 {/* <Header2 /> */}
                <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                    <View style={styles.btn11}>
                        
                        <Image style={styles.icon} source={require("../assets/left2.png")}/>
                        {/* <Text style={styles.text11}>Quay lại</Text> */}
                    </View>
                    
                </Pressable>
                <Image source={require('../assets/bgr22.png')} style={styles.bgr2}/>
              
            {/* </View> */}
            <View style={styles.body}>
                
                <TextInput
                    style={styles.input1}
                    placeholder="Số điện thoại"
                    placeholderTextColor="#666"
                    value={taiKhoan}
                    onChangeText={setTaiKhoan}
                />
                <TextInput
                    style={styles.input2}
                    placeholder="Mật khẩu"
                    placeholderTextColor="#666"
                    value={matKhau}
                    onChangeText={setMatKhau}
                    secureTextEntry={true}
                />
                <Text style={styles.textFailLogin}>{message}</Text>
                <Pressable  style={styles.btn1} onPress={handleNavigate}>
                    <Text  style={styles.btntext1}>ĐĂNG NHẬP </Text>
                </Pressable>
                <Pressable onPress={()=> navigation.navigate('Forgot_Password')}>
                    <Text style={styles.bottomtext}>QUÊN MẬT KHẨU </Text>
                </Pressable>
            </View>
            {/* <Pressable style={styles.wrapicon} onPress={handleNavigate}>
                <Image style={styles.icon2} source={require("../assets/arrow-right.svg")} />
            </Pressable> */}
        </View>
    );
};

export default Login;

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
    btn1: {
        borderRadius: 25,
        backgroundColor: "#0092ff",
        width: 238,
        height: 52, 
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 6,
    },
    btntext1: {
        fontSize: 15,
        letterSpacing: -0.4,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center",
        width: 92,
        height: 16
    },
    bgr2: {
        width: '100%',
        height: 140,
        resizeMode: 'contain',
        position: 'absolute',
        top: 200, 
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: "contain",
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
        backgroundColor: "#F3F4F6",
        width: "100%",
        position: "absolute",
        height: 43,
        left: 0,
        top: -22,
        justifyContent: "center",
        paddingLeft: 20,
    },
    text2: {},
    text3: {
        fontSize: 14,
        fontWeight: "700",
        color: "#1993f3",
        textAlign: "left",
        width: 157,
        height: 33,
        paddingTop: 10,
    },

    input1: {
        width: "100%",
        height: 40,
        outlineStyle: "none",
        marginBottom: 8,
        borderBottomColor: "#dfdfdf",
        borderBottomWidth: 2,
        marginTop: 40,
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
        position: 'absolute',
        bottom: 0
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
    bottomtext: {
        fontSize: 15,
        letterSpacing: -0.6,
        paddingHorizontal: 7,
        color: "#00A2E8",
        textAlign: "center",
    },
    textFailLogin: {
        color: "red",
        fontSize: 12,
    },
    btn11: {
        top: 0,
        borderRadius: 25,
        width: 238,
        height: 52, 
        justifyContent: 'left',
        alignItems: 'left',
        marginVertical: 0,
    },
    text11: {
        fontSize: 15,
        letterSpacing: -0.4,
        fontWeight: "500",
        // color: "#fff",
        textAlign: "left",
        width: 92,
        height: 16
    },
});
