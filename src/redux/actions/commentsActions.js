import axios from 'axios';

const commentsActions = {

    addComment: (comments) => {
        console.log(comments)
        /* Comments es el objeto que despues se desestructurara en el backend,
         "se desestructura en comments e itineraryId " */
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/itinerarios/comment', { comments }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
    modifiComment: (comments, id) => {
        console.log(comments)
        console.log(id)
        //id es el requerimiento por params de "idComment"
        /* comments es el objeto que se desestructura y es igual a comments (req.body) que adentro tiene
        otro objeto con "comment" y "userID"*/
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(`http://localhost:4000/api/itinerarios/comment/${id}`, { comments }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    },
    deleteComment: (id) => {
        console.log(id)
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/itinerarios/comment/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

}

export default commentsActions;