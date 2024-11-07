import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { createBox, createText } from "@shopify/restyle";
import {useForm, Controller} from "react-hook-form";
import theme, { ThemeProps } from "../../theme";
import Button from "../../components/Buttons/Button";
import TextInput from "../../components/Inputs/TextInput";
import { AuthContext } from "../../contexts/AuthContext";
import SafeView from "../../components/Views/SafeView";

type FormData = {
    email: string;
    password: string;
}

const Box = createBox<ThemeProps>()
const Text = createText<ThemeProps>()

export default function SignIn(){
    const {SignIn} = useContext(AuthContext)
    const {control, handleSubmit, formState:{errors}} = useForm<FormData>()
    const [showFormErrors, setShowFormErrors] = useState(false)

    useEffect(()=>{
        setShowFormErrors(true)
    },[errors])

    async function Submit(){
        SignIn()
    }
    return(
        <SafeView>
        <Box flex={1} justifyContent="center" alignItems="center">
            <Box 
            minHeight={250} width={"90%"}
            bg="blue_100"
            borderRadius={12} p="m"
            justifyContent="center" alignItems="center">
                {showFormErrors && <Text>{errors.email?.message}</Text>}
                <Controller
                name="email"
                rules={{
                    required: "Email obrigatoria",
                    pattern:{
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Email invalido",
                    }
                }}
                control={control}
                render={({field: {value, onChange}})=>(
                    <TextInput
                    textInputVariant={{
                        variant: "ligth",
                    }}
                    textInputProps={{
                        placeholder: "Email",
                        value: value,
                        onChangeText: onChange
                    }}/>
                )}/>

                {showFormErrors && <Text>{errors?.password?.message}</Text>}
                <Controller
                name="password"
                rules={{
                    required: "Senha obrigatoria"
                }}
                control={control}
                render={({field: {value, onChange}})=>(
                    <TextInput
                    textInputVariant={{
                        variant: "ligth",
                    }}
                    textInputProps={{
                        placeholder: "Senha",
                        value: value,
                        onChangeText: onChange
                    }}/>
                )}/>

                <Button
                buttonVariant={{
                    variant: "medium",
                }}
                buttonProps={{
                    style: Style.ButtonSignIn,
                    onPress: handleSubmit(Submit)
                }}
                text={<Text>Acessar</Text>}
                />
            </Box>
        </Box>
        </SafeView>
    )
}

const Style = StyleSheet.create({
    ButtonSignIn:{
        backgroundColor: theme.colors.blue_200,
        borderRadius: 8
    },
    TextInput: {
        backgroundColor: theme.colors.blue_10,
    }
})