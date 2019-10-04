import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { View, Text, ScrollView, Dimensions } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
// import { Permissions } from "react-native-permissions"
import commonStyle from "Styles/commonStyle"
import Container from "Components/UI/Container"
import AddButton from "Components/UI/AddButton"
import { useDispatch, useSelector, connect } from "react-redux"
import Search from "Components/UI/Search"
import MenuButton from "Components/UI/MenuButton"
import Geolocation from 'react-native-geolocation-service'



/* =========================== *\
// Globales Async Function
\* =========================== */
async function getName() {
    const temp = await AsyncStorage.getItem('name')
    disAllReducers.app.setName(temp)
}

async function getNameCity() {
    const temp = await AsyncStorage.getItem('nameCity')
    disAllReducers.app.setNameCity(temp)
}

async function getSource() {
    const clouds = await AsyncStorage.getItem('clouds')
    disAllReducers.app.setSource('clouds')
}
/* =========================== *\
// fin globales async function
\* =========================== */
// ________________________________________________________________________________________________________________________________________
/* =========================== *\
// COMPONENT
\* =========================== */
const HomeScreen = props => {


    componentDidMount = () => {
        // Instead of navigator.geolocation, just use Geolocation.
        if (hasLocationPermission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }
    console.tron.log(getSource())
    /* =========================== *\
    // Globales
    \* =========================== */
    let isSearched = true // Si une recherche a été effectuer
    const { width } = Dimensions.get('window') // Récupère la largeur de l'ecran

    const { dispatch, app: { informations, addedCity } } = props
    const [nameCity, setNameCity] = useState('')
    const [temp, setTemp] = useState('')
    const [error, setError] = useState('')
    const { navigation } = props
    useEffect(() => {
        dispatch({ type: "app/getMeteoInformations" })
    }, [])
    // ________________________________________________________________________________________________________________________________________
    /* =========================== *\
    // recupere le nom d'utilisateur
    \* =========================== */
    const name = useSelector(state => state.app.name)
    // const nameCity = useSelector(state => state.app.nameCity)
    const disAllReducers = useDispatch();
    
    useEffect(() => {
        async function getName() {
            const temp = await AsyncStorage.getItem('name')
            disAllReducers.app.setName(temp)
        }
        getName()
    }, [])
    /* =========================== *\
    // fin du nom d'utilisateur
    \* =========================== */
    // ________________________________________________________________________________________________________________________________________
    /* =========================== *\
    // resultat de la recherche
    \* =========================== */
    function showResult() {
        if (isSearched) {
            return (
                <View style={{flex: 1, width: width}}>
                    <AddButton />
                    <ScrollView style={{ flex: 1, paddingTop: 80 }}>
                        <Text style={{ fontSize: 24, color: "white", alignSelf: "center" }}>{`Ville: ${nameCity}`}</Text>
                        <Text style={{ fontSize: 24, color: "white", alignSelf: "center" }}>{`Température: ${Math.round(temp)} °C`}</Text>
                        {/* <Text style={{ fontSize: 24, color: "white", alignSelf: "center" }}>{`Ville: Valence`}</Text>
                        <Text style={{ fontSize: 24, color: "white", alignSelf: "center" }}>{`Température: 19 °C`}</Text> */}
                        {/* <Image source={() => getSource()} /> */}
                    </ScrollView>
                </View>
            )
            }
    }
    /* =========================== *\
    // fin du resultat
    \* =========================== */
    // ________________________________________________________________________________________________________________________________________
    /* =========================== *\
    // Fonction d'appel API
    \* =========================== */
    async function _getLocationAsync() {
        // let { status } = await Permissions.askAsync(Permissions.LOCATION);
        // if ({status} !== "granted") {
        //     setError("Permission to access location was denied");
        // }
        let location = await Location.getCurrentPositionAsync({});
        // dispatch({ type: "app/getMeteoInformations", payload: location });
    };
    /* =========================== *\
    // fin de la fonction
    \* =========================== */

    useEffect(() => {
        if (informations.main) {
            setNameCity(informations.name)
            setTemp(informations.main.temp)
        }
    })

    useEffect(() => {
        _getLocationAsync();
    });

    // function setNameCity() {

    // }

    async function handleSubmit() {
        if (nameCity !== '') {
            await AsyncStorage.setItem("nameCity", nameCity)
            setNameCity(nameCity)
            // dispatch({ type: "app/getMeteoInformations", payload: nameCity })
            setNameCity('')
        }
        isSearched = true;
        navigation.navigate('Home')
    }

    useEffect(() => {
        getName()
        getNameCity()
    }, []);

    /* =========================== *\
    // Affichage de la scene
    \* =========================== */
    return(
        <Container>
            <View style={[{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)", alignSelf: "stretch", height: 40 }]}>
                <Text style={[commonStyle.label, {textAlign: "center", paddingTop: 7}]}>Bonjour {name}</Text>
            </View>
            {showResult()}
            <Search text="Veuillez entrer une ville" button_text="Voir" mystyle={{ position: "absolute", bottom: 100 }} handle={handleSubmit} method={setNameCity} />
            <MenuButton action={() => props.navigation.openDrawer()} />
        </Container>
    )
    /* =========================== *\
    // fin Affichage
    \* =========================== */
}

HomeScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object
    }).isRequired,
    isSearched: PropTypes.bool,
}

export default connect(({app}) => ({app}))(HomeScreen)