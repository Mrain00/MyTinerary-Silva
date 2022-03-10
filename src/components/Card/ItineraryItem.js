import * as React from 'react';
import CardDetail from './CardDetail'

const ItineraryItem = ( { itineraries } ) => {
  if (itineraries.length === 0) {
    return (
      <h1>NO HAY</h1>
    )
  }
return(
        itineraries.map((data) => <CardDetail data={data}/>)
)
}

export default ItineraryItem;