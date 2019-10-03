import React from 'react';
import {Link} from 'react-router-dom';
import "../components/styles/BadgeHome.css";
import logo from "../images/confLogo.png";
import logoHero from "../images/hero_img.png";




function BadgeHome(){
    return(
      <React.Fragment>
        <div className="Home_container ">
          <div className="text-container ">
            <img className="BadgeHome__logo" src={logo} alt="BadgeHome__logo" />
            <h1>Print your Badges</h1>
            <small >The easiest way  to manage your conference</small>
            <Link to="/badges"  className="linkHome btn btn-success">Start now </Link>
          </div>
          <img className="BadgeHome__img-hero " src={logoHero} alt="Badge_hero"/>
        </div>
      </React.Fragment>
    )
}


export default BadgeHome;
