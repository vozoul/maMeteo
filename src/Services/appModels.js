import { requestGet } from "./API/RequestApi"

export const app = {
    state: {
        name: '',
        nameCity: '',
        addedCity: [],
        informations: {}
    },
    reducers: {
        setName(state, name) {
            return { ...state, name }
        },
        setNameCity(state, nameCity) {
            return {...state, nameCity}
        },
        setAddCity(state, addedCity){
            return {...state, addedCity}
        },
        setInformations(state, informations) {
            return { ...state, informations }
        },
        // setSource(state, clouds){
        //     return { ...state, clouds}
        // }
    },
    effects: (dispatch) => ({
        async getMeteoInformations(nameCity) {
            const response = await requestGet('weather', `q=Barcelona`)
            if (response) {
                this.setInformations(response)
            }
        },
        async addCity(nameCity) {
            this.addedCity.push(nameCity)
        }
    })
}

//${nameCity}