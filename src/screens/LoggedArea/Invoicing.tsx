import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import SafeView from "../../components/Views/SafeView";
import {ProgressView} from "@react-native-community/progress-view";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function Invoicing(){
    return(
        <SafeView canGoBack={true}>
            <Box flex={1} justifyContent="center" alignItems="center">
            
            </Box>
        </SafeView>
    )
}