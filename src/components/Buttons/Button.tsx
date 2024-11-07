import React from "react"; 
import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemeProps } from "../../theme";

type CustomButtom = 
VariantProps<ThemeProps, "buttonVariants">

type ComponentProps={
    buttonVariant?: CustomButtom;
    buttonProps?: TouchableOpacityProps;
    text?: React.JSX.Element;
    icon?:React.JSX.Element;
}

const Box = createRestyleComponent<CustomButtom, ThemeProps>([
    createVariant({themeKey: "buttonVariants"})
])


export default function Button({buttonVariant, buttonProps, text, icon}: ComponentProps){
    return(
        <TouchableOpacity {...buttonProps}>
            <Box {...buttonVariant}>
                {text}
                {icon}
            </Box>
        </TouchableOpacity>
    )
}