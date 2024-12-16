import React, { useRef, useState } from "react";
import { FlatList, LayoutChangeEvent, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const categores = [
    {id: "1",
        name: "eletrico"
    },
    {id: "2",
        name: "coisas"
    },
    {id: "3",
        name: "locas"
    }
]

export default function FlatLists(){
    const [visible, setVisible] = useState(false)
    const [top, setTop] = useState(0)

    const buttonRef = useRef<View>(null)
    return(
        <View style={Styles.container} >
            <Modal
            transparent={true}
            visible={visible}
            onRequestClose={()=> {
                setVisible(false)
            }}>
                <View style={[Styles.modalContainer, {top: top}]} >
                    <FlatList
                    style={Styles.FlatList}
                    data={categores}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> (
                        <TouchableOpacity style={Styles.componentList} onPress={()=> setVisible(false)}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}/>
                </View>
            </Modal>
            
            <View style={Styles.mainContainer} ref={buttonRef}
        onLayout={(event: LayoutChangeEvent)=>{
            const layout = event.nativeEvent.layout
            const topOffset = layout.y
            const heightOfComponent = layout.height

            setTop(topOffset + heightOfComponent)
        }}>
            <TouchableOpacity style={Styles.button} onPress={()=> setVisible(true)}>
                <Text>List</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    button:{
        backgroundColor: "#d8d7fa",
        elevation: 5,
        justifyContent:"center",
        alignItems: "center",
        width: "90%",
        height: 40
    },
    buttonSelected:{
        position: "absolute",
        backgroundColor: "#8275ee",
        width: "90%",
        height: 40
    },
    mainContainer:{
        width: "100%",
        justifyContent:"center",
        alignItems: "center",
    },
    modalContainer:{
        justifyContent:"center",
        alignItems: "center",
    },
    FlatList:{
        width: "80%"
    },
    componentList:{
        flex: 1,
        height: 36,
        marginVertical: 4,
        backgroundColor: "#8275ee"
    },
})