import React from 'react'
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../styles/Itinerary.css'

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
  
function CardDetail({ data }) {
    
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return (
    <Card style={{ marginRight: 10}} className="CardsItinerary">
    <CardHeader className="title"
      title={data.title}
    />
    <CardMedia
      className="imageI"  
      component="img"
      height="300"
      image={data.image}
      alt="Paella dish"
    />
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
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

        <Typography paragraph>USERNAME:</Typography>
        <Typography paragraph>
          {data.userName}{
        <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe" >
            <img src={data.userImg} className='userImage' alt="userImage"/>
        </Avatar>
      }
        </Typography>
        <Typography paragraph>HASHTAG/S:</Typography>
        <Typography paragraph>
          {data.hashtags}
        </Typography>
        <Typography paragraph>DURATION:</Typography>
        <Typography paragraph>
          {"🕓".repeat(parseInt(data.hours))}
        </Typography>
        <Typography paragraph>PRICE:</Typography>
        <Typography paragraph>
          {"💵".repeat(parseInt(data.price))}
        </Typography>

      </CardContent>
    </Collapse>
  </Card>
  )
}

export default CardDetail