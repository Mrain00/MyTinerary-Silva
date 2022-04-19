import React from "react";
import '../../styles/Footer.css'
import {Link as LinkRouter} from "react-router-dom"
import reactFooter from '../../img/icons8-react-100.png';
const Footer = ()=>{
    return(
        <footer>
        <div className="part-uno">
            <div>
            </div>
            <div className="upParraf">
                <p>Made with React</p>
            <img src={reactFooter} alt="logoreact" className="reactFooter"/>
            </div>
            <hr className="linea"/>
            <p>© 2022 MyTinerary Inc. All rights reserved.</p>
        </div>
         <div className="Navv">
             <h4>NAVIGATION</h4>
             <LinkRouter to="/" className="Link">
             <button className="ButtonAppBar">
                 HOME
             </button>
             </LinkRouter>
             <LinkRouter to="/cities" className="Link">
             <button className="ButtonAppBar">
                 CITIES
             </button>
             </LinkRouter>
         </div>
        </footer>
    )
}
export default Footer;