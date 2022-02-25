import React from 'react'
import Card from './Card'
import data from '../../card.json'
import { useState } from 'react'
function Cards() {
  const [filter, setFilter] = useState('');

  let dataSearch = data.filter(city => city.city_name.substring(0,filter.length).toLowerCase() === filter.toLowerCase().trim())
  return (
    <div className='container d-flex justify-content-center h-100'>
      <div className='col'>
        <input type="text" placeholder="Search..." value={filter} onChange={(event)=>setFilter(event.target.value)}/>
        </div>
        <div className='row'>
           {
           dataSearch.map(card=> (
                <div className='col-md-4' key={card.id}>
                    <Card
                    title={card.city_name}
                    image={card.night_photo_url}
                    text={card.description}
                    />
                </div>
           ))
           }
        </div>
    </div>
  )
}

export default Cards