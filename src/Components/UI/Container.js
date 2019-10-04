import React from "react"
import { ImageBackground, ViewPropTypes, StatusBar } from "react-native"
import PropTypes from "prop-types"
import uiStyles from "Styles/uiStyles"
import CustomStatusBar from "Components/UI/CustomStatusBar"


Container = ({ style, children, source, statusBarColor, statusBarContent }) => {

    const initialSource = require('Assets/images/bg.jpg')

    return (
        <ImageBackground style={style || uiStyles.main_container} source={source || initialSource}>
            <CustomStatusBar
                backgroundColor={statusBarColor || "black"}
                barStyle={statusBarContent || "light-content"}
                translucent = {false}
            />
            {children}
        </ImageBackground>
    )
}

Container.propTypes = {
    source: PropTypes.number,
    statusBarColor: PropTypes.string,
    statusBarContent: PropTypes.string,
    style: ViewPropTypes.style,
    children: PropTypes.node.isRequired
}

ImageBackground.defaultPorps = {
    style: null
}

export default Container