import React from 'react'
import Card from './Card'
/* import data from '../../card.json' */
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/Cards.css'

 function Cards() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4000/api/allcities"
      );
      setPosts(response.data.response.ciudades);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.city.toLowerCase().startsWith(searchTitle.toLowerCase().trim())
            ) {
              return value;
            }
          })
          .map((item) => 
          <div className='col-md-3'>
          <Card key={item.id} 
          title={item.city}
          text={item.description}
          image={item.sunset_photo}
          />
          </div>)
      )}
    </div>
  );
}

export default Cards