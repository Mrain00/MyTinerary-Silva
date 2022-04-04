import React from "react";
import Banner from '../../img/banner.png';
import { Link as LinkRouter } from "react-router-dom";

const Main = ()=>{
    return(
    <div className='main'>
        <section>
        <h1 className='MyTinerary'>MyTinerary</h1>
        <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <LinkRouter to="/cities" className="Call">

        Cities!

        </LinkRouter>
        </section>
        <img src={Banner} alt='banner' id='fotomain' />
    </div>
    )
}
export default Main;