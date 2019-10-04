import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import PropTypes from "prop-types"
import { connect, useDispatch } from "react-redux"
import Container from "Components/UI/Container"
import Search from "Components/UI/Search"

const { width } = Dimensions.get('window')

const IntroFormScreen = props => {
    async function handleSubmit() {
        if(name !== ''){
            await AsyncStorage.setItem("name", name)
            dispatch.app.setName(name)
            props.navigation.navigate("Home")
        }
    }
    
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const { navigation } = props
    
    return (
        <Container>
            <Search text="Entrez votre nom" button_text="OK" mystyle={{ position: "absolute", bottom: 100 }} handle={handleSubmit} method={setName} />
        </Container>
    )
}

IntroFormScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired
}

const mapStateToProps = state => ({
    name: state.name
})

export default connect(mapStateToProps)(IntroFormScreen)