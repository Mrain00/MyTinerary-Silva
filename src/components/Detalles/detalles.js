import React, { useEffect } from 'react';
import { Link as LinkRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";
import itinerariesActions from '../../redux/actions/itinerariosActions';
import ItineraryItem from '../Card/ItineraryItem';
import '../../styles/Detalles.css';
import earth from '../../img/earth.png'; 
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
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-detalle">
      {/*             <img src="https://media.moddb.com/images/members/5/4589/4588901/profile/pngwing.com_2.png" width={100} alt={"underconstruction"}/>
            <h2>UNDER CONSTRUCTION</h2> */}
      {city._id && ( 
        <>
        <div className='col-principal' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/background/'+ `${city.background}`})`}}>
            <div className='container-texto'>
              <div className='row-title'>
              <h4 className="city">
                {city.city}
              </h4>
              <img src={earth} className='earth' alt={"earth"}/>
              </div>
              <p className='card-text text-secondary description' >
                {city.description}
              </p>
            </div>
        </div>   
            <img className="flag" src={process.env.PUBLIC_URL + `/flags/${city.flag}`} alt="city" />
        </>)}
      {<ItineraryItem itineraries={itineraries} />}

              <LinkRouter to={`/cities`} className="btc" >
                Back to cities
              </LinkRouter>
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