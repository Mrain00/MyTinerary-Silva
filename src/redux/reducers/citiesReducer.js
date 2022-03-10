
const initialState = { /* declaro el estado inicial */
    cities:[],
    auxiliar:[],
    city:{},
    filteredCities:[]
}

const citiesReducer = (state = initialState, action)=>{ /* recibe un "state" y si no lo recibe va a tener "initialState"*/
    switch(action.type) {
        case 'fetch':
            return{
                ...state,
                cities: action.payload,
                filteredCities: action.payload,
            }
        case 'fetchOne':
            return {
                ...state,
                city: action.payload,
                auxiliar: action.payload
            }
        case 'delete':
            return{
                ...state,
                cities: action.payload
            }
        case 'chargeCities':
            let cities= [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities,
                auxiliar: [...cities]
            }
        case 'filtro':
            const {value, citiesArray} = action.payload
            let filtroArr = citiesArray.filter(data => data.city.toLowerCase().startsWith(value.toLowerCase().trim()))
            return{
                ...state,
                filteredCities: filtroArr
            }                    
            default:
                return state
    }
}   
export default citiesReducer;