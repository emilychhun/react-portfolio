import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
           <div className="main-info">
               <h1>web development and websites promotions</h1>
               <Typed className="typed-text"
               strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
               typeSpeed={40}
               backSpeed={60}
               loop
               />
               <a href="#Contact2" className="btn-main-offer" id="Contact">contact me</a>
           </div>
        </div>
    )
}

export default Header
