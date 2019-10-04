import React, { Component } from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from "Screens/Commons/HomeScreen"
import IntroFormScreen from "Screens/Commons/IntroFormScreen"
import AuthLoadingScreen from "Screens/Commons/AuthLoadingScreen"
import CityList from "Screens/Commons/CityList"
import About from "Screens/Commons/About"

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('Assets/images/icon.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    }
})

const AuthStack = createStackNavigator({
    SignIn: {
        screen: IntroFormScreen,
        navigationOptions: {
            header: null
        }
    },
    Welcome: {
        screen: About,
        navigationOptions: {
            header: null
        }
    }
})

const AppDrawer = createDrawerNavigator({
    Auth: {
        screen: AuthStack,
        navigationOptions: {
            drawerLabel: () => null,
            header: null
        }
    },
    App: {
        screen: AppStack,
        navigationOptions: {
            drawerLabel: "Home",
            header: null
        }
    },
    CityList:{
        screen: CityList,
        navigationOptions: {
            drawerLabel: "Villes observées",
            header: null
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(
    createStackNavigator({
        AuthLoading: {
            screen: AuthLoadingScreen,
            navigationOptions: {
                drawerLabel: () => null,
                header: null
            }
        },
        App: {
            screen: AppDrawer,
            navigationOptions: {
                drawerLabel: "Home",
                header: null
            }
        },
        Auth: {
            screen: AuthStack,
            navigationOptions: {
                drawerLabel: () => null,
                header: null
            }
        },
        About: {
            screen: About,
            navigationOptions: {
                header: null
            }
        }
    }, {
            initialRouteName: "AuthLoading",
            unmountInactiveRoutes: true
    }
    )
)