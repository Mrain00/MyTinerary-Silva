import axios from 'axios';
const activitiesActions = {


    activityPerItinerary: (id) => {
        console.log(id)
        return async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/itineraryActivities/' + id)
                return { success: true, response: res.data.response }
            } catch (error) {
                console.log(error)
            }
        }
    },
}
export default activitiesActions;