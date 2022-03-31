import React/* , { useEffect } */ from 'react';
import { connect } from "react-redux";
import itinerariesActions from '../../redux/actions/itinerariosActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Swal from "sweetalert2";


const Likes = (props) => {
  async function likesOrDislikes() {
    await props.LikeAndDislike(props.id)
    props.setReload(!props.reload);
  }
  async function noUser() {
    Swal.fire({
      icon: 'error',
      title: 'Sign in!',
    })
  }
  
  return (
    <div>
      {props.user ? (<IconButton aria-label="add to favorites" onClick={likesOrDislikes} >
        {props.likes.includes(props.user.id) ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}

        <Typography>{props.likes.length}</Typography>
      </IconButton>
      ) : (
        <IconButton aria-label="Like" onClick={noUser}>
          <FavoriteBorderIcon />
          <Typography>{props.likes.length}</Typography>
        </IconButton>
      )}
    </div>
  )
}
const mapDispatchToProps = {
  LikeAndDislike: itinerariesActions.LikeAndDislike,
/*getOneItinerary: itinerariesActions.getOneItinerary*/
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes)