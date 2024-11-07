import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignIn from "../screens/Login/SignIn";
import StackRoutes from "./Stack.routes";


export default function Routes(){
    const {loading, isAuthenticated} = useContext(AuthContext)

    return(
        <NavigationContainer>
        <SafeAreaProvider>
            {isAuthenticated ? <StackRoutes/> : <SignIn/>}
        </SafeAreaProvider>
        </NavigationContainer> 
    )
}