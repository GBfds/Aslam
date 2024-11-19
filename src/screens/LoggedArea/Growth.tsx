import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { createBox, createText } from "@shopify/restyle";
import theme, { ThemeProps } from "../../theme";
import SafeView from "../../components/Views/SafeView";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function Growth(){
    return(
        <SafeView canGoBack={true}>
            <ScrollView >
            <Box flex={1} alignItems="center">
                <Box width={"96%"} justifyContent="center" alignItems="center"
                bg="gray" borderRadius={8} marginVertical="m"
                elevation={5}>
                    <Box width={"96%"} justifyContent="center" alignItems="center"
                    bg="blue_200" borderRadius={4}
                    marginVertical="m" padding="s">
                        <Text color="white">Crescimento</Text>    
                    </Box>

                    <Box width={"90%"} minHeight={20}
                    flexDirection="row" justifyContent="space-around"
                    margin="s" p="s">
                        <Box width={"45%"} alignItems="center" >
                            <FontAwesome6 style={Style.icons} name="users" size={24} color={theme.colors.black} />
                            <Text>Todos os Clientes</Text>
                            <Text>2500</Text>
                        </Box>
                        <Box width={"45%"} alignItems="center" >
                            <FontAwesome5 style={Style.icons} name="user-plus" size={24} color={theme.colors.blue_600} />
                            <Text>Novos clientes</Text>
                            <Text>452</Text>
                        </Box>
                    </Box>

                    <Box width={"90%"} minHeight={20}
                    flexDirection="row" justifyContent="space-around"
                    margin="s" p="s">
                        <Box width={"45%"} alignItems="center" >
                            <AntDesign style={Style.icons} name="closecircle" size={24} color={theme.colors.red_800} />
                            <Text>Cancelados</Text>
                            <Text>124</Text>
                        </Box>
                        <Box width={"45%"} alignItems="center" >
                            <MaterialCommunityIcons style={Style.icons} name="finance" size={24} color={theme.colors.green_700} />
                            <Text>Crescimento</Text>
                            <Text>328</Text>
                        </Box>
                    </Box>

                    <Box width={"96%"} justifyContent="center" alignItems="center"
                    bg="blue_200" borderRadius={4}
                    marginVertical="m" padding="s">
                        <Text color="white">Detalhamento dos Clientes</Text>    
                    </Box>


                    <Box width={"96%"} justifyContent="center" alignItems="center"
                    bg="blue_200" borderRadius={4}
                    marginVertical="m" padding="s">
                        <Text color="white">Clientes Pagos</Text>    
                    </Box>

                    <Box width={"96%"} justifyContent="center" alignItems="center" 
                    padding="s" marginBottom="m">
                        <MaterialIcons style={Style.icons} name="payments" size={42} color={theme.colors.orange_500} />
                        <Text>Mês Atual</Text>    
                        <Text variant="title">R$ 2568.00</Text>    
                        <Text>Mês Anterior</Text>    
                        <Text variant="title">R$ 2694.06</Text>    
                        <Text>Mês do Ano Anterior</Text>    
                        <Text variant="title">R$ 1984.76</Text>    
                    </Box>
                </Box>
            </Box>
            </ScrollView>
        </SafeView>
    )
}

const Style = StyleSheet.create({
    icons:{
        marginVertical: 8
    },
})