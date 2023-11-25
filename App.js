const Stack = createNativeStackNavigator();              
import * as React from "react";                                     
import { NavigationContainer } from "@react-navigation/native";                    
import { createNativeStackNavigator } from "@react-navigation/native-stack";           
import { useFonts } from "expo-font";                        
import Login_Register from "./screens/Register_Login/Login_Register";               
import Register from "./screens/Register_Login/Register";                  
import Register_Phone from "./screens/Register_Login/Register_Phone";          
import Login from "./screens/Register_Login/Login";                        
import Forgot_Password from "./screens/Register_Login/Forgot_Password";  
import TimKiem from "./screens/Menu/TimKiem";               
import "zmp-ui/zaui.css";                          
import Containers from './screens/Containers';                
import { Provider } from "react-redux";               
import { store } from "./store";            
import GiamSat from "./screens/Menu/GiamSat";
import Audio from "./screens/Menu/Audio";
import Light_Dark from "./screens/Menu/Light_Dark";
import Order from "./screens/Order/Order";
import Order_History from "./screens/Order/Order_History";
import Order_Setting from "./screens/Order/Order_Setting";
import Photo from "./screens/Menu/Photo";
import Report from "./screens/Menu/Report";
import Help from "./screens/Menu/Help";
import Privacy from "./screens/Menu/Privacy";
import LegalPolicy from "./screens/Menu/LegalPolicy";
import List_Call from "./screens/List_Call";
import Chats from "./screens/Chats";
import UserChat from "./screens/UserChat";
import VideoCall_Screen from "./screens/VideoCall_Screen";
import Search from "./screens/Search";
import Profile_Screen from "./screens/Profile_Screen";
import Call_Screen from "./screens/Call_Screen";
import AddGoup_Screen from "./screens/AddGoup_Screen";
import YourStory from "./screens/YourStory";
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
                     <Stack.Navigator>
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
                         <Stack.Screen name="Photo" component={Photo} options={{ headerShown: false }}/>
                         <Stack.Screen name="Report" component={Report} options={{ headerShown: false }}/>
                         <Stack.Screen name="Help" component={Help} options={{ headerShown: false }}/>
                         <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }}/>
                         <Stack.Screen name="LegalPolicy" component={LegalPolicy} options={{ headerShown: false }}/>
                         <Stack.Screen name="List_Call" component={List_Call} options={{ headerShown: false }}/>
                         <Stack.Screen name="Chats" component={Chats} options={{ headerShown: false }}/>
                         <Stack.Screen name="UserChat" component={UserChat} options={{ headerShown: false }}/>
                         <Stack.Screen name="VideoCall_Screen" component={VideoCall_Screen} options={{ headerShown: false }}/>
                         <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
                         <Stack.Screen name="Profile_Screen" component={Profile_Screen} options={{ headerShown: false }}/>
                         <Stack.Screen name="Call_Screen" component={Call_Screen} options={{ headerShown: false }}/>
                         <Stack.Screen name="AddGoup_Screen" component={AddGoup_Screen} options={{ headerShown: false }}/>
                        <Stack.Screen name="YourStory" component={YourStory} options={{ headerShown: false }}/>
                     </Stack.Navigator>
                 ) : null} 
             </NavigationContainer>
         </Provider>
     );
 };
 export default App;