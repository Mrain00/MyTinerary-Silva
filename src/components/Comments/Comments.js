import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import commentsActions from '../../redux/actions/commentsActions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Comments = (props) => {
    console.log(props.idComment)
    const input = useRef()
    /*  const [inputText, setInputText] = useState()*/
    const [modify, setModify] = useState(false)

    async function modificarComentario(idComment) {
        const commentData = {
            comment: input.current.value,
        }
        await props.modifyComment(commentData)
        setModify(!modify)
        props.setReload(!props.reload)
    }
    
    async function eliminarComentario(idComment) {
        const commentData = {
            idComment: idComment,
        }
        const awaitDelete = await props.deleteComment(idComment)
        if (awaitDelete.data.success === true) {
            props.setReload(!props.reload)
        }
        
    }
    console.log(props.comment.comment)
    return (
        <>
            {/* SI EL OBJECT ID DE ESE COMENTARIO ES DIFERENTE A EL OBJECT ID DEL USUARIO 
                        SIMPLEMENTE VOY A MOSTRAR EL COMENTARIO */}
            {/* basicamente aca dice, si el que esta viendo el comentario no es el propietario del mismo renderizame esto */}
            {props.comment.userID?._id !== props.user?.id ?
                <div className="card cardComments " key={props.comment._id}>
                    <div className="card-header cardHeader">
                        <img src={props.comment.userID?.imagenURL} alt={props.comment.userID?.firstName} />
                        <p>{props.comment.userID?.firstName}</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text cardText">{props.comment.comment}</p>
                    </div>
                </div> : /* de lo contrario, si el que esta chusmeando el comentario es el propietario */

                <div className="card cardComments">
                    <div className="card-header cardHeader">
                        <img src={props.comment.userID?.imagenURL} alt={props.comment.userID?.firstName} />
                        <p>{props.comment.userID?.firstName}</p>
                    </div>
                    <div className="card-body ">
                        <div type="text" className="card-text textComments" >
                            {modify
                                ? <input defaultValue={props.comment.comment} ref={input} />
                                : <p>{props.comment.comment}</p>
                            }
                        </div>
                        {modify
                            ? (
                                <>
                                </>
                            )
                            :<>
                                <EditIcon id={props.idComment} onClick={() => modificarComentario(props.idComment)} />
                                <DeleteIcon id={props.comment._id} onClick={() => eliminarComentario(props.idComment)} />
                            </>
                        }
                    </div>
                </div>
            }
        </>
    )
}
const mapDispatchToProps = {
    addComment: commentsActions.addComment,
    modifyComment: commentsActions.modifyComment,
    deleteComment: commentsActions.deleteComment,
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)