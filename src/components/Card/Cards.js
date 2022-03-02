import React from 'react'
/* import data from '../../card.json' */
import { useState, useEffect } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import axios from 'axios'
import '../../styles/Cards.css'
 function Cards() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [ciudades, setCiudades] = useState([])
 useEffect(() => {
  const loadPosts = async () => {
    setLoading(true);
    const response = await axios.get(
      "http://localhost:4000/api/allcities"
    )
    setCiudades(response.data.response.ciudades)
    setPosts(response.data.response.ciudades)
    setLoading(false);
  }

  loadPosts()
}, [])

 const searching = (search) => {
  setSearchTitle(search.target.value);
  filtro(search.target.value);
}
const filtro = function (resultado) {
  let resultadoFiltro = posts.filter(function (card)
  {
    if (
      card.city
        .toString()
        .toLowerCase()
        .startsWith(resultado.toLowerCase().trim())
    ) {
      return card
    } return(console.log("filtro"))
  })
  setCiudades(resultadoFiltro)
}
  console.log(searchTitle)
  return (
    <>
    <div className='searchfilter'>
      <h3 className='filterName'>Filter by Cities</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchTitle}
        onChange={searching}
      />
      </div>
    <div className="container d-flex justify-content-center h-100">
      <div className='row'>   
      {loading ? (<h4>Loading ...</h4>) : (console.log("este es el console log de loading"))}
      {ciudades.length !== 0 ? (
        ciudades.map((item) => (
        <div className='col-md-4 container-fluid' >
        <div className='card text-center bg-dark h-100'>
      <img src={item.sunset_photo} alt="city" className='img-fluid'/>
      <div className='card-body text-light container-fluid'>
        <h4 className="card-title">
          {item.city}
        </h4>
        <p className='card-text text-secondary '>
          {item.description}
        </p>
        {console.log(item._id)}
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
export default Cards

