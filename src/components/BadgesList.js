import React from 'react';
import '../components/styles/Badges.css';
import facebook_logo from '../images/facebook.svg'



class BadgesList extends React.Component{
  render(){
    return(
      <ul className="list-unstyled ">
        {this.props.badges.map((badge)=>{
          return(
            <li className="list__element" key={badge.id}>
              <img className="list__element__avatar" src={badge.image}  alt="Avatarurl"/>
              <div>
                <p>{badge.name} <br/>{badge.species}</p>
                <a href="/"><img src={facebook_logo} alt="facebook_logo" />@{badge.name}</a>
              </div>
            </li>
          )
        }
        )}
      </ul>
    )
  }

}


export default BadgesList
