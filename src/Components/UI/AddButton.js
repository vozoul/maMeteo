import React from "react"
import { TouchableOpacity, Text } from "react-native"

export default AddButton = (props) => {
    return(
        <TouchableOpacity
            onPress={() => {}}
            style={{ backgroundColor: "#10CC21", fontSize: 50, height: 50, width: 50, borderRadius: 50, justifyContent: "center", alignItems: "center", padding: 10, position: "absolute", right: 5, top: 50}}
        >
            <Text style={{fontWeight: "bold", fontSize: 25, color: "white"}}>+</Text>
        </TouchableOpacity>
    )
}