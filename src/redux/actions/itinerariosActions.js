import axios from 'axios';
import { ITINERARIES_GET } from './types';

const itinerariesActions = {

  itinerariesPerCity: (id) => {
    return async (dispatch, getState) => {
      /* const res = await axios.get('http://localhost:3001/api/itinerarios?cityId='+id) */
      const res = await axios.get('http://localhost:3001/api/itinerarios/' + id)
      dispatch({ type: ITINERARIES_GET, payload: res.data.response })
      console.log(res.data)
    }
  },
  getOneItinerary: (id) => {
    return async (dispatch, getState) => {
      console.log(id)
      const res = await axios.get('http://localhost:3001/api/itinerarios/' + id)
      console.log(res)
      return res
    }
  },
  LikeAndDislike: (id) => {
    const token = localStorage.getItem("token");
    console.log(id)
    return async () => {
      try {
        let response = await axios.put(
          `http://localhost:3001/api/itinerarios/likes/${id}`, {},
          {
            headers: {
              Authorization: "Bearer " + token
            }
          })
        console.log(response)
        return response
      } catch (err) {
        console.log(err);
      }
    }
  }
}
export default itinerariesActions;