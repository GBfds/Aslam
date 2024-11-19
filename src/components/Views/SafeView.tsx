import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import Button from "../Buttons/Button";
import theme, { ThemeProps } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { StackType } from "../../routes/Stack.routes";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

type ComponentProps = {
    children?: React.JSX.Element;
    canGoBack?: boolean;
}

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function SafeView({children, canGoBack = false}: ComponentProps){
    const {top, bottom} = useSafeAreaInsets()
    const navigation = useNavigation<StackType>()
    return(
        <SafeAreaView style={{flex:1, marginTop: top, marginBottom: bottom}}>
            {canGoBack && <Box maxWidth={"100%"} height={56} marginHorizontal="s"
                elevation={5} borderRadius={6} marginVertical="s"
                bg="blue_200"
                flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Button
                    buttonVariant={{
                        variant: "small"
                    }}
                    buttonProps={{
                        onPress: ()=> navigation.goBack()
                    }}
                    icon={<AntDesign name="arrowleft" size={24} color={theme.colors.white} />}/>

                    <Text color="white" variant="medium">Empresa</Text>

                    <Button
                    buttonVariant={{
                        variant: "small"
                    }}
                    icon={<Feather name="refresh-ccw" size={24} color={theme.colors.white} />}/>
                </Box>}
                {children}
        </SafeAreaView>
    )
}