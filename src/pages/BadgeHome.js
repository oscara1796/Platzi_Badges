import React from 'react';
import {Link} from 'react-router-dom';
import "../components/styles/BadgeHome.css";



function BadgeHome(){
    return(
      <React.Fragment>
        <div className="Home_container">
          <div>
            <img className="BadgeHome__logo" alt="BadgeHome__logo" />
            <h1>Print your Badges</h1>
            <small>The easiest way  to manage your conference</small>
            <Link to="/Badges">Start now </Link>
          </div>
          <img className="BadgeHome__img-hero " alt="Photo--hero"/>
        </div>
      </React.Fragment>
    )
}


export default BadgeHome;
