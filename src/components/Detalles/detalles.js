import React from "react";
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../../styles/Detalles.css'
import { Link as LinkRouter } from "react-router-dom";
export default function Detalles() {
    const [ciudades, setCiudades] = useState([])
    const { id } = useParams()
    axios.get(
        "http://localhost:4000/api/allcities"
      )
      .then(response=>setCiudades((response.data.response.ciudades).filter(card=>card._id == id)))

    return(
        <div className="container">
            <img src="https://media.moddb.com/images/members/5/4589/4588901/profile/pngwing.com_2.png" width={100} alt={"underconstruction"}/>
            <h2>UNDER CONSTRUCTION</h2>
            <LinkRouter to={`/cities`} className="btn btn-outline-secondary rounded-0">
          Back to cities
            </LinkRouter>
            {ciudades.map(card=>
            <div className='col-md-4 container-fluid' >
            <div className='card text-center bg-dark h-100'>
          <img src={card.sunset_photo} alt="city" className='img-fluid'/>
          <div className='card-body text-light container-fluid'>
            <h4 className="card-title">
              {card.city}
            </h4>
            <p className='card-text text-secondary '>
              {card.description}
            </p>
          </div>
        </div>
        </div>
        )}
            </div>
    )
}
