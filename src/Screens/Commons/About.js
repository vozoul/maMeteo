import React, { Component } from "react"
import { View, Text } from "react-native"
import Container from "Components/UI/Container"
import commonStyle from "Styles/commonStyle"
import MenuButton from "Components/UI/MenuButton"

export default About = (props) => {

    return (
        <Container>
            <View style={[{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)", alignSelf: "stretch", height: 40 }]}>
                <Text style={[commonStyle.label, { textAlign: "center", paddingTop: 7 }]}>About US</Text>
            </View>
            <View style={{ flex: 1, margin: 30, justifyContent: "center" }}>
                <Text style={{color: "white"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eros vitae neque commodo mattis ut a ipsum. Nulla congue dui nisl, in ullamcorper ipsum elementum eu.
                </Text>
            </View>
            <MenuButton action={() => props.navigation.openDrawer()} />
        </Container>
    )
}