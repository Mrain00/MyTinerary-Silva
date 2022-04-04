import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from "react-redux";
import '../../styles/Itinerary.css'
import Likes from '../Detalles/likes'
import activitiesActions from '../../redux/actions/activitiesActions'
import ActivityItem from '../Detalles/ActivityItem'
import Comments from '../Comments/Comments'
import Comment from '../../components/Comments/Comment'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function CardDetail({ data, reload, setReload, itineraryId, activityPerItinerary }) {

  const [expanded, setExpanded] = React.useState(false);
  const [activities, setActivities] = useState()
console.log(data)
  useEffect(() => {
    activityPerItinerary(itineraryId)
      .then((res) => { setActivities(res.response) })
    // eslint-disable-next-line     
  }, []);
/*   const comment = {
    itineraryId:itineraryId,
    comment: "valor del input"
  } */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <div className="iti-content">
      <Card style={{ marginRight: 10 }}className="CardsItinerary">
        <CardHeader className="title"
          title={data.title}
        />
        <div className="hr-itinerary" />
        <CardMedia
          className="imageI"
          component="img"
          height="300"
          image={data.image}
          alt={data.title}
        />
        <CardActions disableSpacing>
          <Likes likes={data.likes} reload={reload} setReload={setReload} id={data._id} />
          <IconButton >
            <ShareIcon />
          </IconButton>
         
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
            
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="cardContent">

            <div className="child">

              <Typography paragraph>USERNAME:</Typography>
              <Typography paragraph className="imagecont">
                {<Avatar aria-label="recipe" >
                  <img src={data.userImg} className='userImage' alt="userImage" />
                </Avatar>}
                {data.userName}
              </Typography>
            </div>
            <div className="child">
              <Typography paragraph>HASHTAG/S:</Typography>
              <Typography paragraph className="childHash">
                {data.hashtags}
              </Typography>
            </div>
            <div className="child">
              <Typography paragraph>DURATION:</Typography>
              <Typography paragraph>
                {"🕓".repeat(parseInt(data.hours))}
              </Typography>
            </div>
            <div className="child">
              <Typography paragraph>PRICE:</Typography>
              <Typography paragraph>
                {"💵".repeat(parseInt(data.price))}
              </Typography>
            </div>
              <ActivityItem activities={activities} />
              <div className='componentComment'>
                <div className='componentCommentChild'>
              {data.comments.map((comment) => (
              <Comments itineraryId={data._id} idComment={comment._id} comment={comment} reload={reload} setReload={setReload} key={comment._id} className="aver"/>
            ))
            }
            </div>
            <Comment itineraryId={data._id} reload={reload} setReload={setReload}/>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}
const mapDispatchToProps = {
  activityPerItinerary: activitiesActions.activityPerItinerary
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardDetail)