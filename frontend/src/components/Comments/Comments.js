import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import commentsActions from '../../redux/actions/commentsActions';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Avatar from '@mui/material/Avatar';
import '../../styles/comments.css'
import Swal from 'sweetalert2'

const Comments = (props) => {
    console.log(props.idComment)
    const input = useRef()
    const [modify, setModify] = useState(false)


    async function modificarComentario(idComment) {
        const commentData = {
            comment: input.current.value
        }
        console.log(commentData)
        console.log(modify)
        setModify(!modify)
        await props.modifyComment(idComment, commentData)
        Swal.fire(
            'Comment modified!',
            '',
            'success'
            )
        props.setReload(!props.reload)
    }


    
    async function eliminarComentario(idComment) {
        const awaitDelete = await props.deleteComment(idComment)
        if (awaitDelete.data.success === true) {
            Swal.fire({
                title: 'Are you sure you want to remove the comment?',
                showCancelButton: true,
                confirmButtonText: 'Remove',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Comment removed!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved')
                }
              })
            props.setReload(!props.reload)
        }

    }
    console.log(props.comment.comment)
    return (
        <>
            {/* SI EL OBJECT ID DE ESE COMENTARIO ES DIFERENTE A EL OBJECT ID DEL USUARIO 
                        SIMPLEMENTE VOY A MOSTRAR EL COMENTARIO */}
            {/* basicamente aca dice, si el que esta viendo el comentario no es el propietario del mismo renderizame esto */}
            <div className="containerComments">
            {props.comment.userID?._id !== props.user?.id ?
                <div className="CommentContainer" key={props.comment._id}>
                    <div className="CommentHeader ">
                        <Avatar src={props.comment.userID?.imagenURL} alt={props.comment.userID?.firstName} className="avatar" />
                        <h6>{props.comment.userID?.firstName}</h6>
                    </div>
                    <div className="CommentBody">
                        <p className="card-text cardText comment">{props.comment.comment}</p>
                    </div>
                </div> : /* de lo contrario, si el que esta chusmeando el comentario es el propietario */

                <div className="CommentContainer">
                    <div className="CommentHeader">
                        <Avatar src={props.comment.userID?.imagenURL} alt={props.comment.userID?.firstName} className="avatar"/>
                        <h6>{props.comment.userID?.firstName}</h6>
                    </div>
                    <div className="CommentBody">
                        <div type="text" className="card-text textComments" >
                            {modify ? (
                                <input defaultValue={props.comment.comment} ref={input} className="inputModify"/>
                            ) : (
                                <p className="comment">"{props.comment.comment}"</p>
                            )}
                        </div>
                        {modify ? (
                            <div className='buttons'>
                                <button
                                    id={props.comment._id}
                                    onClick={() => modificarComentario(props.idComment)}
                                    className="buttonConfirm"
                                ><CreateOutlinedIcon className="confirmButtonLapiz"/>
                                    Confirm Modify
                                </button>
                                <button
                                    id={props.comment._id}
                                    onClick={() => setModify(!modify)}
                                    className="buttonCancel"
                                ><CancelOutlinedIcon className='cancelIcon'/>
                                    Cancel
                                </button>
                            </div>
                        ) : (<div className='buttons'>
                            <CreateOutlinedIcon
                                id={props.comment._id}
                                onClick={() => setModify(!modify)}
                                className='editButton'
                            />
                            <DeleteOutlineIcon
                                id={props.idComment}
                                onClick={() => eliminarComentario(props.idComment)}
                                className='deleteButton'
                            />
                            </div>
                            )}
                            
                    </div>
                </div>
            }</div>
        </>
    )
}
const mapDispatchToProps = {
    modifyComment: commentsActions.modifyComment,
    deleteComment: commentsActions.deleteComment,
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)