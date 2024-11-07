import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import SafeView from "../../components/Views/SafeView";

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function Growth(){
    return(
        <SafeView>
            <Box flex={1} justifyContent="center" alignItems="center">
                <Text>Crescimento</Text>
            </Box>
        </SafeView>
    )
}