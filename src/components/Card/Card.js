import React from 'react'
import { Link as LinkRouter } from "react-router-dom";

function Card(props) {
  return (
    <div className='card text-center bg-dark h-100'>
      <img src={props.image} alt="city" className='img-fluid'/>
      <div className='card-body text-light container-fluid'>
        <h4 className="card-title">
          {props.title}
        </h4>
        <p className='card-text text-secondary '>
          {props.text}
        </p>
        <LinkRouter to={`detalles/${props.key}`} className="btn btn-outline-secondary rounded-0">
          Go to this website
        </LinkRouter>
      </div>
    </div>
  )
}
export default Card