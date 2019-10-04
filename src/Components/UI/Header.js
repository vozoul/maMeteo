import React from "react"
import { View, ViewPropTypes } from "react-native"
import PropTypes from "prop-types"
import uiStyles from "Styles/uiStyles"
import commonStyle from "Styles/commonStyle"
import MenuButton from "Components/UI/MenuButton"


Header = ({ children }) => {

    return (
        <View style={{flex: 1}}>
            <View style={[{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)", alignSelf: "stretch", height: 40 }]}>
                <Text style={[commonStyle.label, { textAlign: "center", paddingTop: 7 }]}>Bonjour {name}</Text>
            </View>
            {children}
            <MenuButton action={() => props.navigation.openDrawer()} />
        </View>
    )
}

Container.propTypes = {
    source: PropTypes.number,
    statusBarColor: PropTypes.string,
    statusBarContent: PropTypes.string,
    style: ViewPropTypes.style,
    children: PropTypes.node.isRequired
}


export default Container