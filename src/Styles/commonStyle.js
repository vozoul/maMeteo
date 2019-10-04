import { StyleSheet, Dimensions } from "react-native"
import { colors, alpha } from "Styles/colors"

const { width } = Dimensions.get('window')
const commonStyle = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    main_container: {
        flex: 1
    },
    label: {
        color: "white",
        fontSize: 18
    },
    textInput: {
        width: width,
        backgroundColor: "white",
        height: 40,
        paddingLeft: 6,
        borderWidth: 1,
        borderColor: "grey"
    },
    textStyle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    form_container: {
        position: "absolute",
        top: 0
    },
    title: {
        color: "#bdecff",
        fontSize: 18,
        fontWeight: "bold"
    },
    wrapper: {
        position: "absolute",
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: alpha("#012345", 40)
    }
})

export default commonStyle