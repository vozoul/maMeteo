import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { ActivityIndicator, StatusBar } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import Container from "Components/UI/Container"

const AuthLoadingScreen = props => {

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('name')
        props.navigation.navigate(userToken ? 'App' : 'Auth')
    }

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("App")
            _bootstrapAsync()
        }, 1500)
    }, [])

    return (
        <Container source={require('Assets/images/splash_bg.jpg')} >
            <StatusBar translucent backgroundColor="transparent" />
            <ActivityIndicator size="large" style={{ paddingBottom: 320, paddingLeft: 20 }} />
        </Container>
    )
}

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired
}

export default AuthLoadingScreen