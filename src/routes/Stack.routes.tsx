import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeScreen from "../screens/LoggedArea/HomeScreen";
import Growth from "../screens/LoggedArea/Growth";
import Invoicing from "../screens/LoggedArea/Invoicing";
import Cash from "../screens/LoggedArea/Cash";

export type StackNavigation = {
    HomeScreen: undefined;
    Growth: undefined;
    Invoicing: undefined;
    Cash: undefined;
}

export type StackType = NativeStackNavigationProp<StackNavigation>

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}/>
            <Stack.Screen
            name="Growth"
            component={Growth}/>
            <Stack.Screen
            name="Invoicing"
            component={Invoicing}/>
            <Stack.Screen
            name="Cash"
            component={Cash}/>
        </Stack.Navigator>
    )
}