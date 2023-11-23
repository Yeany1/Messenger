const Stack = createNativeStackNavigator();              
import * as React from "react";                                     
import { NavigationContainer } from "@react-navigation/native";                    
import { createNativeStackNavigator } from "@react-navigation/native-stack";           
import { useFonts } from "expo-font";                        
import Login_Register from "./screens/Login_Register";               
import Register from "./screens/Register";                  
import Register_Phone from "./screens/Register_Phone";          
import Login from "./screens/Login";                        
import Forgot_Password from "./screens/Forgot_Password";  
import TimKiem from "./screens/TimKiem";               
import "zmp-ui/zaui.css";                          
import Containers from './screens/Containers';                
import { Provider } from "react-redux";               
import { store } from "./store";            
import GiamSat from "./screens/GiamSat";
import Audio from "./screens/audio";
import Light_Dark from "./screens/Light_Dark";
import Order from "./screens/Order";
import Order_History from "./screens/Order_History";
import Order_Setting from "./screens/Order_Setting";
const App = () => {                                                         
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);                        
    const [fontsLoaded, error] = useFonts({                            
        "PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),                        
        "AlumniSans-Bold": require("./assets/fonts/AlumniSans-Bold.ttf"),           
        "Almarai-Bold": require("./assets/fonts/Almarai-Bold.ttf"),           
    });                     
                                             
    if (!fontsLoaded && !error) {         
        return null;                    
    }                          
              
     return (
         <Provider store={store}>
             <NavigationContainer>
                 {hideSplashScreen ? (
                     <Stack.Navigator screenOptions={{ headerShown: false }}>
                         <Stack.Screen name="Login_Register" component={Login_Register} options={{ headerShown: false }}/>
                         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                         <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{ headerShown: false }}/>
                         <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
                         <Stack.Screen name="Register_Phone" component={Register_Phone} options={{ headerShown: false }}/>
                         <Stack.Screen name="TimKiem" component={TimKiem} options={{ headerShown: false }}/>
                         <Stack.Screen name="Containers" component={Containers} options={{ headerShown: false }}/>
                         <Stack.Screen name="GiamSat" component={GiamSat} options={{ headerShown: false }}/>
                         <Stack.Screen name="Audio" component={Audio} options={{ headerShown: false }}/>
                         <Stack.Screen name="Light_Dark" component={Light_Dark} options={{ headerShown: false }}/>
                         <Stack.Screen name="Order" component={Order} options={{ headerShown: false }}/>
                         <Stack.Screen name="Order_History" component={Order_History} options={{ headerShown: false }}/>
                         <Stack.Screen name="Order_Setting" component={Order_Setting} options={{ headerShown: false }}/>
                     </Stack.Navigator>
                 ) : null} 
             </NavigationContainer>
         </Provider>
     );
 };
 export default App;