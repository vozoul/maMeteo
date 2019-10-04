import React from "react"
import { TouchableOpacity, Text, Dimensions, Image } from "react-native"

const { width } = Dimensions.get('window')


export default CustomListedComponent = (props) => {
    return (
        <TouchableOpacity
            style={{ backgroundColor: "rgba(0,0,0, 0.5)", width: width, borderSize: 1, borderColor: "blue", marginVertical: 2, justifyContent: "center", paddingBottom: 15 }}
            onPress={() => {}}
        >   
            
            <Text style={{ color: "white" }}><Image source={require('Assets/icons/sun.png')} style={{ width: 30, height: 30 }} />{props.item.name}</Text>
        </TouchableOpacity>
    )
}