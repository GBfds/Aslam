import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import React from "react";
import { TextInput as TextInputNative, TextInputProps } from "react-native";
import { ThemeProps } from "../../theme";

type CustomTextInput =
VariantProps<ThemeProps, "inputVariants">

type ComponentProps = {
    textInputVariant?: CustomTextInput;
    textInputProps?: TextInputProps;
}

const Box = createRestyleComponent<CustomTextInput, ThemeProps>([
    createVariant({themeKey: "inputVariants"})
])

export default function TextInput({textInputVariant, textInputProps}: ComponentProps){
    return(
        <Box {...textInputVariant}>
            <TextInputNative style={[{width: "100%", height: "100%"}, textInputProps?.style]} {...textInputProps}/>
        </Box>
    )
}