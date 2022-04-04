import axios from 'axios';

const userActions = {

    signUpUsers: (userData) => {
        console.log(userData)
        return async (dispatch, getState) => {

            const res = await axios.post('https://mytinerary-silva.herokuapp.com/api/auth/signUp', { userData })
            console.log(res)
            dispatch({type: 'message', 
                       payload: {view: true,
                                 message: res.data.message,
                                 success: res.data.success}});
        }
    },

    signInUser: (logedUser) => {
        console.log(logedUser)
        return async (dispatch, getState) => {
            const user = await axios.post('https://mytinerary-silva.herokuapp.com/api/auth/signIn', { logedUser })
            /* console.log(user) */
            if(user.data.success){
                localStorage.setItem("token",user.data.response.token)
             /* console.log(user.data.success)  */  
            dispatch({type: 'user', payload: user.data.response.userData});
            
            }
            dispatch({type: 'message',
            payload: {view: true,
                      message: user.data.message,
                      success: user.data.success}});
        } 
    },
    SignOutUser :(closeuser)=>{
        return async (dispatch, getState) => {
            /* console.log("signout") */
        const user = axios.post('https://mytinerary-silva.herokuapp.com/api/auth/signOut',{closeuser})
        localStorage.removeItem("token")
        console.log(user)
        dispatch({type: 'user', payload: null});
    } 
},

VerificarToken: (token) => {

    return async (dispatch, getState) => {
        console.log(token)
        const user = await axios.get('https://mytinerary-silva.herokuapp.com/api/auth/signInToken', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        console.log(user)
        
        if (user.data.success) {
            dispatch({ type: 'user', payload: user.data.response });
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            });
        } else {
            localStorage.removeItem('token')
        }

    }
}


}
export default userActions;