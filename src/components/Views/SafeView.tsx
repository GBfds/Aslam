import React, { ReactNode } from "react";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";

type ComponentProps = {
    children?: React.JSX.Element;
}

export default function SafeView({children}: ComponentProps){
    const {top, bottom} = useSafeAreaInsets()
    return(
        <SafeAreaView style={{flex:1, marginTop: top, marginBottom: bottom}}>
            {children}
        </SafeAreaView>
    )
}