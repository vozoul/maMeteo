import React from "react"
import PropTypes from "prop-types"
import { StatusBar, View, Text } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

const IntroScreen = props => {
    React.useEffect(()=> {
        async function getName() {
            const temp = await AsyncStorage.getItem("name")
            setName(temp)
        }
        getName()
    }, [])
    
    React.useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("App")
        }, 3000)
    }, [])

    const [name, setName] = React.useState('')

    return(
        <View>
            <Text>{`${name}`}</Text>
        </View>
    )

}

IntroScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired
}

export default IntroScreen