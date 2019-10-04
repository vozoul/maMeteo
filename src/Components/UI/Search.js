import React from "react"
import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native"
const { width } = Dimensions.get('window')

const Search = (props) => {

    return(
        <View style={props.mystyle || { position: "absolute", top: 40}}>
            <TextInput
                style={{ backgroundColor: "white", paddingLeft: 10, marginHorizontal: 20, alignSelf: "stretch", width: width }}
                placeholder={props.text}
                onChangeText={(text) => props.method(text)}
                onSubmitEditing={props.handle}
            />
            <TouchableOpacity
                onPress={props.handle}
                style={{ backgroundColor: "#123456", fontSize: 50, height: 50, width: 50, borderRadius: 50, justifyContent: "center", alignItems: "center", padding: 10, position: "absolute", right: 25, padding: 10 }}
            >
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{props.button_text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Search