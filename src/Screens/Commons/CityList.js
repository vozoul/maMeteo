import React from "react"
import { FlatList, Text, View, ScrollView } from "react-native"
import Container from "Components/UI/Container"
import CustomListedComponent from "Components/UI/CustomListedComponent"
import MenuButton from "Components/UI/MenuButton"
import { useDispatch, useSelector, connect } from "react-redux"
import commonStyle from "Styles/commonStyle"
import { DATA } from "Services/API/example"

const CityList = (props) => {
    const app = useSelector(state => state.app)
    const disAllReducers = useDispatch();

    return(
        <Container>
            <View style={[{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)", alignSelf: "stretch", height: 40 }]}>
                <Text style={[commonStyle.label, { textAlign: "center", paddingTop: 7 }]}>Shown Cities</Text>
            </View>
            <ScrollView>
                <FlatList
                    data={DATA}
                    style={{ flex: 1, paddingTop: 80}}
                    renderItem={(item) => <CustomListedComponent {...item} />}
                />
            </ScrollView>
            <MenuButton action={() => props.navigation.openDrawer()} />
        </Container>
    )
}

export default CityList