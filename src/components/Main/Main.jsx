import React from "react";
import Banner from '../../img/banner.png';
const Main = ()=>{
    return(
    <div className='main'>
        <section>
        <h1>MyTinerary</h1>
        <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        </section>
        <img src={Banner} alt='banner' id='fotomain' />
    </div>
    )
}
export default Main;