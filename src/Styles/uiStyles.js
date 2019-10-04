import { StyleSheet, Dimensions } from "react-native"
import { colors, alpha } from "./colors"

const { width } = Dimensions.get('window')
const uiStyles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: colors.text_input,
        padding: 20,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    card: {
        position: "relative"
    }
})

export default uiStyles