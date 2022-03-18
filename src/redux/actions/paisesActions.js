import axios from "axios";

const paisesActions ={
    fetchearPaises: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://restcountries.com/v2/all?fields=name')
            let mapa = res.data.map((rati) => rati.name)
            dispatch({
                type: 'fetchPa',
                payload: mapa
            })
        }
    },

}
export default paisesActions;