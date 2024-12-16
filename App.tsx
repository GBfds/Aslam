import 'react-native-gesture-handler';
import AuthProvider from './src/contexts/AuthContext';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import {useFonts, JosefinSans_700Bold} from "@expo-google-fonts/josefin-sans"
import {Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_500Medium} from "@expo-google-fonts/roboto"
import FlatLists from './src/screens/LoggedArea/FlatLists';

export default function App() {
  const [fontsLoad] = useFonts({
    JosefinSans_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_500Medium
  })

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.blue_100} barStyle={'dark-content'}/>
        {fontsLoad ? <FlatLists/>: <></>}
      </ThemeProvider>
    </AuthProvider>
  );
}

