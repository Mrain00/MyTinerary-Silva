import axios from 'axios';

const commentsActions = {

    addComment: (comments) => {
        console.log(comments)
        /* Comments es el objeto que despues se desestructurara en el backend,
         "se desestructura en comments e itineraryId " */
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post('https://mytinerary-silva.herokuapp.com/api/itinerarios/comment', { ...comments }, {
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
    modifyComment: (idComment, comments) => {
        console.log(comments.comment)
        console.log(idComment)
        //id es el requerimiento por params de "idComment"
        /* comments es el objeto que se desestructura y es igual a comments (req.body) que adentro tiene
        otro objeto con "comment" y "userID"*/
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try{
            const res = await axios.put('https://mytinerary-silva.herokuapp.com/api/itinerarios/comment/' + idComment,  { comments }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            //console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        } catch (error) {
            console.log(error)
        }

        }
    },
    deleteComment: (idComment) => {
        console.log(idComment)
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`https://mytinerary-silva.herokuapp.com/api/itinerarios/comment/${idComment}`, {}, {
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