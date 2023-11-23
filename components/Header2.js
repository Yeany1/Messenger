import { StyleSheet, Text, View } from "react-native";           
import React from "react";                                 
import { LinearGradient } from "expo-linear-gradient";              
                                    
const Header2 = () => {                 
    return (                   
        <LinearGradient                
            style={{                
                zIndex: 1,               
                flex: 1,              
                width: "100%",                 
                height: 55,                          
                backgroundColor: "transparent",                      
                position: "fixed",                        
                top: 40,                    
                left: 0,              
            }}                                        
            locations={[0, 0, 0.48, 0.63, 0.72]}                                 
            colors={["#247bff", "#257cff", "#1e85fe", "#129afd", "#03b4fa"]}                  
            useAngle={true}                   
            angle={90}                    
        />                     
    );                     
};                     
                              
export default Header2;                   
                                          
const styles = StyleSheet.create({});                   
                                 