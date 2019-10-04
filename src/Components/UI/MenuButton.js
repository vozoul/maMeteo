import React from "react"
import { TouchableOpacity, Text, Image } from "react-native"

export default AddButton = (props) => {

    return (
        <TouchableOpacity
            onPress={props.action}
            style={{ backgroundColor: "#FFF", fontSize: 50, height: 50, width: 50, borderRadius: 50, justifyContent: "center", alignItems: "center", padding: 10, position: "absolute", left: 15, top: 12 }}
        >
            <Image source={require('Assets/images/burger.png')} style={{width: 20, height: 20}} />
        </TouchableOpacity>
    )
}