import React from 'react'
import { useState, useEffect } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import '../../styles/Cards.css'
import notFound from '../../img/mantenimiento.png'
/* import Spinner from './Spinner'
 */
import { connect } from 'react-redux';
import citiesActions from '../../redux/actions/citiesActions';
import backkk from '../../img/fondosearch.png';
function Cards(props) {
  const [searchTitle, setSearchTitle] = useState("")
  useEffect(() => {
    props.fetchearCiudades()
        // eslint-disable-next-line     
  }, [])


  const searching = (search) => {
    setSearchTitle(search.target.value);
    props.filterCity(props.cities, search.target.value);
  }
  return (
    <>
      <div className='searchfilter'>
        <img src={backkk} alt="background"/>
        <input
          type="text"
          placeholder="Filter by Cities 🔍"
          onChange={searching}
          value={searchTitle}
          className="input"
        />
      </div>
      <div className="container d-flex justify-content-center h-100">
        <div className='row justify-content-center'>
          {/*       {loading ? (<Spinner/>) : (console.log("este es el console log de loading"))} */}
          {props.filteredCities?.length !== 0 && props.filteredCities != null ? (
            props.filteredCities?.map((item) => (
                <LinkRouter to={`/detalles/${item._id}`} key={item._id} className="container-card card">
                    <img src={item.sunset_photo} alt="city" className='img'/>
                    <h4 className="card-title" style={{fontSize:"1rem", position:"absolute", textAlign:"center",  margin:"auto", bottom:"3px", left:"calc(8rem - 50%)", width:"8rem", color:"#fff", backgroundImage:"none", fontWeight:"500"}}>
                      {item.city}
                    </h4>
                </LinkRouter>))
          ) : (<>
            <h3 className="notFoundText">Oh! it seems that the result was not found</h3>
            <img alt='notFound' src={notFound} className='notFound' />
            </>
          )}
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    filteredCities: state.citiesReducer.filteredCities,
  }
}
const mapDispatchToProps = {
  fetchearCiudades: citiesActions.fetchearCiudades,
  filterCity: citiesActions.filterCity
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards)