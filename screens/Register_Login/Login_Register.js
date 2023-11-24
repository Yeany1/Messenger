import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const Login_Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('/assets/bgr22.png')} style={styles.bgr2}/>
      <View  style={styles.bottom}>
      <Pressable  style={styles.btn1} onPress={()=>navigation.navigate('Login')}>
        <Text  style={styles.btntext1}>ĐĂNG NHẬP </Text>
      </Pressable>
      <Pressable  style={styles.btn2} onPress={()=>navigation.navigate('Register')}>
        <Text style={styles.btntext2}>ĐĂNG KÝ </Text>
      </Pressable>
        <Pressable onPress={()=> navigation.navigate('Forgot_Password')}>
            <Text  style={[styles.bottomtext, styles.bottomtextactive]}>Bạn quên mật khẩu ư? </Text>
        </Pressable>
        
      </View>
    </View>
  )
}

export default Login_Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        width: '100%', 
        overflow: 'hidden'
    },
    title: {
        fontSize: 38,
        fontWeight: "600",
        color: "#006dff",
        textAlign: "left",
        paddingTop: 64,
    },
    bgr1: {
        width: '100%',
        height: 250,
        resizeMode: 'contain'
    },
    bgr2: {
        width: '100%',
        height: 140,
        resizeMode: 'contain',
        position: 'absolute',
        top: 200, 
    },
    text1: {
        fontSize: 16,
        letterSpacing: -0.3,
        fontWeight: "600",
        color: "#000",
        textAlign: "left",
        width: 138,
        height: 21
    },
    text2: {
        fontSize: 14,
        letterSpacing: -0.1,
        fontWeight: "500",
        color: "#000",
        textAlign: "center",
        width: 407,
        height: 33,
        opacity: 0.6,
        paddingHorizontal: 40,
    },
    icon: {
        width: "100%",
        height: 9,
        resizeMode: 'contain',
        marginBottom: 40,
        marginTop: 20,
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
        fontWeight: 600,
        color: "#fff",
        textAlign: "center",
        width: 92,
        height: 16
    },
    btn2: {
        borderRadius: 25,
        backgroundColor: "#f2f4f7",
        width: 238,
        height: 52, 
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 6,
    },
    btntext2: {
        fontSize: 15,
        letterSpacing: -0.4,
        fontWeight: 600,
        color: "#000",
        textAlign: "center",
        width: 92,
        height: 16
    },
    bottomtextactive: {
        textDecorationLine: 'underline',
        fontWeight: 600,
    },
    bottomtext: {

        fontSize: 15,
        letterSpacing: -0.6,
        paddingHorizontal: 7,
        color: "#00A2E8",
        textAlign: "center",
    },
    bottom: {
        position: 'absolute',
        bottom: 0
    },
})