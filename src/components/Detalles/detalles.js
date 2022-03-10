import React, { useEffect, useState } from 'react';
import { Link as LinkRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";
import itinerariesActions from '../../redux/actions/itinerariosActions';
import ItineraryItem from '../Card/ItineraryItem';
import '../../styles/Detalles.css';
const Detalles = (props) => {
  const {
    city,
    itineraries
  } = props;
console.log(props);
  const { id } = useParams()
  useEffect(() => {

    props.findOneCiudad(id)
    props.itinerariesPerCity(id)
  }, []);
  return (
    <div className="container">
      {/*             <img src="https://media.moddb.com/images/members/5/4589/4588901/profile/pngwing.com_2.png" width={100} alt={"underconstruction"}/>
            <h2>UNDER CONSTRUCTION</h2> */}
      <LinkRouter to={`/cities`} className="btn btn-outline-secondary rounded-5 m-3">
        Back to cities
      </LinkRouter>
      {city._id && (
        <div className='col-md-5 container-fluid' >
          <div className='card text-center bg-dark h-100'>
            <img src={city.sunset_photo} alt="city" className='img-fluid' />
            <img className="flag" src={process.env.PUBLIC_URL+ `/flags/${city.flag}`} alt="city"/>
            <div className='card-body text-light container-fluid'>
              <h4 className="card-title">
                {city.city}
              </h4>
              <p className='card-text text-secondary '>
                {city.description}
              </p>
            </div>
          </div>
        </div>)}
            
            {<ItineraryItem itineraries={itineraries}/>}

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    city: state.citiesReducer.city,
    itineraries: state.itinerariesReducers.itineraries
  };
};

const mapDispatchToProps = {
  findOneCiudad: citiesActions.findOneCiudad,
  itinerariesPerCity: itinerariesActions.itinerariesPerCity
};
export default connect(mapStateToProps, mapDispatchToProps)(Detalles);