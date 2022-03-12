import React from 'react';
import CardDetail from './CardDetail'
import Hero from '../../img/hombretravel.svg';
import { Link as LinkRouter } from "react-router-dom";
const ItineraryItem = ({ itineraries }) => {
  if (itineraries.length === 0) {
    return (
      <div className="no-hay-itinerario">
        <img src={Hero} alt='hero' id='hero' />
        <h1 className="rs">We still do not have guides in this city, we are looking for!
        </h1>
        <LinkRouter to={`/cities`} className="btc" >
          Back to cities!
        </LinkRouter>
      </div>

    )
  }
  return (<>
    {itineraries.map((data, index) => <CardDetail data={data} key={index} />)}
    <LinkRouter to={`/cities`} className="btc" >
      Back to cities!
    </LinkRouter>
  </>
  )
}

export default ItineraryItem;