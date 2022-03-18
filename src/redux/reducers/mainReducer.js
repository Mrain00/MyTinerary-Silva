import { combineReducers } from 'redux'; 
import userReducer from './userReducer'
import citiesReducer from './citiesReducer';
import authReducer from './authReducer';
import itinerariesReducers from './itinerariosReducer'
import paisesReducer from './paisesReducer'
const mainReducer = combineReducers({
    citiesReducer,
    itinerariesReducers,
    authReducer,
    userReducer,
    paisesReducer
})

export default mainReducer