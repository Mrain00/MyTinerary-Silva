import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";
import itinerariesActions from '../../redux/actions/itinerariosActions';
import ItineraryItem from '../Card/ItineraryItem';
import '../../styles/Detalles.css';
import earth from '../../img/earth.png';
const Detalles = (props) => {
  console.log(props)
  const [reload, setReload] = useState(false)
  const { city, itineraries } = props;
  
  const { id } = useParams()
  
  useEffect(() => {
    props.findOneCiudad(id)
    props.itinerariesPerCity(id)
    // eslint-disable-next-line     
  }, [!reload]);
  return (
    <div className="container-detalle" >
      {city._id && (
        <>
          <div className='col-principal' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/background/${city.background}`})` }}>
            <div className='container-texto'>
              <div className='row-title'>
                <h4 className="city">
                  {city.city}
                </h4>
                <img src={earth} className='earth' alt={"earth"} />
              </div>
              <p className='card-text description'>
                {city.description}
              </p>
              <button className='btc' onClick={() => window.scrollTo(0, 655)}>
                See More!
              </button>
            </div>
          </div>
          <img className="flag" src={process.env.PUBLIC_URL + `/flags/${city.flag}`} alt="city" />
        </>)}
      {<div >
        <ItineraryItem itineraries={itineraries} reload={reload} setReload={setReload} className="itinerary-container" />
      </div>}

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    city: state.citiesReducer.city,
    itineraries: state.itinerariesReducers.itineraries,
    userReducer: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  findOneCiudad: citiesActions.findOneCiudad,
  itinerariesPerCity: itinerariesActions.itinerariesPerCity,
};
export default connect(mapStateToProps, mapDispatchToProps)(Detalles);