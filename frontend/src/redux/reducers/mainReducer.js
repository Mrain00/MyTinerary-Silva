import { combineReducers } from 'redux'; 
import userReducer from './userReducer'
import citiesReducer from './citiesReducer';
import authReducer from './authReducer';
import itinerariesReducers from './itinerariosReducer'
import paisesReducer from './paisesReducer'
import activitiesReducers from './activitiesReducer'
const mainReducer = combineReducers({
    citiesReducer,
    itinerariesReducers,
    authReducer,
    userReducer,
    paisesReducer,
    activitiesReducers
})

export default mainReducer