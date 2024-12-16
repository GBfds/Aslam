import React from "react";
import { createBox, createText } from "@shopify/restyle";
import theme, { ThemeProps } from "../../theme";
import SafeView from "../../components/Views/SafeView";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import DbTemp from "../../static/DbTemp";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { StackType } from "../../routes/Stack.routes";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function Cash(){

    const navigation = useNavigation<StackType>()
    return(
        <SafeView canGoBack={true}>
            <Box flex={1} alignItems="center">
                <Text variant="title">Periodo Selecionado:</Text>

                <Box width={"96%"} minHeight={56} p="m"
                elevation={5} borderRadius={6} marginVertical="s"
                bg="gray"
                flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Button
                    buttonVariant={{
                        variant: "small"
                    }}
                    buttonProps={{
                        style: Style.ButtonDateSelect
                    }}
                    text={<Text color="white" variant="medium">09/11/2024</Text>}/>


                    <Button
                    buttonVariant={{
                        variant: "small"
                    }}
                    buttonProps={{
                        style: Style.ButtonDateSelect
                    }}
                    text={<Text color="white" variant="medium">09/11/2024</Text>}/>
                </Box>


                <SafeAreaView 
                    style={Style.SafeContainer}>
                    <FlatList
                    data={DbTemp.caixa}
                    renderItem={({item})=> 
                        <Box width={'auto'} minHeight={150} marginHorizontal="m"
                        borderRadius={12} p="s"
                        bg="gray" elevation={5} marginVertical="s">
                            <Box flexDirection="row" justifyContent="space-between" paddingHorizontal="s">
                                <Text variant="medium">Caixa</Text>
                                <Text variant="medium">Valor</Text>
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" bg="white" paddingHorizontal="s">
                                <Text>caixaInicial</Text>
                                <Text>{item.caixaInicial}</Text>
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" paddingHorizontal="s">
                                <Text>dinheiro</Text>
                                <Text>{item.dinheiro}</Text>
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" bg="white" paddingHorizontal="s">
                                <Text>cheque</Text>
                                <Text>{item.cheque}</Text>
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" paddingHorizontal="s">
                                <Text>cartaoDeC</Text>
                                <Text>{item.cartaoDeC}</Text>
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" bg="white" paddingHorizontal="s">
                                <Text>cartaoDeD</Text>
                                <Text>{item.cartaoDeD}</Text>
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" paddingHorizontal="s">
                                <Text>transferencia</Text>
                                <Text>{item.transferencia}</Text>
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" bg="white" paddingHorizontal="s">
                                <Text>saldoBruto</Text>
                                <Text>{item.saldoBruto}</Text>
                            </Box>
                            <Box flexDirection="row" justifyContent="space-between" paddingHorizontal="s">
                                <Text>saldoLiquido</Text>
                                <Text>{item.saldoLiquido}</Text>
                            </Box>
                        </Box>
                        }
                        keyExtractor={(item)=> item.id}/>
                </SafeAreaView>
            </Box>
        </SafeView>
    )
}

const Style = StyleSheet.create({
    SafeContainer: {
        width: "100%",
    },
    ButtonDateSelect: {
        backgroundColor: theme.colors.blue_200,
        borderRadius: 8
    }
})