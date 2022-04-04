import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";
import itinerariesActions from '../../redux/actions/itinerariosActions';
import ItineraryItem from '../Card/ItineraryItem';
import '../../styles/Detalles.css';
import earth from '../../img/earth.png';
import countryImage from '../../img/country.png'
import currencyImage from '../../img/currency.png'
import languageImage from '../../img/language.png'
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
          <div className="t-testimonials">
                <h3>
                Features.
                </h3>
                <div className="hr">
                </div>
                <p>
                Discover the characteristics of {city.city}.
                </p>
            </div>
          <div className='section-details'>
            
            <div className='country-card section-details_card'>
            <img src={countryImage} alt={city.country} className='section-details_images'/>
            <h6 className='text-cityDetail'>
            Country: {city.country}
            </h6>
          <img className="flag" src={process.env.PUBLIC_URL + `/flags/${city.flag}`} alt="city" />
            </div>
            <div className='language-card section-details_card'>
            <img src={languageImage} alt={city.language} className='section-details_images'/>
            <h6 className='text-cityDetail'>
              Language: {city.language}
            </h6>
            </div>
            <div className='currency-card section-details_card'>
              <img src={currencyImage} alt={city.currency} className='section-details_images'/>
              <h6 className='text-cityDetail'>
                Currency: {city.currency}
            </h6>
            </div>
          </div>
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