import {Pressable,StyleSheet,Text,View,TextInput,Image, Switch} from "react-native";
import React, {useState, useEffect} from "react";
import { LinearGradient } from "expo-linear-gradient";
const  Order_Setting= ({navigation}) => {
    const [isEnabled1, setIsEnabled1] = useState(
        localStorage.getItem('switch1') === 'true'
      );
      const [isEnabled2, setIsEnabled2] = useState(
        localStorage.getItem('switch2') === 'true'
      );
      const [isEnabled3, setIsEnabled3] = useState(
        localStorage.getItem('switch3') === 'true'
      );
    
      const toggleSwitch1 = () => {
        const newValue = !isEnabled1;
        setIsEnabled1(newValue);
        localStorage.setItem('switch1', newValue.toString());
      };
    
      const toggleSwitch2 = () => {
        const newValue = !isEnabled2;
        setIsEnabled2(newValue);
        localStorage.setItem('switch2', newValue.toString());
      };
    
      const toggleSwitch3 = () => {
        const newValue = !isEnabled3;
        setIsEnabled3(newValue);
        localStorage.setItem('switch3', newValue.toString());
      };
    
      useEffect(() => {
        // Khôi phục giá trị từ localStorage khi trang web được tải lại
        const savedSwitch1 = localStorage.getItem('switch1');
        if (savedSwitch1) {
          setIsEnabled1(savedSwitch1 === 'true');
        }
    
        const savedSwitch2 = localStorage.getItem('switch2');
        if (savedSwitch2) {
          setIsEnabled2(savedSwitch2 === 'true');
        }
    
        const savedSwitch3 = localStorage.getItem('switch3');
        if (savedSwitch3) {
          setIsEnabled3(savedSwitch3 === 'true');
        }
      }, []);
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
                <Switch
                        style={styles.switch}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
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

