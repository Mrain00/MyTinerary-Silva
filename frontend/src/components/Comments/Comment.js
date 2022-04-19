import * as React from 'react';
import { connect } from "react-redux";
import commentsActions from '../../redux/actions/commentsActions';
import { useState } from 'react';
import Swal from 'sweetalert2'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
const Comment = (props) => {
  const [inputText, setInputText] = useState("")
  /*const [place, setPlace] = useState()*/

  const cargarComentario = async (event) => {
    const commentData = {
      itineraryId: props.itineraryId,
      comments: {
        comment: inputText,
        userID: props.user
      },
    }
    //console.log(commentData)
    await props.addComment(commentData)/* llamo a la props y le paso el objeto que ya cree  */
    Swal.fire(
      'Comment entered!',
      '',
      'success'
    )
    setInputText("")
    props.setReload(!props.reload)
  }
  return (
    <>
      {props.user ?
          <div className="inputComment">
            <label className="ChatOutlinedIconPadre">
            <ChatOutlinedIcon className="ChatOutlinedIcon"/>
            </label>
            <input placeholder='Write a comment...' className="inputText" onChange={(event) => setInputText(event.target.value)} value={inputText} />
            <SendOutlinedIcon onClick={cargarComentario} className="SendOutlinedIcon" />
          </div>
          :
        <h1 className='yourComment'>Leave us your comment by doing Sign in!!</h1>
      }
    </>


  );




}



const mapDispatchToProps = {
  addComment: commentsActions.addComment,
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);