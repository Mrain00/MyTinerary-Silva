import React, { useEffect/* , useRef */ } from 'react';
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
  const { id } = useParams()

  useEffect(() => {

    props.findOneCiudad(id)
    props.itinerariesPerCity(id)
    // eslint-disable-next-line
  }, []);
/*   const myRef = useRef();
  useEffect(() => {
    const handleScroll = ()=>{
      const div = myRef.current
      console.log(div.getBoundingClientRect()) 
    }
    window.addEventListener('scroll', handleScroll)
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
   */
  return (
    <div className="container-detalle" >
      {city._id && (
        <>
          <div className='col-principal' /* ref={myRef} */ style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/background/${city.background}`})` }}>
            <div className='container-texto'>
              <div className='row-title'>
                <h4 className="city">
                  {city.city}
                </h4>
                <img src={earth} className='earth' alt={"earth"} />
              </div>
              <p className='card-text text-secondary description' >
                {city.description}
              </p>
              <button className='btc' onClick={()=>window.scrollTo(0, 655)}>
                See More!
              </button>
            </div>
          </div>
          <img className="flag" src={process.env.PUBLIC_URL + `/flags/${city.flag}`} alt="city" />
        </>)}
      {<div >
        <ItineraryItem itineraries={itineraries}/>
        </div>}
        
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