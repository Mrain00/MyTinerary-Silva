import * as React from 'react';
import CardDetail from './CardDetail'

const ItineraryItem = ( { itineraries } ) => {
  if (itineraries.length === 0) {
    return (
      <h1 className="texto-nohay">We still do not have guides in this city, we are looking for!
      </h1>
    )
  }
return(
        itineraries.map((data) => <CardDetail data={data}/>)
)
}

export default ItineraryItem;