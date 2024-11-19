import React, { useContext, useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { createBox, createText } from "@shopify/restyle";
import theme, { ThemeProps } from "../../theme";
import SafeView from "../../components/Views/SafeView";
import Button from "../../components/Buttons/Button";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { StackType } from "../../routes/Stack.routes";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function HomeScreen(){
    const {SignOut} = useContext(AuthContext)
    const [showModalLogout, setShowModalLogout] = useState(false)
    const navigation = useNavigation<StackType>()
    return(
        <SafeView>
            <Box flex={1} padding="m"
            flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                <Modal
                animationType="slide"
                transparent={true}
                visible={showModalLogout}
                onRequestClose={()=>(
                    setShowModalLogout(!showModalLogout)
                )}>
                    <Box flex={1} justifyContent="center" alignItems="center">
                        <Box backgroundColor="blue_10" 
                        elevation={5} borderRadius={8}
                        width={"70%"} minHeight={200}
                        justifyContent="center" alignItems="center">
                            <Text marginBottom="l">Sair da conta?</Text>

                            <Box flexDirection="row">
                                <Button 
                                buttonVariant={{
                                    variant: "small"
                                }}
                                buttonProps={{
                                    style: [Style.buttonLogout, {backgroundColor: theme.colors.blue_10}],
                                    onPress: ()=> SignOut()
                                }}
                                text={<Text>Sair</Text>}/>
                                <Button 
                                buttonVariant={{
                                    variant: "small"
                                }}
                                buttonProps={{
                                    style: [Style.buttonLogout, {backgroundColor: theme.colors.blue_200}],
                                    onPress: ()=> setShowModalLogout(!showModalLogout)
                                }}
                                text={<Text>Voltar</Text>}/>
                            </Box>
                        </Box>
                    </Box>
                </Modal>

                <Box width={"100%"} minHeight={40}
                justifyContent="center" alignItems="center">
                    <Text variant="large">Aslam</Text>
                </Box>
                <Button
                buttonVariant={{
                    variant: "smallWithIcon"
                }}
                buttonProps={{
                    style: Style.ButtonOptions,
                    onPress: ()=> navigation.navigate("Growth")
                }}
                text={<Text marginBottom="s">Crescimento</Text>}
                icon={<Entypo name="bar-graph" size={24} color={theme.colors.black} />}/>

                <Button
                buttonVariant={{
                    variant: "smallWithIcon"
                }}
                buttonProps={{
                    style: Style.ButtonOptions,
                    onPress: ()=> navigation.navigate("Invoicing")
                }}
                text={<Text marginBottom="s">Faturamento</Text>}
                icon={<FontAwesome6 name="money-bill-trend-up" size={24} color={theme.colors.black} />}/>
                
                <Button
                buttonVariant={{
                    variant: "smallWithIcon"
                }}
                buttonProps={{
                    style: Style.ButtonOptions,
                    onPress: ()=> navigation.navigate("Cash")
                }}
                text={<Text marginBottom="s">Caixa</Text>}
                icon={<Ionicons name="cash" size={24} color={theme.colors.black} />}/>
                
                <Button
                buttonVariant={{
                    variant: "smallWithIcon"
                }}
                buttonProps={{
                    style: Style.ButtonOptions,
                    onPress: ()=> setShowModalLogout(!showModalLogout)
                }}
                text={<Text marginBottom="s">Sair</Text>}
                icon={<MaterialCommunityIcons name="logout" size={24} color={theme.colors.black} />}/>
            </Box>
        </SafeView>
    )
}

const Style = StyleSheet.create({
    ButtonOptions: {
        backgroundColor: theme.colors.blue_100,
        borderRadius: 12,
        marginVertical: 8,
        elevation: 5
    },
    buttonLogout:{
        borderRadius: 8,
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: theme.colors.blue_100,
        elevation: 5
    }
})