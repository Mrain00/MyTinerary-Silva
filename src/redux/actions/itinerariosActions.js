import axios from 'axios';
import { ITINERARIES_GET } from './types';

const itinerariesActions = {

itinerariesPerCity: (id) => {
    console.log(id);
    return async(dispatch, getState)=>{
    /* const res = await axios.get('http://localhost:4000/api/itinerarios?cityId='+id) */
    const res = await axios.get('http://localhost:4000/api/itinerarios/'+id)
    dispatch({type: ITINERARIES_GET, payload:res.data.response})
    console.log(res.data)
    }
},
 
}

export default itinerariesActions