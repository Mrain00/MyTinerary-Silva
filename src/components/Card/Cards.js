import React from 'react'
import { useState, useEffect } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import '../../styles/Cards.css'
import Spinner from './Spinner'
import {connect} from 'react-redux';
import citiesActions from '../../redux/actions/citiesActions';
 function Cards(props) {
  const [loading, setLoading] = useState(false);
 useEffect(() => {
    setLoading(true);
    props.fetchearCiudades()
    setLoading(false);
}, [props])
console.log(props)

 const searching = (search) => {
/*   setSearchTitle(search.target.value); */
  props.filterCity(props.cities, search.target.value);
}
  return (
    <>
    <div className='searchfilter'>
      <h3 className='filterName'>Filter by Cities</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={searching}
      />
      </div>
    <div className="container d-flex justify-content-center h-100">
      <div className='row'>   
      {loading ? (<Spinner/>) : (console.log("este es el console log de loading"))}
      {props.filteredCities?.length !== 0 && props.filteredCities!= null ? (
        props.filteredCities?.map((item) => (
        <div className='col-md-4 container-fluid' key={item._id}>
        <div className='card text-center bg-dark h-100'>
      <img src={item.sunset_photo} alt="city" className='img-fluid'/>
      <img className="flag" src={process.env.PUBLIC_URL+ `/flags/${item.flag}`} alt="city"/>
      <div className='card-body text-light container-fluid'>
        <h4 className="card-title">
          {item.city}
        </h4>
        <p className='card-text text-secondary '>
          {item.description}
        </p>
        <LinkRouter to={`/detalles/${item._id}`} className="btn btn-outline-secondary rounded-0">
          Go to this website
        </LinkRouter>
      </div>
    </div>
        </div>))
        ) : (
        <img alt='notFound'src='https://www.hostingplus.com.co/wp-content/uploads/2020/12/error404quees.jpg' className='notFound'/>
        )}
      </div>
    </div>
    </>
      )
  }
  const mapStateToProps = (state)=>{
    return{
      cities: state.citiesReducer.cities,
      filteredCities: state.citiesReducer.filteredCities,
    }
  }
  const mapDispatchToProps ={
    fetchearCiudades: citiesActions.fetchearCiudades,
    filterCity: citiesActions.filterCity 
  }
export default connect(mapStateToProps,mapDispatchToProps)(Cards)