import * as React from 'react';
import CardDetail from './CardDetail'

const ItineraryItem = ( { itineraries } ) => {
  if (itineraries.length === 0) {
    return (
      <h1 className="rs">We still do not have guides in this city, we are looking for!
      </h1>
    )
  }
return(
        itineraries.map((data, index) => <CardDetail data={data} key={index}/>)
)
}

export default ItineraryItem;