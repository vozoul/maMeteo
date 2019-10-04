import React from "react";
import PropTypes from "prop-types";
import { View, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export default CustomStatusBar = (props) => {
    const height = Platform.OS !== "ios" ? 0 : getStatusBarHeight(true);
    const { backgroundColor } = props;

    return(
        <View style={{ height, backgroundColor}}>
            <StatusBar {...props} />
        </View>
    )
}

CustomStatusBar.propTypes = {
    backgroundColor: PropTypes.string.isRequired
}
