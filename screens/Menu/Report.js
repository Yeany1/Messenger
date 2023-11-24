import {Pressable,StyleSheet,Text,View,TextInput,Image, Switch} from "react-native";
import React, {useState, useEffect} from "react";
import { LinearGradient } from "expo-linear-gradient";
const Report = ({navigation}) => {
    const [isEnabled1, setIsEnabled1] = useState(
        localStorage.getItem('switch1') === 'true'
      );
    const toggleSwitch1 = () => {
            const newValue = !isEnabled1;
            setIsEnabled1(newValue);
            localStorage.setItem('switch1', newValue.toString());
        };
    useEffect(() => {
        // Khôi phục giá trị từ localStorage khi trang web được tải lại
        const savedSwitch1 = localStorage.getItem('switch1');
        if (savedSwitch1) {
          setIsEnabled1(savedSwitch1 === 'true');
        }
}, []);
    return (
        <View style={styles.contaiter}>
            <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <View style={styles.btn1}>
                    <Image style={styles.icon} source={require("/assets/x.png")}/>
                    <Image style={styles.icon2} source={require("/assets/report.png")}/>
                    <Text style={styles.text}>Quay lại nơi bạn gặp vấn đề rồi</Text>
                    <Text style={styles.text}>lắc thiết bị</Text>
                </View>
            </Pressable>

            <View style={styles.btntxt2}>
                <Text style={styles.txt2}>Hãy lắc thiết bị tại nơi bạn gặp vấn đề để</Text>
                <Text style={styles.txt2}>chúng tôi có thể tìm và khắc phục nhanh hơn.</Text>
            </View>
            
            <View style={styles.body}>
                <Text style={styles.text1}>Lắc thiết bị để báo cáo sự cố</Text>
                <Switch
                        style={styles.switch}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
            </View>

            <Pressable  style={styles.btn11} onPress={() => navigation.goBack()}>
                <Text  style={styles.btntext1}>Quay lại và lắc thiết bị</Text>
            </Pressable>

            

            
            
            

        </View>
    );
};

export default Report;

const styles = StyleSheet.create({
    contaiter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        width: "100%",
        overflow: "hidden",
    },
    switch: {
        position: "absolute",
        left: 310,
        // top: 50,
    },
    header: {
        width: "100%",
    },
    header2: {},
    btn11: {
        borderRadius: 20,
        backgroundColor: "#0092ff",
        width: '90%',
        height: 52, 
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 6,
        top: 250,
    },
    btntext1: {
        top: -5,
        fontSize: 20,
        letterSpacing: -0.4,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: 16,
    },
    icon: {
        width: 40,
        height: 40,
        left: 160,
        backgroundColor: "#F2F2F2",
    },
    icon2: {
        width: 100,
        height: 100,
        left: 0,
        backgroundColor: "#F2F2F2",
        marginBottom: 20,
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
        marginLeft: 0,
    },
    text1: {
        fontSize: 18,
        fontWeight: 600 ,
        // color: "#000000",
        width: "90%",
        textAlign: "left",
    },
    btn1: {
        width: "100%",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 60,
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
        textAlign: "center",
        top: 160,
    },
    body: {
        marginTop: 5,
        width: "95%",
        // alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#blue",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        top: 220,
    },
    body2: {
        marginTop: 20,
        width: "85%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#fff",
    },
});

