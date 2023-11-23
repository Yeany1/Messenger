import * as React from "react";                       
import {StyleSheet,View,Text,Pressable,Linking,Dimensions,FlatList,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";        
import { Image } from "expo-image";                 
import { FontFamily, Color } from "../GlobalStyles";               
import { ScrollView } from "react-native";              
const heightScreen = Dimensions.get("window").height;           
const widthScreen = Dimensions.get("window").width;         
const TinNhan = () => {             
  const userList = [];                        
  const renderItem = ({ item }) => (                  
    <Pressable                                          
      style={{ flex: 1, width: "100%", height: 88 }}                         
      onPress={() => {}}                   
    >               
      <View           
        style={{                  
          marginTop: -44,             
          marginLeft: -214,              
          left: "50%",                  
          backgroundColor: "#fff",             
          width: 428,              
          height: 88,            
          top: "50%",                 
          position: "absolute",             
        }}                
      />            
      <View                                                                         
        style={{ marginTop: -23, left: 112, top: "50%", position: "absolute" }}                 
      >                                             
        <View style={{ height: 20, width: 300 }}>                    
          <Text                    
            style={{             
              fontSize: 18,                            
              fontFamily: FontFamily.interRegular,          
              color: "#000",         
              width: 105,             
              textAlign: "left",             
              top: 0,            
              left: 0,            
              height: 20,               
              position: "absolute",         
            }}           
          >              
            Name           
          </Text>              
          <Text             
            style={{              
              right: 0,           
              fontSize: 15,             
              letterSpacing: -0.4,            
              color: "#848d92",            
              width: 33,                               
              fontFamily: FontFamily.robotoRegular,                  
              textAlign: "left",             
              top: 0,                    
              position: "absolute",                 
            }}             
          >           
            Time            
          </Text>       
        </View>                                                     
        <View style={{ marginTop: 9, height: 17, width: 300 }}>         
          <Text         
            style={{              
              fontSize: 19,            
              letterSpacing: -0.6,          
              color: "#8e949a",            
              width: 197,        
              height: 17,     
              left: 0,                                  
              fontFamily: FontFamily.robotoRegular,         
              fontFamily: FontFamily.robotoRegular,        
              textAlign: "left",         
              top: 0,                    
              position: "absolute",         
            }}       
          >                  
            Last mess        
          </Text>         
        </View>         
      </View>       
      <Image              
        style={{              
          marginTop: -30,          
          left: 22,        
          width: 60,           
          height: 60,           
          top: "50%",                 
          position: "absolute",          
        }}                    
        contentFit="cover"                                 
        source={require("../assets/ellipse-13.png")}                
      />            
    </Pressable>         
  );           
  return (                            
    <View style={styles.TinNhan}>                
      <View style={styles.rectanglePosition}>         
        <LinearGradient                                            
          style={[styles.rectangle, styles.rectanglePosition]}         
          locations={[0, 0, 0.48, 0.63, 0.72]}            
          colors={[                          
            "rgba(36, 123, 255, 0.8)",           
            "rgba(37, 124, 255, 0.8)",        
            "rgba(30, 133, 254, 0.8)",       
            "rgba(18, 154, 253, 0.8)",    
            "rgba(3, 180, 250, 0.8)",        
          ]}   
        />                                                               
        <View style={[styles.frameParent, styles.parentFlexBox]}>     
          <View style={styles.parentFlexBox}>     
            <Image                                               
              style={[styles.searchIcon, styles.iconLayout1]}             
              contentFit="cover"                         
              source={require("../assets/search.png")}               
            />                                                  
            <Text style={[styles.tmKim, styles.textTypo]}>           
              {`Tìm kiếm            
`}                       
              {` `}        
            </Text>         
          </View>                                                        
          <View style={[styles.qrCodeParent, styles.parentFlexBox]}>              
            <Image                              
              style={styles.iconLayout}                
              contentFit="cover"                             
              source={require("../assets/qr-code.png")}                         
            />                                        
            <Pressable style={styles.plusMath}>             
              <Image                    
                style={styles.icon}       
                contentFit="cover"                           
                source={require("../assets/plus-math.png")}                 
              />               
            </Pressable>          
          </View>         
        </View>        
      </View>            
      <ScrollView       
        style={{                             
          height: heightScreen - 48,             
          width: widthScreen,               
        }}             
      >              
        <FlatList               
          data={userList}            
          renderItem={renderItem}                         
          keyExtractor={(item) => item.id.toString()}                    
        />               
      </ScrollView>                  
    </View>         
  );            
};                
                                             
const styles = StyleSheet.create({              
  rectanglePosition: {           
    height: 48,         
    top: 0,                
    marginLeft: -214,         
    width: 428,           
    left: "50%",          
  },                      
  parentFlexBox: {             
    alignItems: "center",          
    flexDirection: "row",           
  },                 
  iconLayout1: {        
    width: 25,           
    height: 25,           
  },                 
  textTypo: {                 
    textAlign: "left",                        
    fontFamily: FontFamily.questrialRegular,                
  },            
  bottombarFlexBox: {                
    justifyContent: "center",             
    alignItems: "center",            
  },                     
  textPosition: {           
    top: 2,                   
    position: "absolute",               
  },                 
  newLayout: {           
    height: 17,                
    width: 20,             
    top: 0,                    
    position: "absolute",           
  },                  
  iconLayout: {            
    height: 24,            
    width: 24,            
  },              
  rectangle: {                          
    backgroundColor: "transparent",                 
  },                  
  searchIcon: {               
    height: 25,           
  },            
  tmKim: {               
    fontSize: 16,                          
    color: "rgba(255, 255, 255, 0.6)",                 
    width: 107,               
    height: 16,        
    marginLeft: 20,            
  },           
  icon: {               
    height: "100%",          
    width: "100%",         
  },               
  plusMath: {        
    width: 27,             
    height: 27,           
    marginLeft: 40,            
  },                     
  qrCodeParent: {         
    marginLeft: 140,              
  },                  
  frameParent: {           
    marginLeft: -192,               
    top: 11,                  
    left: "50%",               
    alignItems: "center",              
    position: "absolute",            
  },                
  bottombarChild: {                 
    backgroundColor: "#fafbfd",            
    height: 52,               
    zIndex: 0,              
    width: 428,           
  },              
  tinNhn: {            
    top: 30,             
    fontSize: 14,           
    letterSpacing: -1,            
    color: "#0e94ff",                
    height: 15,               
    width: 57,            
    left: 0,                  
    position: "absolute",             
  },                        
  chatMessageIcon: {            
    top: 4,                  
    left: 11,                
    width: 26,             
    height: 25,                   
    position: "absolute",             
  },                       
  newMessageChild: {              
    borderRadius: 8,                 
    backgroundColor: "#ff4f4f",           
    left: 0,               
  },             
  text: {            
    left: 4,              
    fontSize: 12,               
    letterSpacing: -0.8,             
    color: Color.colorWhite,           
    width: 13,             
    height: 11,              
    textAlign: "left",                            
    fontFamily: FontFamily.questrialRegular,            
  },                  
  newMessage: {             
    left: 26,             
  },                    
  iconmessage: {             
    height: 45,         
    width: 57,         
  },                    
  callListIcon: {           
    marginLeft: 53,          
    height: 25,             
  },                      
  healthDataIcon: {             
    marginLeft: 53,             
  },                
  clockIcon: {                 
    width: 21,                 
    height: 21,                
    marginLeft: 53,               
  },              
  customerIcon: {
    width: 23,           
    height: 23,            
    marginLeft: 53,        
  },                       
  iconmessageParent: {                 
    left: 38,           
    zIndex: 1,                     
    justifyContent: "center",               
    alignItems: "center",              
    flexDirection: "row",             
    top: 2,            
  },                
  bottombar: {            
    bottom: 0,             
    left: 0,                     
    position: "absolute",              
  },             
  TinNhan: {                             
    backgroundColor: Color.colorWhite,                
    flex: 1,             
    height: 926,             
    overflow: "hidden",           
    width: "100%",           
  },          
});           
                            
export default TinNhan;                     
                     