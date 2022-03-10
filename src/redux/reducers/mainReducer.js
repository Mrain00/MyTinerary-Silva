import { combineReducers } from 'redux'; 

import citiesReducer from './citiesReducer';
import authReducer from './authReducer';
import itinerariesReducers from './itinerariosReducer'
const mainReducer = combineReducers({
    citiesReducer,
    itinerariesReducers,
    authReducer
})

export default mainReducer